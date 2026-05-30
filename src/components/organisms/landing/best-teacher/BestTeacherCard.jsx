import React from 'react'
import teacherImg from "../../../../assets/images/landing/best-teacher/Group 3.png"
const BestTeacherCard = () => {
  return (
    <>
        <div className='w-74 flex flex-col gap-2'>
            <img className='w-full' src={teacherImg} alt="" />
            <div className='w-full text-right text-textC'>
                <h2 className='text-3xl font-bold'>دکتر بحرالعلوم</h2>
                <p className='text-2xl font-normal'>طراحی وب سایت</p>
                <p className='text-2xl'>تعداد دوره ها : 3 دوره</p>
            </div>
        </div>
    </>
  )
}

export default BestTeacherCard