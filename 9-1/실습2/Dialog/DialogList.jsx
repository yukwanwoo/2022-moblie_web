import React, {useRef,useState} from "react";
import Dialog from "./Dialog";
//메시지 초기값
const LogArray = [
    {
        key:0,
        type:"warning",
        title:"경고",
        info:"경고 메시지",
    },
    {
        key:1,
        type:"greeting",
        title:"인사",
        info:"인사 메시지",
    },
    {
        key:2,
        type:"error",
        title:"오류",
        info:"오류 메시지",
    },
    {
        key:3,
        type:"notice",
        title:"공지",
        info:"공지 메시지",
    }
]
//부모 컴포넌트
function DialogList(params) {
    //key관리용 Ref
    const key = useRef(0);
    //key숫자 증가
    const keyup = ()=>{key.current = key.current+1};
    //메시지 관리용 state 함수
    const [message, setMessage] = useState(LogArray);
    //메사지 삭제 함수
    const delMessage = (e)=>{
        setMessage((item)=>
            message.filter((item) => item.key !== parseInt(e.target.id))
        )
    }
    return(
        <>
        {/* 자식 컴포넌트를 map함수로 반복하여 생성함 */}
        {message.map((item,index)=>{
            keyup()
            return(
                <Dialog key={item.key} keyval={item.key} type={item.type} title={item.title} info={item.info} del={delMessage} />
            )
        })}
        </>
    )
}

export default DialogList;