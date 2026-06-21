import React, { useEffect, useRef, useState } from "react";
import like from "../../../../assets/images/icons/course-detail/like.png";
import dislike from "../../../../assets/images/icons/course-detail/dislike.png";
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
import Loading from "../../../atoms/loading/Loading";

const NewsDescription = ({ news }) => {
  const { t } = useTranslation("newsDetail");
  const { NewsId } = useParams();
  const { newsId } = useParams();
  const idToSend = newsId;
  const userId = Number(localStorage.getItem("userId"));
  const [comments, setComments] = useState([]);
  if (!news) return <div><Loading/></div>;

  const [likes, setLikes] = useState(news.likeCount || 0);
  const [dislikes, setDislikes] = useState(news.disLikeCount || 0);
  const [userLiked, setUserLiked] = useState(news.userIsLiked || false);
  const [userDisliked, setUserDisliked] = useState(news.userIsDisLike || false);
  const [isFavorite, setIsFavorite] = useState(news.userIsFavorite || false);
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false);
  const [commentText, setCommentText] = useState("");
  const commentTextRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLike = async () => {
    if (userLiked) return;
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
      const response = await ApiClient.post(`News/NewsDissLike/${idToSend}`, {
        NewsId: parseInt(idToSend),
      });
      console.log("دیسلایک با موفقیت ثبت شد:", response);
    } catch (error) {
      console.error("خطا در ثبت دیسلایک:", error);
      setDislikes((prev) => prev - 1);
      setUserDisliked(false);
    }
  };


  const handleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(idToSend);
      } else {
        await addFavorite(idToSend);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("خطا در عملیات علاقمندی:", error);
    }
  };

  useEffect(() => {
    if (news) {
      setLikes(news.currentLikeCount || 0);
      setDislikes(news.currentDissLikeCount || 0);
      setUserLiked(news.currentUserIsLike || false);
      setUserDisliked(news.currentUserIsDissLike || false);
      setIsFavorite(news.userIsFavorite || false);
    }
  }, [news]);

  useEffect(() => {
    if (isCommentBoxOpen) {
      commentTextRef.current?.focus();
    }
  }, [isCommentBoxOpen]);

  const { data: commentData, isLoading: isCommentLoading } = useQuery({
    queryKey: ["news-comment", newsId],
    queryFn: () => getComments(newsId),
  });

  return (
    <div className="w-full bg-rootBg flex flex-col gap-10 md:w-3/4 m-auto xl:w-2/3">
      <div className="w-full flex flex-col relative mb-10">
        <img
          src={news.currentImageAddress}
          alt={news.title}
          className="w-full rounded-xl"
        />
        <div className="w-60 px-2 mt-2 h-12 flex justify-between bg-rootBg gap-2 items-center flex-row-reverse absolute -bottom-1 -left-1 rounded-xl">
          <div className="w-19.25 flex justify-between items-center">
            <img src={like} alt="" onClick={handleLike} className="cursor-pointer" />
            <p className="text-xl font-bold text-textC">{likes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <img src={dislike} alt="" onClick={handleDislike} className="cursor-pointer" />
            <p className="text-xl font-bold text-textC">{dislikes}</p>
          </div>
          <div className="w-19.25 flex justify-between items-center">
            <button onClick={handleFavorite} className="cursor-pointer text-2xl">
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
                    const commentData = {
                      newsId: idToSend,
                      userIpAddress: "0.0.0.0",
                      title: "s.th",
                      describe: commentText,
                      userId: userId,
                    };
                    await AddComment(commentData);
                    setComments((prev) => [...prev, commentData]);
                    setIsCommentBoxOpen(false);
                    setCommentText("");
                  } catch (error) {
                    console.error("خطا در ثبت کامنت:", error);
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
              <Comment key={item.newsId} item={item} />
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
                {t("description.noComments") }
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDescription;
