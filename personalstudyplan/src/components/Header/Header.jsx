import AddCourseModal from "../AddCourseModal/AddCourseModal"
import Progressbar from "../Progressbar/Progressbar"

const Header = ({ courses, setCourses, showCompleted, handleShowCompleted, showUpcoming, handleShowUpcoming }) => {

    const allCredits = courses.reduce((sum, course) => {
        return sum += course.credits
    }, 0)

    const completedCourses = courses.filter((course) => course.grade !== null)

    const completedCredits = completedCourses.reduce((sum, course) => {
        return sum += course.credits
    }, 0)

    return(
        <div style={{display: 'flex', flexDirection: 'column', width: '800px', justifyContent: 'center', alignItems: 'center'}}>
            <h1>Personal Study Plan</h1>
            <h1>{completedCredits} / {allCredits} credits</h1>
            <Progressbar progress={completedCredits} total={allCredits}/>
            <div>
                <button onClick={handleShowCompleted} style={{backgroundColor: showCompleted ? '#535bf2' : '#1a1a1a'}}>Show completed courses</button>
                <button onClick={handleShowUpcoming} style={{backgroundColor: showUpcoming ? '#535bf2' : '#1a1a1a'}}>Show upcoming</button>
                <AddCourseModal courses={courses} setCourses={setCourses}/>
            </div>
            
        </div>
    )
}

export default Header