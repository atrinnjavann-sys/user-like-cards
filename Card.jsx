import { useState } from "react"
import style from "../Components/card.module.css"
function Card({FirstName,LastName}) {
const [like,setlikes]=useState(0);
const countHandeler=()=>{
  setlikes(like+1);
}
  return (
    <div className={style.container}>
        <p>{FirstName}</p>
        <p>{LastName}</p>
        <button onDoubleClick={countHandeler }>like it</button>
        <p>like:{like}</p>

      

    </div>
  )
}

export default Card