import React, { useState } from "react";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import Comment from "../../../templates/course-detail/Comment/Comment";
import Button from "../../../atoms/Butoon/Button";
import comment from "../../../../assets/images/icons/course-detail/comment.svg";
import ApiClient from "../../../../core/api/interceptors";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../../core/services/news-detail/Comments/Comments";
const NewsDescription = ({ news }) => {
  const {newsId} = useParams();
  if (!news) return <div>در حال بارگذاری اطلاعات...</div>;
  const [likes, setLikes] = useState(news.likeCount || 0);
  const [dislikes, setDislikes] = useState(news.disLikeCount || 0);

  const [userLiked, setUserLiked] = useState(news.userIsLiked || false);
  const [userDisliked, setUserDisliked] = useState(news.userIsDisLike || false);

  const handleLike = async () => {
    if (userLiked) return;
    if (userDisliked) {
      setDislikes((prev) => prev - 1);
      setUserDisliked(false);
    }
    setLikes((prev) => prev + 1);
    setUserLiked(true);
    try {
      const response = await ApiClient.post(`Course/AddCourseLike`, {
        CourseId: news.courseId,
      });
      console.log("لایک با موفقیت ثبت شد:", response);
    } catch (error) {
      console.error("خطا در ثبت لایک:", error);
    }
  };
  const handleDislike = async () => {
    if (userDisliked) return;

    if (userLiked) {
      setLikes((prev) => prev - 1);
      setUserLiked(false);
    }

    setDislikes((prev) => prev + 1);
    setUserDisliked(true);

    try {
      const response = await ApiClient.post(`Course/AddCourseDissLike`, {
        CourseId: news.courseId,
      });
      console.log("دیسلایک با موفقیت ثبت شد:", response);
    } catch (error) {
      console.error("خطا در ثبت دیسلایک:", error);
      setDislikes((prev) => prev - 1);
      setUserDisliked(false);
    }
  };
  const [visibleCount, setVisibleCount] = useState(2);

  const { data: commentData, isLoading: isCommentLoading } = useQuery({
    queryKey: ["news-comment", newsId],
    queryFn: () => getComments(newsId),
  });
 
  return (
    <div className="w-full bg-rootBg flex flex-col gap-10 md:w-3/4 m-auto xl:w-2/3">
      <div className="w-full flex flex-col relative mb-10 ">
        <img
          src={news.currentImageAddress}
          alt={news.title}
          className="w-full rounded-xl "
        />
        <div className="w-42 px-2 mt-2 h-12 flex justify-between bg-rootBg gap-2 items-center flex-row-reverse absolute -bottom-1 -left-1 rounded-xl">
          <div className="w-19.25 flex justify-between items-center">
            <img src={dislike} alt="" onClick={handleLike} />
            <p className="text-xl font-bold text-textC">{likes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <img src={like} alt="" onClick={handleDislike} />
            <p className="text-xl font-bold text-textC">{dislikes}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-2">
          {news.title}
        </h1>
        <p className="text-neutral-500 text-right px-2">{news.miniDescribe}</p>
      </div>
      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-3">
          توضیحات
        </h1>
        <div className="text-[#7B7B7B] text-right rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background h-50">
          <p className="px-3">{news.describe}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-2">
            نظرات
          </h1>
          <Button iconSrc={comment} children={"ارسال دیدگاه جدید"} />
        </div>
       {isCommentLoading ? (
  <p>در حال بارگذاری...</p>
) : (
  <div className="flex flex-col gap-4">
        { commentData?.data?.slice(0, visibleCount).map((item) => (
            <Comment key={item.newsId} item={item} />
          ))
        }
    {commentData?.data?.length > visibleCount && (
       <button
          className=" w-1/2 m-auto md:w-1/5 flex items-center justify-center cursor-pointer 
        px-4 py-2 focus:outline-none rounded-xl text-nowrap dark:text-primary-500 text-primary-800 border border-solid dark:border-primary-500 border-primary-800 ltr"
        onClick={() => setVisibleCount(prev => prev + 10)}
        >
          مشاهده بیشتر
        </button>
    )}
  </div>
)}

       
      </div>
    </div>
  );
};

export default NewsDescription;
