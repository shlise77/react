import React from "react";

function Children31(props){

    // 부모컴포넌트에서 전달받은 데이터
const recData = props.data;
// 부모 컴포넌트에서 전달받은 함수
const recFunc = props.func;

    return(
        <div>
        <h3>자식컴포넌트</h3>
            <h4>부모컴포넌트에서 전달된 데이터 : {recData.data}</h4>
            <button type={'button'} className={'btn btn-primary'} onClick={recFunc}>클릭</button>

    </div>)
}

export default Children31;