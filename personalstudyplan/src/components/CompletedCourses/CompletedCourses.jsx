import './CompletedCourses.css'


const CompletedCourses = ({ courses }) => {
    
    const completedCourses = courses.filter((course) => course.status == "completed")

    return(
        <div className='courseTable'>
            <table>
                <thead>
                    <tr>
                        <th style={{textAlign: "left"}}>Name</th>
                        <th>Grade</th>
                        <th>Credits</th> 
                    </tr>
                </thead>
                <tbody>
                        {completedCourses.map(course => <tr key={course.code}><td>{course.name}</td><td>{course.grade}</td><td>{course.credits}</td></tr>)}
                </tbody>
            </table>
            
        </div>
    )
}

export default CompletedCourses