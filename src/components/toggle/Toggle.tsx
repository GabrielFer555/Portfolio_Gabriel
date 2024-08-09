import { useEffect, useState } from 'react'
import '../../App.css'
import { LightMode } from '@mui/icons-material'
const Toggle = ({isChecked, handleCheck}:{isChecked:boolean, handleCheck:()=>void}) => {
    const [textLabel, setTextLabel] = useState(isChecked === true?'Dark Mode': 'Light Mode' )

    useEffect(()=>{
        setTextLabel(isChecked === true? 'Dark Mode': 'Light Mode')
    },[isChecked])

  return (
    <div className="toggle-container">
        <input type="checkbox" id='check' className='toggle' onChange={handleCheck} checked={isChecked}/>
        <label htmlFor="check"> {textLabel}</label>
    </div>
  )
}

export default Toggle