import React, { useEffect, useRef, useState } from "react";
import js from "../../../../assets/images/course-dtail/js.jpg";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import Comment from "../Comment/Comment";
import Button from "../../../atoms/Butoon/Button";
import comment from "../../../../assets/images/icons/course-detail/comment.svg";
import ApiClient from "../../../../core/api/interceptors";
import { useParams } from "react-router-dom";
import CourseComment from "../CourseComment/CourseComment";
import { getCourseComments } from "../../../../core/services/Course-detail/Comment/comment";
import { useQuery } from "@tanstack/react-query";
import { PostCourseComments } from "../../../../core/services/Course-detail/AddComment/AddComment";
import { useTranslation } from "react-i18next";
import { addFavorite } from "../../../../core/services/Course-detail/addFavorite/addFavorite";
import { removeFavorite } from "../../../../core/services/Course-detail/removeFavorite/removeFavorite";
import { deleteLike } from "../../../../core/services/Course-detail/removeLike/removeLike";


const Description = ({ course }) => {
  const { id } = useParams();
  const { t } = useTranslation("courseDetail");
  const [visibleCount, setVisibleCount] = useState(2);
  const CourseId = id;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  
  const [favoriteId, setFavoriteId] = useState(null);
  const [likeId, setLikeId] = useState(null);

  useEffect(() => {
    if (course) {
      setLikes(course.likeCount || 0);
      setDislikes(course.dissLikeCount || 0);
      setUserLiked(course.userIsLiked || false);
      setUserDisliked(course.userIsDissLike || false);
      setIsFavorite(course.userFavorite || false);
      setFavoriteId(course.userFavoriteId || null);
      setLikeId(course.userLikeId || course.courseLikeId || null);
    }
  }, [course?.id, id]);

  if (!course) return <div>در حال بارگذاری اطلاعات...</div>;

  const handleLike = async () => {
    const prevLikes = likes;
    const prevUserLiked = userLiked;

    if (userLiked) {
      if (!likeId) {
        console.error("آیدی لایک برای حذف موجود نیست! (بک‌اند آیدی جدید را نداده است)");
        return;
      }

      setLikes((prev) => prev - 1);
      setUserLiked(false);

      try {
        await deleteLike(likeId);
        setLikeId(null); 
      } catch (error) {
        setLikes(prevLikes);
        setUserLiked(prevUserLiked);
      }
    } else {
      if (userDisliked) {
        setDislikes((prev) => prev - 1);
        setUserDisliked(false);
      }

      setLikes((prev) => prev + 1);
      setUserLiked(true);

      try {
        const res = await ApiClient.post(`Course/AddCourseLike?CourseId=${id}`);
        const newId = res.data?.id || res.data?.courseLikeId || res.data || null;

        if (newId && typeof newId !== "object") {
          setLikeId(newId);
        } else {
          console.warn("هشدار: لایک ثبت شد اما بک‌اند آیدی جدید را برنگرداند! حذف مجدد کار نخواهد کرد.");
        }
      } catch (error) {
        setLikes(prevLikes);
        setUserLiked(prevUserLiked);
      }
    }
  };

  const handleDislike = async () => {
    if (userDisliked) return;

    const prevLikes = likes;
    const prevDislikes = dislikes;
    const prevUserLiked = userLiked;
    const prevUserDisliked = userDisliked;

    if (userLiked) {
      setLikes((prev) => prev - 1);
      setUserLiked(false);
    }

    setDislikes((prev) => prev + 1);
    setUserDisliked(true);

    try {
      await ApiClient.post(`Course/AddCourseDissLike?CourseId=${id}`);
    } catch (error) {
      setLikes(prevLikes);
      setDislikes(prevDislikes);
      setUserLiked(prevUserLiked);
      setUserDisliked(prevUserDisliked);
    }
  };

  const handleFavorite = async () => {
    const prevFav = isFavorite;

    try {
      if (isFavorite) {

        if (!favoriteId) {
          console.error("آیدی علاقه‌مندی برای حذف موجود نیست!");
          return;
        }

        setIsFavorite(false);
        await removeFavorite(favoriteId);
        setFavoriteId(null);
      } else {
        setIsFavorite(true);
        const res = await addFavorite(id);

        const newFavId = res?.data?.id || res?.data?.courseFavoriteId || res?.data?.userFavoriteId || res?.data || null;
        if (newFavId && typeof newFavId !== "object") {
          setFavoriteId(newFavId);
        } else {
          console.warn("هشدار: علاقه‌مندی ثبت شد اما بک‌اند آیدی جدید را برنگرداند!");
        }
      }
    } catch (error) {
      setIsFavorite(prevFav); 
    }
  };

  const { data: commentsData } = useQuery({
    queryKey: ["courseComments", id],
    queryFn: () => getCourseComments(id),
    enabled: !!id,
  });
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const commentTextRef = useRef(null);

  useEffect(() => {
    if (isCommentBoxOpen) {
      commentTextRef.current?.focus();
    }
  }, [isCommentBoxOpen]);

  const comments = commentsData?.data || [];

  return (
    <div className="w-full bg-rootBg flex flex-col gap-10 md:w-3/4 m-auto xl:w-2/3">
      <div className="w-full flex flex-col relative mb-10 ">
        <img
          src={course.imageAddress || js}
          alt={course.title}
          className="w-full rounded-xl "
        />
        <div className="w-60 px-2 mt-2 h-12 flex justify-between bg-rootBg gap-2 items-center flex-row-reverse absolute -bottom-1 -left-1 rounded-xl">
          <div className="w-19.25 flex justify-between items-center">
            <img
              src={dislike}
              alt=""
              onClick={handleDislike}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold text-textC">{dislikes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <img
              src={like}
              alt=""
              onClick={handleLike}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold text-textC">{likes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <button
              onClick={handleFavorite}
              className="cursor-pointer text-2xl"
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-2">
          {course.title}
        </h1>
        <p className="text-neutral-500 text-right px-2">
          {course.miniDescribe}
        </p>
      </div>
      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-3">
          {t("description.explanation")}
        </h1>
        <div className="text-[#7B7B7B] text-right rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background h-50">
          <p className="px-3">{course.describe}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-2">
            {t("description.Comments")}
          </h1>
          <Button
            iconSrc={comment}
            children={t("description.button")}
            onClick={() => setIsCommentBoxOpen(true)}
          />
        </div>

        {isCommentBoxOpen && (
          <div className="w-full p-4 bg-background rounded-xl shadow flex flex-col gap-3">
            <textarea
              ref={commentTextRef}
              className="w-full min-h-32 text-textC p-3 rounded-lg border border-gray-300 text-right outline-none"
              placeholder={t("description.add")}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 rounded-lg bg-gray-200"
                onClick={() => {
                  setIsCommentBoxOpen(false);
                  setCommentText("");
                }}
              >
                {t("description.out")}
              </button>

              <Button
                children={t("description.send")}
                onClick={async () => {
                  try {
                    const formData = new FormData();
                    formData.append("CourseId", id);
                    formData.append("Title", "idk");
                    formData.append("Describe", commentText);

                    await PostCourseComments(formData);
                    setIsCommentBoxOpen(false);
                    setCommentText("");
                  } catch (error) {
                    if (
                      error.code === "ERR_CANCELED" ||
                      error.message.includes("aborted")
                    ) {
                      return;
                    }
                    console.error("خطا در ثبت کامنت:", error);
                  }
                }}
              />
            </div>
          </div>
        )}
        {comments.length === 0 ? (
          <p className="text-center py-10 text-neutral-400">
            هنوز نظری ثبت نشده
          </p>
        ) : (
          comments
            .slice(0, visibleCount)
            .map((comment) => (
              <CourseComment
                key={comment.id}
                comment={comment}
                CourseId={CourseId}
              />
            ))
        )}
        {comments.length > 2 && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className=" w-1/2 m-auto md:w-1/5 flex items-center justify-center cursor-pointer 
    px-4 py-2 focus:outline-none rounded-xl text-nowrap dark:text-primary-500 text-primary-800 border border-solid dark:border-primary-500 border-primary-800 ltr"
          >
            {t("description.more")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Description;

