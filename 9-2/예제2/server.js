const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

const port = 65020;

app.use(express.json());
app.use(express.static(path.join(__dirname,'/reactapp/build'))); 
app.use(bodyParser.urlencoded({ extended: false }));

var keyid = 3; // 다음에 추가될 회원에게 부여할 key값
const userList = [
    // 객체배열(회원명단) 초기값 설정
    { keyid: 1, name: "홍길동", id: "kdhong", passwd: "1111" },
    { keyid: 2, name: "백종원", id: "sugarlove", passwd: "9876" },
];

const mainPage=(req,res)=>{
    res.sendFile(path.join(__dirname,"/reactapp/build/index.html"))
}

const listUser=(req,res)=>{
    res.json(userList)
}

const addUser =(req,res)=>{
    const {name, id, passwd}=req.body;
    var temp = userList;
    var result = true;
    //ID중복 검사
    userList.forEach(element => {
        if(element.id === id){
            result=false;
        }
    });
    if(result){
        console.log(JSON.stringify({name:name,id:id,passwd:passwd}))
        userList.push({keyid:keyid++, name:name,id:id,passwd:passwd})
    }
    //아이디가 존재하지 않는경우 성공(TRUE 반환)
    return res.json({result:result})
}

const checkUser=(req,res)=>{
    const { id, passwd}=req.body;
    var temp = userList;
    var result = false;
    //중복 검사
    userList.forEach(element => {
        if(element.id === id && element.passwd === passwd){
            result=true;
        }
    });
    //존재하는 경우 TRUE 반환
    return res.json({result:result})
}

app.get("/",mainPage);
app.get("/users",listUser)
app.post("/users",addUser)
app.post("/exist",checkUser)

app.listen(port,()=>{
    console.log("--서버 실행중--")
    console.log("http://localhost:65001")
    console.log("==============")
})