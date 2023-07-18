import React from "react";

function WarningBanner(props){
    // 부모에서 전달받은 데이터를 사용하여 조건에 따라 반환값을 null 혹은 html을 출력
    // 전달받은 데이터가 있으면 if문 실행 안함, 데이터가 없으면 null을 반환
    if(!props.warning){
        return null;
    }

    return(
        <div>경고!</div>
    );
}
export default WarningBanner;