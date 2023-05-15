import { useState } from "react";
export default function Counter(props) {
    let [counter, setCounter] = useState(5)
    let [user, setUser] = useState("brachi");
    const changeCounter = () => {
        setCounter(counter + 1);
    }
    const changeUser = () => {
        setUser("chaim");
    }
    return (
        <div>
            <h2>counter:{counter}-{user}</h2>
            <button onClick={changeUser }>changeUser</button>
            <button onClick={changeCounter}>changeCounter</button>
            <button onClick={() => { setCounter(0); }}>resetCounter</button>
        </div>
    )
}