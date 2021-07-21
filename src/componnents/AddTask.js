import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert("Please add a task!")
            return
        }


        onAdd({text, day, reminder})
        
        setDay('')
        setText('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            {/* <div >
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div> */}
            
            <TextField id="standard-basic" label="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='datetime-local' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <Checkbox checked = {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
                {/* <input type='checkbox' checked = {reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/> */}
            </div>
            {/* <input type='submit' value='Save Task'/> */}
            <Button
                value='Save Task'
                variant="outlined"
                color="primary"
                size="large"
                type='submit'
                className={useStyles().button}
                startIcon={<SaveIcon />}
            >Save Task</Button>
        </form>
    )
}

export default AddTask
