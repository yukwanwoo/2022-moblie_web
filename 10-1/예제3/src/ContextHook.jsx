import React, { createContext, useContext } from "react";
//컨텍스트 객체생성
const ThemeContext = createContext("yellow");
function ContextHook() {
    return (
        //컨텍스트 제공
        <ThemeContext.Provider value="lavender">
            <Toolbar />
        </ThemeContext.Provider>
    );
}
function Toolbar() {
    return (
        <div>
            <ThemeButton />
        </div>
    );
}
function ThemeButton() {
    return (
        <div>
            <Button />
        </div>
    );
}
function Button() {
    //컨텍스트 구독요청
    const value = useContext(ThemeContext);
    return (
        <div>
            <div
                style={{
                    margin: 50,
                    padding: 50,
                    backgroundColor: value /* 이곳서 사용*/,
                }}
            >
                <p> 컨텍스트를 가지고 데이터를 전달하는 예 </p>
                <button>확인</button>
            </div>
        </div>
    );
}
export default ContextHook;
