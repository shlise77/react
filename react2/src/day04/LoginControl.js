import React, {useState} from "react";

// 자식 컴포넌트
function handleLoginClick(props){
    return(
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
    );
}

// 자식 컴포넌트
function LogoutButton(props){
    return(
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그아웃</button>
    );
}

// 부모 컴포넌트
function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick = () =>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () =>{
        setIsLoggedIn(false)
    }

    // 엘리먼트 변수 선언, 실제로는 그냥 일반 변수
    let button;

    // 조건부 렌더링 연산, state인 isLoggedIn 의 값이 true 혹은 false일 경우에 따라서 변수 button 에 저장되는 컴포넌트가 변경됨
    if(isLoggedIn){
        button = <LogoutButton onClick={handleLogoutClick} />
    }
    else{
        button = <LogoutButton onClick={handleLoginClick()} />
    }

    return (
        <div className={'container mt-4'}>{button}</div>
    )
}

export default LoginControl;