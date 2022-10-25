import React from "react";
import "./Dialog.css";
//자식 컴포넌트
function Dialog(params) {
    return (
        <div className={params.type}>
            <h3>{params.title}</h3>
            <p>{params.info}</p>
            <button id={params.keyval} onClick={params.del}>삭제하기</button>
        </div>
    )
}

export default Dialog;