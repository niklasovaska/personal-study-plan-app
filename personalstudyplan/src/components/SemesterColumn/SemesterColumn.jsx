import CourseCard from '../CourseCard/CourseCard'
import './SemesterColumn.css'

const SemesterColumn = ({ title, upcomingCourses, allCourses, setCourses }) => {
    
    const sumCredits = upcomingCourses.reduce((sum, course) => {
        return sum += course.credits
    }, 0)

    return(
        <section className='semester_column'>
            <h2 className='semester_column_heading'>{title}</h2>
            <h2 style={{color: '#535bf2'}}>{sumCredits}</h2>
            {upcomingCourses.map(course => <CourseCard key={course.code} name={course.name} id={course.id} credits={course.credits} allCourses={allCourses} setCourses={setCourses}/>)}
        </section>
    )
}

export default SemesterColumn