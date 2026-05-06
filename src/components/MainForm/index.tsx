import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultInput } from "../Defaulinput";
import { DefaultButton } from "../DefaultButtom";

export function MainForm() {
  return (
    <form className='form' action="">
          <div className='formRow'>
            <DefaultInput 
              labelText='Task'
              id='meuInput'
              type='text'
              placeholder='Digite algo...'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet 25min</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>
          
          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
  )
}