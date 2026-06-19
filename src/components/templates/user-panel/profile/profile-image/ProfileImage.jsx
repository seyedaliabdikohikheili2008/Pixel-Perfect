import React, { useRef } from "react";
import img from "../../../../../assets/images/contactUs/person.png";
import { IoCheckmark } from "react-icons/io5";
import { SlTrash } from "react-icons/sl";
import { LuImagePlus } from "react-icons/lu";
import { useAddProfileImage } from "../../../../../core/hooks/queries/user-panel/profile/useAddProfileImage";
import toast from "react-hot-toast";
import { useProfileInfo } from "../../../../../core/hooks/queries/user-panel/dashboard/useProfileInfo";
import { useDeleteProfileImage } from "../../../../../core/hooks/queries/user-panel/profile/useDeleteProfileImage";

const ProfileImage = () => {
  const inputRef = useRef(null);

  const { mutate: addImage, isPending } = useAddProfileImage();
  const { mutate: deleteImage, isPending: deletePending } =
    useDeleteProfileImage();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("formFile", file); // اسم کلید مهمه

    addImage(formData, {
      onSuccess: (res) => {
        toast.success("عکس با موفقیت آپلود شد");
        ProfileInfoRefetch();
      },
      onError: (err) => {
        console.log(err?.response?.data);
      },
    });
  };

  const handleDeleteImage = (id) => {
    const formData = new FormData();
    formData.append("DeleteEntityId", id);
    deleteImage(formData, {
      onSuccess: (res) => {
        toast.success("عکس با موفقیت پاک شد");
        ProfileInfoRefetch();
      },
      onError: (err) => {
        console.log(err?.response?.data);
      },
    });
  };

  const {
    data: ProfileInfo = undefined,
    isError: ProfileInfoErr,
    isLoading: ProfileInfoLoading,
    error: ProfileInfoError,
    refetch: ProfileInfoRefetch,
  } = useProfileInfo();

  return (
    <>
      <div className="w-full flex flex-wrap gap-4">
        {ProfileInfo?.data?.userImage?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-50 h-50 p-1 border-4 border-primary-500 rounded-2xl relative"
            >
              <img
                className="w-full h-full border-2 border-primary-500 rounded-2xl overflow-hidden object-center object-cover"
                src={item.puctureAddress || img}
                alt="use-image"
              />
              <div className="flex gap-2 bg-background w-fit h-fit p-1 rounded-full absolute bottom-2 left-2">
                <div
                  onClick={() => {
                    handleDeleteImage(item.id);
                  }}
                  className="p-1 cursor-pointer text-danger-600 bg-[#ED053F1A] rounded-full border border-[#ED053F4D]"
                >
                  <SlTrash size={20} />
                </div>
                <div className="p-1 cursor-pointer rounded-full bg-primary-500">
                  <IoCheckmark color="white" size={20} />
                </div>
              </div>
            </div>
          );
        })}

        <div
          onClick={() => {
            inputRef.current.click();
          }}
          className="w-50 h-50 cursor-pointer flex flex-col gap-3 items-center justify-center text-textC text-base font-bold border-4 border-dashed border-primary-500 rounded-2xl"
        >
          <LuImagePlus className="text-primary-500" size={32} />
          اضافه کردن عکس
        </div>

        <input
          onChange={handleFileChange}
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </div>
    </>
  );
};

export default ProfileImage;
