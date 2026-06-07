import React from 'react'
import Description from './Description/Description'
import CourseSideBar from './CourseSideBar/CourseSideBar'
import TitleDesc from '../../molecules/title-desc/TitleDesc'

const CourseDetail = () => {
  return (
    <>
    <div className='w-11/12 flex-col flex gap-10 xl:flex-row md:flex-col justify-between m-auto py-10'>
        <Description/>
        <CourseSideBar/>
    </div>
    <div>
      <TitleDesc
          width="w-75"
          title={"دوره های مشابه"}
        />
    </div>
    </>
  )
}

export default CourseDetail
