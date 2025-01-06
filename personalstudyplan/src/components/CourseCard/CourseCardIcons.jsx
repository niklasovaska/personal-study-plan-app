import { Tooltip } from 'react-tooltip'
import './CourseCard.css'
import CheckIcon from '../../icons/CheckIcon'
import DeleteIcon from '../../icons/DeleteIcon'

const CourseCardIcons = ({ setIsCompleting, hover, handleDelete }) => {
    return(
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <a data-tooltip-id={'check'} data-tooltip-content='Mark as completed' className='card_icons' onClick={() => setIsCompleting(true)}><CheckIcon hover={hover} /></a>
            <Tooltip id='check' place='bottom'/>
            <a data-tooltip-id={'delete'} data-tooltip-content='Remove course' className='card_icons' onClick={handleDelete}><DeleteIcon hover={hover} /></a>
            <Tooltip id='delete' place='bottom' />
        </div>
    )
}

export default CourseCardIcons