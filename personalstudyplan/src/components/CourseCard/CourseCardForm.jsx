


const CourseCardForm = ({ handleComplete, setGrade }) => {
    return(
        <>
            <form onSubmit={handleComplete}>
                <label htmlFor="grade"> Grade
                    <select name="grade" id="grade" defaultValue='Choose' onChange={e => setGrade(parseInt(e.target.value))}>
                        <option value='Choose' disabled>Choose</option>
                        <option value='pass'>Pass</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
                <button type='submit'>Complete</button>
            </form>
           
        </>
    )
}

export default CourseCardForm