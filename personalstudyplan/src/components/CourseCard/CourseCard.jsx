import { useState } from 'react'
import Swal from 'sweetalert2'
import courseService from '../../services/courses'
import './CourseCard.css'
import CourseCardForm from './CourseCardForm'
import CourseCardIcons from './CourseCardIcons'

const CourseCard = ({ name, id, credits, allCourses, setCourses }) => {
    const [isCompleting, setIsCompleting] = useState(false)
    const [grade, setGrade] = useState('')
    const [hover, setHover] = useState(false)

    const handleComplete = (e) => {
        e.preventDefault()
        
        let finalGrade = null

        if(isNaN(grade)) {
            finalGrade = "pass"
        } else {
            finalGrade = grade
        }

        const course = allCourses.find(c => c.id === id)
        const changedCourse = {...course, grade: finalGrade, status: 'completed'}

        courseService
            .update(id, changedCourse).then(returnedCourse => {
                setCourses(allCourses.map(course => course.id === id ? returnedCourse : course))
            })
            .catch(error => {
                alert(
                    `The course ${course.name} was already deleted from server`
                )
                setCourses(allCourses.filter(c => c.id !== id))
            })

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Course completed!',
                showConfirmButton: false,
                timer: 3000
            })
    }

    const handleDelete = () => {
        courseService
            .deleteCourse(id).then(returnedCourse => {
                setCourses(allCourses.filter(course => course.id !== id))
            })
            .catch(error => {
                alert(
                    `The course ${course.name} was already deleted from server`
                )
                setCourses(allCourses.filter(c => c.id !== id))
            })

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Course has been removed',
                showConfirmButton: false,
                timer: 3000
            })
    }

    return(
        <>
            <article className='course_card' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <p className='course_text'>{name} <span style={{color: '#646cff'}}>•</span> {credits}</p>
                {isCompleting ? <CourseCardForm handleComplete={handleComplete} setGrade={setGrade}/> : <CourseCardIcons setIsCompleting={setIsCompleting} hover={hover} handleDelete={handleDelete} />}
            </article> 
        </>
    )
}

export default CourseCard