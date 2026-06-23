import React, { useEffect, useRef, useState } from "react";
import like from "../../../../assets/images/icons/course-detail/like.png";
import darklike from "../../../../assets/images/icons/course-detail/darklike.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
import darkdislike from "../../../../assets/images/icons/course-detail/darkdislike.png";
import Comment from "../../../templates/course-detail/Comment/Comment";
import Button from "../../../atoms/Butoon/Button";
import comment from "../../../../assets/images/icons/course-detail/comment.svg";
import ApiClient from "../../../../core/api/interceptors";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../../../core/services/news-detail/Comments/Comments";
import { AddComment } from "../../../../core/services/news-detail/Comments/AddComment/AddComment";
import { useTranslation } from "react-i18next";
import { addFavorite } from "../../../../core/services/news-detail/addFavorite/addFavorite";
import { removeFavorite } from "../../../../core/services/news-detail/removeFavorite/removeFavorite";
import { deleteLike } from "../../../../core/services/news-detail/removeLike/removeLike";
import Loading from "../../../atoms/loading/Loading";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import FallbackImage from "../../../atoms/image/FallbackImage";

const NewsDescription = ({ news }) => {
  const { t } = useTranslation("newsDetail");
  const { newsId } = useParams();
  const idToSend = newsId;
  const userId = Number(localStorage.getItem("userId"));
  const mode = useSelector((state) => state.DarkFlag.value);

  const [comments, setComments] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const commentTextRef = useRef(null);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userDisliked, setUserDisliked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [likeId, setLikeId] = useState(null);
  const [favoriteId, setFavoriteId] = useState(null);
  useEffect(() => {
    if (news) {
      setLikes(news.currentLikeCount || 0);
      setDislikes(news.currentDissLikeCount || 0);
      setUserLiked(news.currentUserIsLike || false);
      setUserDisliked(news.currentUserIsDissLike || false);
      setIsFavorite(news.isCurrentUserFavorite || false);

      setFavoriteId(news.userFavoriteId || null);
      setLikeId(news.likeId || news.userLikeId || null);
    }
  }, [news, newsId]);

  useEffect(() => {
    if (isCommentBoxOpen) {
      commentTextRef.current?.focus();
    }
  }, [isCommentBoxOpen]);

  const { data: commentData, isLoading: isCommentLoading } = useQuery({
    queryKey: ["news-comment", newsId],
    queryFn: () => getComments(newsId),
  });

  if (!news)
    return (
      <div>
        <Loading />
      </div>
    );

  const handleLike = async () => {
    const prevLikes = likes;
    const prevUserLiked = userLiked;

    if (userLiked) {
      if (!likeId) {
        console.warn("آیدی لایک موجود نیست!");
        return;
      }

      setLikes((prev) => prev - 1);
      setUserLiked(false);

      try {
        await deleteLike(likeId);
        setLikeId(null);
        toast.success("لایک حذف شد ✅");
      } catch (error) {
        console.error("خطا در حذف لایک:", error);
        setLikes(prevLikes);
        setUserLiked(prevUserLiked);
        toast.error("خطا در حذف لایک ❌");
      }
    } else {
      if (userDisliked) {
        setDislikes((prev) => prev - 1);
        setUserDisliked(false);
      }

      setLikes((prev) => prev + 1);
      setUserLiked(true);

      try {
        const response = await ApiClient.post(`News/NewsLike/${idToSend}`, {
          NewsId: parseInt(idToSend),
        });

        const newLikeId =
          response.data?.id || response.data?.likeId || response.data || null;
        if (newLikeId && typeof newLikeId !== "object") {
          setLikeId(newLikeId);
        }
        toast.success("لایک شد 👍");
      } catch (error) {
        console.error("خطا در ثبت لایک:", error);
        setLikes(prevLikes);
        setUserLiked(prevUserLiked);
        toast.error("خطا در لایک ❌");
      }
    }
  };

  const handleDislike = async () => {
    if (userDisliked) return;
    const prevLikes = likes;
    const prevUserLiked = userLiked;

    if (userLiked) {
      setLikes((prev) => prev - 1);
      setUserLiked(false);
    }

    setDislikes((prev) => prev + 1);
    setUserDisliked(true);

    try {
      await ApiClient.post(`News/NewsDissLike/${idToSend}`, {
        NewsId: parseInt(idToSend),
      });
      toast.success("دیسلایک شد 👎");
    } catch (error) {
      console.error("خطا در ثبت دیسلایک:", error);
      setDislikes((prev) => prev - 1);
      setUserDisliked(false);

      if (userLiked) {
        setLikes(prevLikes);
        setUserLiked(prevUserLiked);
      }
      toast.error("خطا در دیسلایک ❌");
    }
  };

  const handleFavorite = async () => {
    const prevFav = isFavorite;

    try {
      if (isFavorite) {
        if (!favoriteId) return;

        setIsFavorite(false);
        await removeFavorite(favoriteId);
        setFavoriteId(null);
        toast.success("از علاقه‌مندی‌ها حذف شد 💔");
      } else {
        setIsFavorite(true);
        const res = await addFavorite(idToSend);
        const newFavId =
          res?.data?.id || res?.data?.favoriteId || res?.data || null;
        if (newFavId && typeof newFavId !== "object") {
          setFavoriteId(newFavId);
        }
        toast.success("به علاقه‌مندی‌ها اضافه شد ❤️");
      }
    } catch (error) {
      console.error("خطا در عملیات علاقمندی:", error);
      setIsFavorite(prevFav);
      toast.error("خطا در عملیات علاقه‌مندی ❌");
    }
  };

  return (
    <div className="w-full bg-rootBg flex flex-col gap-10 md:w-3/4 m-auto xl:w-2/3">
      <div className="w-full flex flex-col relative mb-10">
        <FallbackImage
          src={news?.currentImageAddress}
          alt={news?.title}
          className="w-full rounded-xl"
        />
        <div className="w-60 px-2 mt-2 h-12 flex justify-between bg-rootBg gap-2 items-center flex-row-reverse absolute -bottom-1 -left-1 rounded-xl">
          <div className="w-19.25 flex justify-between items-center">
            <img
              src={mode == "light" ? dislike : darkdislike}
              alt=""
              onClick={handleDislike}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold text-textC">{dislikes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <img
              src={mode == "light" ? like : darklike}
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
          {news.title}
        </h1>
        <p className="text-neutral-500 text-right px-2">{news.miniDescribe}</p>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl font-bold text-textC text-right px-3">
          {t("description.explanation")}
        </h1>
        <div className="text-[#7B7B7B] text-right rounded-2xl shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] bg-background h-50">
          <p className="px-3">{news.describe}</p>
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
                    const commentDataLocal = {
                      newsId: idToSend,
                      userIpAddress: "0.0.0.0",
                      title: "s.th",
                      describe: commentText,
                      userId: userId,
                    };
                    await AddComment(commentDataLocal);
                    setComments((prev) => [...prev, commentDataLocal]);
                    setIsCommentBoxOpen(false);
                    setCommentText("");
                    toast.success("کامنت با موفقیت ثبت شد ✅");
                  } catch (error) {
                    console.error("خطا در ثبت کامنت:", error);
                    toast.error("خطا در ثبت کامنت ❌");
                  }
                }}
              />
            </div>
          </div>
        )}

        {isCommentLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-4">
            {commentData?.data?.slice(0, visibleCount).map((item) => (
              <Comment key={item.id || item.newsId} item={item} />
            ))}
            {commentData?.data?.length > visibleCount && (
              <button
                className="w-1/2 m-auto md:w-1/5 flex items-center justify-center cursor-pointer px-4 py-2 focus:outline-none rounded-xl text-nowrap dark:text-primary-500 text-primary-800 border border-solid dark:border-primary-500 border-primary-800 ltr"
                onClick={() => setVisibleCount((prev) => prev + 10)}
              >
                {t("description.more")}
              </button>
            )}
            {commentData?.data?.length === 0 && (
              <p className="text-center text-textC py-4">
                {t("description.noComments")}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDescription;
