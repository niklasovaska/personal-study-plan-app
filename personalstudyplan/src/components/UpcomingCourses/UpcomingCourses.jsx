import SemesterColumn from '../SemesterColumn/SemesterColumn'
import './UpcomingCourses.css'

const UpcomingCourses = ( { upcomingCourses, allCourses, setCourses } ) => {
   
    return(
        <div className="upcoming">
            <main className="upcoming_main">
                <SemesterColumn
                    className="semester_column"
                    title="To be scheduled"
                    setCourses={setCourses}
                    allCourses={allCourses}
                    upcomingCourses={upcomingCourses.filter((course) => course.status === "upcoming")}
                />
                <SemesterColumn
                    className="semester_column" 
                    title="Spring 2025"
                    setCourses={setCourses}
                    allCourses={allCourses}
                    upcomingCourses={upcomingCourses.filter((course) => course.status === "S25")}
                />
                <SemesterColumn
                    className="semester_column"
                    title="Autumn 2025"
                    setCourses={setCourses}
                    allCourses={allCourses}
                    upcomingCourses={upcomingCourses.filter((course) => course.status === "A25")}
                />
                <SemesterColumn
                    className="semester_column"
                    title="Spring 2026"
                    setCourses={setCourses}
                    allCourses={allCourses}
                    upcomingCourses={upcomingCourses.filter((course) => course.status === "S26")}
                />
            </main>
        </div>
    )
}

export default UpcomingCourses