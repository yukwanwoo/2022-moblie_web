import React, { useState, useEffect } from "react";
import "./App.css";

const serverURL = "http://localhost:65001/users";

function App() {
    const [userData, setUserData] = useState([]);
    function getUserData() {
        fetch(serverURL, {
            method: "GET",
        })
            .then((reseponse) => reseponse.json())
            .then((data) => setUserData(data))
            .then(console.log(userData));
    }
    useEffect(getUserData, []);

    function submitHandler(params) {
        params.preventDefault();
        const name = params.target.name.value;
        const id = params.target.id.value;
        const passwd = params.target.passwd.value;

        fetch(serverURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, id: id, passwd: passwd }),
        })
            .then((reseponse) => reseponse.json())
            .then((data) => {
                //아이디 중복이 아니면 TRUE
                if (data.result) {
                    getUserData();
                    //입력창 비우기
                    params.target.name.value="";
                    params.target.id.value="";
                    params.target.passwd.value="";
                } else {
                    //아이디 중복 경고 출력
                    alert("아이디중복")
                }
            });
    }
    return (
        <>
            <div>
                <h2> 회원등록 </h2>
                <form onSubmit={submitHandler}>
                    <input type="text" name="name" placeholder="이름" />
                    <input type="text" name="id" placeholder="아이디" />
                    <input type="text" name="passwd" placeholder="암호" />
                    <button type="submit"> 등록 </button>
                </form>
            </div>
            <p> </p>
            <div>
                <h2> 회원목록 </h2>
                <ol>
                    {userData === null ? ( // 데이터가 수신되었는지를 확인
                        <p> 서버에서 데이터를 가져오는 중.... </p>
                    ) : (
                        userData.map(
                            (
                                user,
                                i // 수신되었다면 목록으로 처리
                            ) => (
                                <li key={user.keyid}>
                                    {" "}
                                    {user.name} {user.id} {user.passwd}{" "}
                                </li>
                            )
                        )
                    )}
                </ol>
            </div>
        </>
    );
}

export default App;
