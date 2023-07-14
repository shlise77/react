import React from "react";
import WelcomeFunc from "./day02/WelcomeFunc";
import WelcomeClass from "./day02/WelcomeClass";
import Comment from "./day02/Comment";
import Comment2 from "./day02/Comment2";
import ReplyList from "./day02/ReplyList";
import BootstrapCDN from "./day02/BootstrapCDN";
import BootstrapReact from "./day02/BootstrapReact";
import BasicPage from "./day02/BasicPage";
import ReactHeader from "./day02/ReactHeader";
import {Nav} from "react-bootstrap";
import NavPage from "./day02/NavPage";
import MainBootstrap from "./day02/MainBootstrap";

// 자바 스크립트 object 타입 변수
const date = {
    avatarUri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDJfMTg4%2FMDAxNjg4MjQ3ODc5MzQ4.5vLnbI-uNIDel99HVa60-pEI8JeyfKo9goVOV9tX-PEg.VJFv1rANtEf1nto6EEzuM_1QaTeMualsKPCK5YH9oMIg.JPEG.yosiki1928%2FInternet%25A3%25DF20230702%25A3%25DF064312%25A3%25DF7.jpeg&type=sc960_832',
    name: '안유진'
}

function App2() {
    return(
        <div>
            {/* 컴포넌트 합성 */}
            <h1>함수 컴포넌트 사용</h1>
            <WelcomeFunc name={'리액트'} />
            <hr />
            <h1>클래스 컴포넌트 사용</h1>
            <WelcomeClass name={'리액트'} />
            {/* 자식 컴포넌트 Comment 호출 */}
            {/* 속성 author, text, date 를 전달 */}
            <hr />
            <Comment author={date} text={'안유진 이미지 사용'} date={new Date()} />
            <br />

            <Comment2 author={date} text={'컴포넌트 추출 해보기'} date={new Date()} />
            <br />
            <hr/>
            <br />
            <ReplyList />

            <hr />
            <BootstrapCDN />
            <hr />
            <BootstrapReact />
            <hr /> <br /><br /><br />
            <ReactHeader />
            <NavPage />
            <BasicPage />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default App2;