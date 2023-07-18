import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props){
// 로그인 여부를 확인하는 isLoggedIn 변수를 useState를 사용하여 state로 등록
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 클릭 이벤트 발생시 호출 함수 생성
    const onClickLogin = () =>{
        // setState를 실행하여 setIsLoggedIn실행
        setIsLoggedIn(true);
    }
    const onClickLogout = () =>{
        setIsLoggedIn(false);
    }

    return(
        <div className={'container'}>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout} />
            <div className={'p-3'}>로그인</div>
        </div>
    )
}

export default LandingPage;