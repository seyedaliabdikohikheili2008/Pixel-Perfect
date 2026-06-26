import React from 'react'
import user from "../../../assets/images/course-dtail/user.png";
const Profile = ({courseData,data}) => {
   const name = courseData?.teacherName || data?.addUserFullName || "";
  return (
    <div className="bg-background w-full p-5 rounded-2xl shadow-2xl">
      <div className="flex items-center w-9/10 m-auto gap-4">
        <img src={user} alt="" />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl text-textC text-right">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Profile