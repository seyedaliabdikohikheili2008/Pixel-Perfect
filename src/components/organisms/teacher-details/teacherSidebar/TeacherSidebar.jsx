import React from 'react'
import BG from "../../../../assets/images/teacher-details/BG.png"
const TeacherSidebar = () => {
  return (
    <div className=" w-full xl:w-3/10 md:w-3/4 mx-auto flex flex-col items-center gap-8">
<div className="bg-background w-full p-8 rounded-2xl shadow-2xl">
<div className='flex flex-col items-center gap-2'>
    <img src={BG} alt="" />
    <p className='text-textC font-bold text-[16px] text-center'>دکتر محمد حسین بحرالعلومی</p>
</div>
<div className='font-bold text-[16px] flex items-center justify-between border-b border-neutral-200 py-2.5'>
    <p className=' text-textC'>تعداد دوره ها</p>
    <p className='text-neutral-300'>22</p>
</div>
</div>
    </div>
  )
}

export default TeacherSidebar