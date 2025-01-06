import {Button, Dialog, DialogTrigger, Input, Label, Modal, NumberField, TextField} from 'react-aria-components'
import './AddCourseModal.css'
import { useState } from 'react'
import courseService from '../../services/courses'
import Swal from 'sweetalert2'

const AddCourseModal = ({ courses, setCourses }) => {

    const [form, setForm] = useState({
        name: "",
        code: "",
        credits: "",
        module: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = (e) => {
        e.preventDefault()

        const newCourse = {
            ...form,
            credits: parseInt(form.credits),
            grade: null,
            status: 'upcoming'
        }

        if(!newCourse.name || !newCourse.code || !newCourse.credits || !newCourse.module) {
            return Swal.fire({
                icon: 'error',
                title: 'Error adding a course!',
                text: 'All fields are required',
                showConfirmButton: true,
                confirmButtonColor: '#535bf2'
            })
        }

        courseService
            .create(newCourse)
            .then(res => {
                setCourses(courses.concat(res.data))
            })
        
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'New course added',
            showConfirmButton: false,
            timer: 3000
        })
        
        setForm({ name: "", code: "", credits: "", module: ""})
    }

    return(
        <DialogTrigger>
            <Button>Add new course</Button>
            <Modal>
                <Dialog>
                    <form onSubmit={handleAdd}>
                        <h2>Add a new course</h2>
                        <TextField autoFocus>
                            <Label htmlFor='name'>Name</Label>
                            {/* <Input name='name' onChange={handleChange} /> */}
                            <input id='name' type='text' name='name' onChange={handleChange} className='form-input'/>
                        </TextField>
                        <TextField>
                            <Label htmlFor='code'>Code</Label>
                            {/* <Input name='code' onChange={handleChange} /> */}
                            <input id='code' type='text' name='code' onChange={handleChange} className='form-input'/>
                        </TextField>
                        <NumberField>
                            <Label>Credits</Label>
                                <Input name='credits' type='number' onChange={handleChange}/>
                        </NumberField>
                            {/* <input id='credits' type='number' min='1' name='credits' onChange={handleChange} className='form-input'/> */}
                        <TextField>
                            <Label htmlFor='module'>Module</Label>
                            <select name='module' id='module' defaultValue='Choose here' className='module-select' onChange={handleChange}>
                                <option value="Choose here" disabled>Choose here</option>
                                <option value="Keys to Studies and Career">Keys to Studies and Career</option>
                                <option value="Key Competencies">Key Competencies</option>
                                <option value="Key Competencies in Business Information Technology Studies">Key Competencies in Business Information Technology Studies</option>
                                <option value="Professional Competencies in Business Information Technology Studies">Professional Competencies in Business Information Technology Studies</option>
                                <option value="Thesis">Thesis</option>
                                <option value="Work Placement">Work Placement</option>
                            </select>
                        </TextField>
                        <Button type='submit' slot="close">
                            Add
                        </Button>
                        <Button slot="close">
                            Cancel
                        </Button>
                    </form>
                </Dialog>
            </Modal>
        </DialogTrigger>
    )
}

export default AddCourseModal