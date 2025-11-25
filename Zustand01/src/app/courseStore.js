{/* Zustand :-
    
 > Make a single place (a store) where your app’s important data lives,
and let any component read or update it directly.  

> set() is how you update the store’s state.

> courses: []

This is your state.

It’s just a plain JavaScript array, initially empty.

So here, you’re telling Zustand:

My store has one piece of data — an array called courses.

> addCourse: (course) => { ... }

This is your action function — an operation that changes the state.

It takes some input (course) and modifies the store.

> set(state) = this state gives us the access of the all current states i.e the varibales that we have created.

*/}



import {create} from 'zustand'; // supports named export {...} & not export default.

import {devtools, persist} from 'zustand/middleware' /*helps to check info with the browser*/
{/* using persists you can store the info in the local storage of windows */}

{/* Creating a store */}

const courseStore = (set) => ({
    courses: [],

    addCourse: (course) =>
    {
        set((state) => ({
            courses: [course, ...state.courses]
        }))
    },

    removeCourse:(courseId) => {
              set((state) => ({
                courses: state.courses.filter((c) => c.id !== courseId)
              }))
    },

    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((c) => c.id === courseId? {...course, completed: !course.completed} : course)
        }))
    }
})


{/* making our store accessable so that anyone can update or take date from it. */}

const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses", // key that i have to give
        })
    )
)


export default useCourseStore;