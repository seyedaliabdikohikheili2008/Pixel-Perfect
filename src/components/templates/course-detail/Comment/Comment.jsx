import React from "react";
import { useQuery } from "@tanstack/react-query"; // اضافه شد
import user from "../../../../assets/images/course-dtail/user.png";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import { getReplyComments } from "../../../../core/services/news-detail/Comments/ReplyComment/ReplyComment";

const Comment = ({ item }) => {
  const { data: replyData, isLoading: isCommentReplyLoading } = useQuery({
    queryKey: ["news-comment-reply", item.id],
    queryFn: () => getReplyComments(item.id),
    enabled: !!item.id, 
  });

  return (
    <div className="w-full rounded-xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background py-5">
      <div className="flex flex-col gap-5">
        <div className="flex items-center w-9/10 m-auto gap-3 p-5 border-b border-solid border-neutral-100">
          <img src={item.currentPictureAddress || user} alt="" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl text-right text-textC">{item.userFullName}</h1>
            <p className="font-bold text-md text-right text-neutral-300">{item.user?.gmail}</p>
          </div>
        </div>
        <div className="px-5 text-right pb-5">
          <p className="font-normal text-sm text-neutral-500 px-5">{item.describe}</p>
        </div>
        <div className="flex items-center justify-end gap-3 px-15 py-3">
          <div className="flex items-center justify-center gap-3">
            <img src={like} alt="" />
            <p className="text-textC">{item.likeCount}</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <img src={dislike} alt="" />
            <p className="text-textC">{item.dissLikeCount}</p>
          </div>
        </div>
      </div>

      {!isCommentReplyLoading && replyData?.data && replyData.data.length > 0 && (
        <div className="flex flex-col w-9/10 m-auto gap-5 bg-neutral-50 rounded-2xl border-r-4 border-solid border-primary-300">
          {replyData.data.map((reply) => (
            <div key={reply.id}>
              <div className="flex items-center w-9/10 m-auto gap-2 p-5 border-b border-solid border-neutral-100">
                <img src={user} alt="" />
                <div className="flex flex-col items-center gap-2">
                  <h1 className="font-bold text-xl text-textC">{reply.userFullName}</h1>
                </div>
              </div>
              <div className="px-5 text-right pb-5">
                <p className="font-normal text-sm text-neutral-500 px-5">{reply.describe}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;