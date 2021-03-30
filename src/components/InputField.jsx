import React, { useState } from 'react'

export const InputFiled = (props) => {

    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        props.addText(text)
        setText("");
    }


    return (
        <div>
            <form type="submit" onSubmit={handleClick}>
                <input onChange={handleChange} value={text} type="text" placeholder="Enter text..."></input>
                <button>+</button>

            </form>
        </div>
    )
}
