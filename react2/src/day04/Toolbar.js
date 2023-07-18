import React from "react";

function Toolbar(props){
    // 부모 컴포넌트에서 전달받은 데이터를 전개 연산법을 통하여 각각의 변수에 지정
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return(
        <div className={'container d-flex border'}>
            {isLoggedIn && <span className={'me-3'}>환영합니다.</span>}

            {isLoggedIn ? (
                <button type={'button'} className={'btn btn-primary'} onClick={onClickLogout}>로그아웃</button>
            ):(
                <button type={'button'} className={'btn btn-primary'} onClick={onClickLogin}>로그인</button>
            )}

        </div>
    )
}

export default Toolbar;