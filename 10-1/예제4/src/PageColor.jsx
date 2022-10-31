import React, { useState, useContext, createContext } from "react";
import  "./PageColor.css";
//컨텍스트 객체생성
const ColorContext = createContext(null);

function PageColor(params) {
    const [isDark, setIsDark] = useState(false);
    return (
        //컨텍스트 제공
        <ColorContext.Provider value={{isDark:isDark,setIsDark:setIsDark}}>
            <Page/>
        </ColorContext.Provider>
    )
}

function Page(params) {
    return (
        <div className = "page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

function Header(params) {
    //컨텍스트 (isDark)사용
    const {isDark} = useContext(ColorContext);
    return (
        <header className='header' style = {{
            backgroundColor:isDark?"black":"lightgray",
            color:isDark?"white":"black"
        }}>
        <h2>컨텍스트 사용강의</h2>
        </header>
    )
}

function Content(params) {
    //컨텍스트 (isDark)사용
    const {isDark} = useContext(ColorContext);
    return (
        <content className='content'
            style={{
                backgroundColor:isDark?"black":"lightgray",
                color:isDark?"white":"black"
            }}>
            <p>오늘은 리액트 10주차 강의이며, Context를 배우는 중입니다.</p>
        </content>
    )
}

function Footer(params) {
    //컨텍스트 (isDark, setIsDark)사용
    const {isDark, setIsDark} = useContext(ColorContext);
    const toggleDardMode=()=>{setIsDark(!isDark)};
    return (
        <footer className="footer"
            style ={{
                backgroundColor:isDark?"black":"lightgray",
                color:isDark?"white":"black"
            }}>
                <button className = "button" onClick = {toggleDardMode}>{isDark?"라이트모드 전환":"다크모드 전환"}</button>
        </footer>
    )
}
export default PageColor;