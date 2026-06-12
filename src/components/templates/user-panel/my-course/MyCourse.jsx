import React from 'react'
import TeacherListPagination from '../../teacher-list/teacher-list-content/TeacherListPagination'

const MyCourse = () => {
  return (
    <>
        <div className='bg-background w-full h-full flex flex-col items-start'>
            <h2 className='text-3xl text-textC font-bold'>دوره های من</h2>
            <div></div>
            <TeacherListPagination />
        </div>
    </>
  )
}

export default MyCourse