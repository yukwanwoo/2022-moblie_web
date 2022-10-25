import React, { useState } from "react";
import "./PassingCount.css";
//자식 1을 클릭해도 숫자가 올라가도록 변경
const FirstChild = (props) => {
    console.log(`자식1 ${props.data}`);
    return (
        <div className="first" onClick={props.upCount}> {/* 숫자 카운트 업 함수 연결 */}
            <p> 자식1 컴포넌트 </p>
            <p> (카운터: {props.data}) </p> 
        </div>
    );
};
//카운터를 올리는 함수를 위로 뺌
const SecondChild = (props) => {
    const onLeftClick = () =>
        props.setLeft();
    const onRightClick = () =>
        props.setRight();
    console.log("자식2 (버튼)");
    return (
        <div className="second">
            <p> 자식2 컴포넌트 </p>
            <button onClick={onLeftClick}> ◀ 카운터++ </button> {/* 왼쪽 카운트 업 함수 연결 */}
            <button onClick={props.resetData}> 카운터 0 </button> {/* 카운트 초기화 함수 연결 */}
            <button onClick={onRightClick}> 카운터++ ▶ </button> {/* 오른쪽 카운트 업 함수 연결 */}
        </div>
    );
};
//자식 3을 클릭해도 숫자가 올라가도록 변경
const ThirdChild = (props) => {
    console.log(`자식3 ${props.data}`);
    return (
        <div className="third" onClick={props.upCount}>
            <p> 자식3 컴포넌트 </p>
            <p> (카운터: {props.data}) </p>
        </div>
    );
};
//부모에서 leftUp과 rightUp함수를 지정하여 전달
function PassingCount() {
    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);
    //카운트 초기화 함수
    const resetData = () => {
        setLeftCount(0);
        setRightCount(0);
    };
    //왼쪽 카운트 업 함수
    const leftUp =()=>{
        setLeftCount((prevData) => parseInt(prevData) + 1)
    }
    //오른쪽 카운트 업 함수
    const rightUp =()=>{
        setRightCount((prevData) => parseInt(prevData) + 1)
    }
    return (
        <div className="parent">
            부모컴포넌트
            <br />
            (왼쪽카운트: {leftCount}, 오른쪽카운트: {rightCount})
            <div className="layout">
                <FirstChild data={leftCount} upCount={leftUp} />
                <SecondChild
                    setLeft={leftUp}
                    setRight={rightUp}
                    resetData={resetData}
                />
                <ThirdChild data={rightCount} upCount={rightUp} />
            </div>
        </div>
    );
}
export default PassingCount;
