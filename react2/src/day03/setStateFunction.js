import React, {useState} from "react";

// 함수 컴포넌트 사용
function SetStateFunction() {

    // hooks 중 useState를 사용함
    // 함수 컴포넌트에서는 state의 값을 변경하고 자 할경우 반드시 useState를 사용해야 함
    // let[변수명, 바뀔값] = useState('초기값')
    let [ stateString, setStateString] = useState('click');

    function StateChange(e){
        // 직접 수정이기 떄문에 화면 update가 되지 않음
        console.log(`원본 : ${stateString}`);
        stateString = 'useState로 수정 클릭';
        console.log(`수정 : ${stateString}`);
        e.preventDefault();
    }

    return(
        <div>
            <button onClick={(e) => {
                StateChange(e)
            }} style={{marginRight: '20px'}} >state 직접 수정</button>
            <button onClick={() => {
                // useState를 사용하여 변수 수정
                setStateString('클릭');
            }}>setState로변경</button>

            <br />

            [state 변경하기] StateString: {stateString}
        </div>
    )
}

export default SetStateFunction;

