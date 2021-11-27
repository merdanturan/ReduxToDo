import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { saveTodo } from '../../store/todoSlice';

const ToDoInput = ({date}) => {
    ///State for keep value from input
    const [input, setInput] = useState('');
	const dispatch = useDispatch();

    ///Saving todos to redux
    const onSubmit = (event) => {
		event.preventDefault();
		if (input) {
			dispatch(
				saveTodo({
					name: input,
                    done: false,
                    selectedDate: date,
                    id: Math.random()
				}),
                setInput('')
			);
		}
	};

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="+ New" value={input} onChange={e=>setInput(e.target.value)} className="new-todo" />
        </form>
    )
}

export default ToDoInput
