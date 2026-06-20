import React, { useState } from "react";
import user from "../../../../assets/images/course-dtail/user.png";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import replyIcon from "../../../../assets/images/icons/course-detail/reply.png";
import { GetReplyComment } from "../../../../core/services/Course-detail/GetReplyComment/GetReplyComment";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ReplyComment } from "../../../../core/services/Course-detail/ReplyComment/ReplyComment";
import { postCommentLike } from "../../../../core/services/Course-detail/addCommentLike/addCommentLike";
import { postCommentDisLike } from "../../../../core/services/Course-detail/addCommentDislike/addCommentDislike";
import { deleteCommentLike } from "../../../../core/services/Course-detail/removeCommentLike/removeCommentLike";
import Loading from "../../../atoms/loading/Loading";

const CourseComment = ({ comment, CourseId }) => {
  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: replyData,
    isLoading: isCommentReplyLoading,
    refetch,
  } = useQuery({
    queryKey: ["course-comment-reply", comment.id],
    queryFn: () => GetReplyComment(comment.id),
    enabled: !!comment.id,
  });

  const handleSendReply = async () => {
    if (!replyText.trim()) return;

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("CommentId", comment.id);
      formData.append("CourseId", CourseId);
      formData.append("Title", "پاسخ به نظر");
      formData.append("Describe", replyText);

      await ReplyComment(formData);

      setReplyText("");
      setIsReplyBoxOpen(false);
      await refetch();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

const handleLike = async () => {
  try {
    if (comment.currentUserLike) {
      await deleteCommentLike(comment.id);
    } else {
      if (comment.currentUserDisLike) {
        await postCommentDisLike(comment.id);
      }
      await postCommentLike(comment.id);
    }
    queryClient.invalidateQueries({ queryKey: ["courseComments", CourseId] });
  } catch (error) {
    console.error("خطا در لایک:", error);
  }
};

const handleDisLike = async () => {
  try {
    if (comment.currentUserDisLike) {
      await postCommentDisLike(comment.id);
    } else {
      if (comment.currentUserLike) {
        await deleteCommentLike(comment.id);
      }
      await postCommentDisLike(comment.id);
    }
    queryClient.invalidateQueries({ queryKey: ["courseComments", CourseId] });
  } catch (error) {
    console.error("خطا در دیسلایک:", error);
  }
};

isCommentReplyLoading ? <Loading/> :""
  return (
    <div className="w-full rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background py-5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-9/10 m-auto gap-3 p-5 border-b border-solid border-neutral-100">
          <img src={comment.pictureAddress || user} alt="" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl text-right text-textC">
              {comment.author || "کاربر سایت"}
            </h1>
            <p className="font-bold text-md text-right text-neutral-300"></p>
          </div>
        </div>

        <div className="px-5 text-right pb-5">
          <p className="font-normal text-sm text-neutral-500 px-5">
            {comment.describe}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 px-15 py-3">
          <div className="flex items-center justify-center gap-3">
            <img 
              src={like} 
              alt="like" 
              onClick={handleLike}
              className={`cursor-pointer hover:opacity-70 ${comment.currentUserLike ? "opacity-100 scale-110" : "opacity-50"}`}
            />
            <p className="text-textC">{comment.likeCount}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img 
              src={dislike} 
              alt="dislike" 
              onClick={handleDisLike}
              className={`cursor-pointer hover:opacity-70 ${comment.currentUserDisLike ? "opacity-100 scale-110" : "opacity-50"}`}
            />
            <p className="text-textC">{comment.disslikeCount}</p>
          </div>
        </div>

        <p className="text-textC px-15 text-left">
          {comment?.insertDate
            ? new Date(comment.insertDate).toLocaleDateString("fa-IR")
            : "تاریخ نامشخص"}
        </p>

        <div
          className="px-15 cursor-pointer flex justify-end text-textC"
          onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}
        >
          <img src={replyIcon} alt="پاسخ" />
        </div>

        {isReplyBoxOpen && (
          <div className="px-15 flex flex-col gap-3">
            <textarea
              className="border border-neutral-200 bg-neutral-300 rounded-lg p-2 w-full"
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="پاسخ خود را بنویسید..."
            />
            <div className="flex gap-2">
              <button
                className={`bg-primary-300 text-white px-4 py-2 rounded-lg ${isLoading ? "opacity-50" : ""}`}
                onClick={handleSendReply}
                disabled={isLoading || !replyText.trim()}
              >
                {isLoading ? <Loading/> : "ثبت پاسخ"}
              </button>
              <button
                className="bg-neutral-200 px-4 py-2 rounded-lg"
                onClick={() => setIsReplyBoxOpen(false)}
              >
                انصراف
              </button>
            </div>
          </div>
        )}
      </div>

      {!isCommentReplyLoading && replyData?.data && (
        <div className="flex flex-col w-9/10 m-auto gap-5 bg-neutral-50 rounded-2xl border-r-4 border-solid border-primary-300 mt-5">
          {replyData.data.map((reply) => (
            <div className="border-b border-solid border-neutral-500 w-9/10 m-auto p-3">
              <div key={reply.id} className="flex items-center gap-3">
                <img src={reply.pictureAddress || user} alt="user" />
                <div className="flex flex-col">
                  <h2 className="font-bold text-textC text-right">
                    {reply.author || "کاربر سایت"}
                  </h2>
                  <p className="text-xs text-neutral-400 text-right">
                    {reply.gmail || ""}
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-600">{reply.describe}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseComment;
