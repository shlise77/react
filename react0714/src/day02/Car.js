import React from "react";
import Profile from "./profile";


// Profile의 부모가 되는 컴포넌트
function Car(props){
    return(
        <div>
            {/* 자식 컴포넌트인 Profile을 3번 호출 */}
            {/* 각 컴포넌트 마다 속성값을 4개 전달함 */}
            {/* 리액트에서는 통일의 느낌으로 작은 따옴표 '' 을 많이 쓴다. */}
            <Profile name="토레스" type="SUV" price={3000} ele={false}/>
            <br/>
            <Profile name='코나' type='SUV' price={4000} ele={true}/>
            <br/>
            <Profile name={'그랜저'} type={"세단"} price={6000} ele={false}/>
        </div>
    )
}

export default Car;