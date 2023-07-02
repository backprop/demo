import React from "react"

export default function Die(props){
    const heldClass=props.isHeld?"held":""
    return(
        <div className={`die-face ${heldClass}`} onClick={props.holdDie}>
            <h2 className="die-num">
                {props.number}
            </h2>
        </div>
    )
}