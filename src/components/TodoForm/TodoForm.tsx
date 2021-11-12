import React, {useState} from "react";

interface TodoFormProps{
     onAdd(title:string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            props.onAdd(title)
            setTitle('')
        }
    }

    return(
        <div className="input-field">
            <input
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            value={title} 
            type="text" id="title" 
            placeholder="your text">
            </input>
            <label htmlFor="title" className="active"> your text</label>
        </div>
    )
}

export default TodoForm