import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import user from "../../../../assets/images/course-dtail/user.png";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import replyIcon from "../../../../assets/images/icons/course-detail/reply.png";
import { getReplyComments } from "../../../../core/services/news-detail/Comments/ReplyComment/ReplyComment";
import { AddReplyComment } from "../../../../core/services/news-detail/Comments/AddReplyComment/AddReplyComment";
import { postNewsCommentLike } from "../../../../core/services/news-detail/addCommentLike/addCommentLike";
import { deleteNewsCommentLike } from "../../../../core/services/news-detail/removeCommentLike/removeCommentLike";
import Loading from "../../../atoms/loading/Loading";

const Comment = ({ item }) => {
  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [likeCount, setLikeCount] = useState(item.likeCount || 0);
  const [isLiked, setIsLiked] = useState(item.currentUserLike || false);


  useEffect(() => {
    setLikeCount(item.likeCount || 0);
    setIsLiked(item.currentUserLike || false);
  }, [item.likeCount, item.currentUserLike]);

  const {
    data: replyData,
    isLoading: isCommentReplyLoading,
    refetch,
  } = useQuery({
    queryKey: ["news-comment-reply", item.id],
    queryFn: () => getReplyComments(item.id),
    enabled: !!item.id,
  });

  const handleSendReply = async () => {
    setIsLoading(true);
    try {
      const replyData = {
        newsId: item.newsId,
        userIpAddress: "0.0.0.0",
        title: "پاسخ به نظر",
        describe: replyText,
        userId: Number(localStorage.getItem("userId")) || 0,
        parentId: item.id,
      };

      await AddReplyComment(replyData);
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
    const prevLikeCount = likeCount;
    const prevIsLiked = isLiked;

    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);

      try {
        await deleteNewsCommentLike(item.id);
        refetch(); 
      } catch (error) {
        console.error("خطا در حذف لایک کامنت:", error);
        setIsLiked(prevIsLiked);
        setLikeCount(prevLikeCount);
      }
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);

      try {
        await postNewsCommentLike(item.id);
        refetch(); 
      } catch (error) {
        console.error("خطا در ثبت لایک کامنت:", error);
        setIsLiked(prevIsLiked);
        setLikeCount(prevLikeCount);
      }
    }
  };

  return (
    <div className="w-full rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background py-5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-9/10 m-auto gap-3 p-5 border-b border-solid border-neutral-100">
          <img src={item.currentPictureAddress || user} alt="" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl text-right text-textC">
              {item.userFullName}
            </h1>
            <p className="font-bold text-md text-right text-neutral-300">
              {item.user?.gmail}
            </p>
          </div>
        </div>

        <div className="px-5 text-right pb-5">
          <p className="font-normal text-sm text-neutral-500 px-5">
            {item.describe}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 px-15 py-3">
          <div className="flex items-center justify-center gap-3">
            <img
              src={like}
              alt="like"
              onClick={handleLike}
              className={`cursor-pointer ${isLiked ? 'opacity-50' : ''}`} // یک افکت کوچیک وقتی لایک شده
            />
            <p className="text-textC">{likeCount}</p>
          </div>
        </div>

        <p className="text-textC px-15 text-left">
          {item?.inserDate
            ? new Date(item.inserDate).toLocaleDateString("fa-IR")
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
                disabled={isLoading}
              >
                {isLoading ? <Loading /> : "ثبت پاسخ"}
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

      {isCommentReplyLoading && (
        <div className="w-full flex justify-center py-3">
          <Loading />
        </div>
      )}

      {!isCommentReplyLoading && replyData?.data && (
        <div className="flex flex-col w-9/10 m-auto gap-5 bg-neutral-50 rounded-2xl border-r-4 border-solid border-primary-300 mt-5">
          {replyData.data.map((reply) => (
            <div key={reply.id} className="border-b border-solid border-neutral-500 w-9/10 m-auto p-3">
              <div className="flex items-center gap-3">
                <img src={reply.userPictureAddress || user} alt="user" />
                <div className="flex flex-col">
                  <h2 className="font-bold text-textC text-right">
                    {reply.userFullName || "کاربر سایت"}
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

export default Comment;
