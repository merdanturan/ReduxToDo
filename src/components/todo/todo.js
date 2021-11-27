import React, {useState} from 'react'

import { useDispatch } from 'react-redux';
import { setCheck, setName } from '../../store/todoSlice';

const Todo = ({
    name,
    done,
    id
}) => {
    ///State for toggle input
    const [toggle, setToggle] = useState(false)
    ///State for keep edited name
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    ///Check/uncheck dispatch to redux
    const changeCheck = () => {
        dispatch(
            setCheck(id),
        );
    }

    ///Edit name dispatch to redux
    const editTask = () => {
        dispatch(
            setName({
                id,
                name: input
            }),
        );
        setToggle(false)
    }

    ///Toggle/Untoggle function
    const handleToggle = () => {
        setToggle(true)
        setInput(name)
    }


    return (
        <>
            {toggle ? 
            <form onSubmit={editTask}>
                <input value={input} onChange={e=>setInput(e.target.value)} className="new-todo"/>
            </form>
            :
            <div className="todo">
                <p onDoubleClick={handleToggle}>
                    {name}
                </p>
                <label className="round">
                    <input type="checkbox" onChange={changeCheck} checked={done} />
                    <span className="checkmark"></span>
                </label>
            </div>
            }
        </>
    )
}

export default Todo
