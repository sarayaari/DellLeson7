import { useState } from "react";
import { useRef } from "react";
export default function AppInput(props) {

    let color = useRef();
    let selectColor = useRef();
    let [bg, setBg] = useState();
     let [fontColor,setfontColor]=useState();
    const changeColor = () => {
        setBg(color.current.value)
    }
    return (
        <div>
            <div style={{ backgroundColor: bg }} className="col-lg-6 border p-3">
                <h2>enter color: </h2>
                <input ref={color} type="text" className="form control" />
                <br />
                <button onClick={changeColor} className="btn btn-info mt-3"> change</button>
                <hr />
                <h3 style={{color:fontColor}}>select font color </h3>
                    <select onChange={()=>{
                    setfontColor(selectColor.current.value )
                }} ref={selectColor} className="form-select">
                        <option value="yellow">yello</option>
                        <option value="red">red</option>
                        <option value="blue">blue</option>
                    </select>
               
            </div>

        </div>
    )
}