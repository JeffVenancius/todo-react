import { useState } from "react";

function Inputer({setTodo}) {
    const [input, setInput] = useState('')

    function handleInput(event) {
        setInput(event.target.value)
    }

    function addNew() {
        setInput('')
        setTodo(input)
    }

    return (
        <div id="inputer">
            <textarea 
                cols="60" 
                rows="3" 
                placeholder="Adicione um novo todo" 
                onChange={handleInput}
                value={input}
                />
            <button onClick={addNew}>Add</button>
        </div>

    )
}

export default Inputer;