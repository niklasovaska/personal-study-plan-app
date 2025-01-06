import { useEffect, useState } from 'react'
import courseService from './services/courses'
// import data from './db.json'
import Header from './components/Header/Header'
import CompletedCourses from './components/CompletedCourses/CompletedCourses'
import UpcomingCourses from './components/UpcomingCourses/UpcomingCourses'
import './App.css'

const App = () => {

  const [courses, setCourses] = useState([])
  const [showCompleted, setShowCompleted] = useState(true)
  const [showUpcoming, setShowUpcoming] = useState(false)
 
  useEffect(() => {
    courseService
      .getAll()
      .then(res => {
        setCourses(res.data)
  })
  }, [courses])

  const upcomingCourses = courses.filter((course) => course.status !== "completed")

  const handleShowCompleted = () => {
    setShowCompleted(true)
    setShowUpcoming(false)
  }

  const handleShowUpcoming = () => {
    setShowCompleted(false)
    setShowUpcoming(true)
  }

  return(
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header courses={courses} setCourses={setCourses} showCompleted={showCompleted} handleShowCompleted={handleShowCompleted} showUpcoming={showUpcoming} handleShowUpcoming={handleShowUpcoming}/>
      {showCompleted && !showUpcoming && <CompletedCourses courses={courses} />}
      {!showCompleted && showUpcoming && <UpcomingCourses upcomingCourses={upcomingCourses} allCourses={courses} setCourses={setCourses}/>}
    </div>
  )
}

export default App
