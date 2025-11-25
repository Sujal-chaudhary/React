import React from 'react'
import useCourseStore from '../app/courseStore'


const CourseList = () => {

  const courses = useCourseStore(state => state.courses)
const removeCourse = useCourseStore(state => state.removeCourse)
const toggleCourseStatus = useCourseStore(state => state.toggleCourseStatus)
 
  

  return (
    <>
    <ul>
          {courses.map((course, i) =>{
                return (
                    <React.Fragment key = {i}>
                     <li
                     className={'course-item'}
                     style={{
                        backgroundColor: course.completed? "#00FF44" : "green"
                     }}>
                           <span className='course-item-col-1'>
                            <input 
                            checked = {course.completed}
                            type="checkbox"
                            onChange={(e) => {
                                toggleCourseStatus(course.id)
                            }} />
                           </span>

                           <span>{course?.title}</span>

                           <button className='delete btn'
                           onClick={() => {
                            removeCourse(course.id)
                           }}
                           >Delete</button>
                           

                     </li>
                    </React.Fragment>
                )
           } )}
    </ul>
    
    </>
  )
}

export default CourseList