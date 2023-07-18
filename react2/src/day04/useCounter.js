import React, {useState} from "react";

function useCounter(initValue){
    // useState를 사용하여 변수 cont를 state로 설정
    const [count,setCount] = useState(initValue);

    const increaseCount = () => setCount((count) => count +1);
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    // 배열로 반환, 0번 index는 현재 count값, 1번 index는  count up, 2번 index는 count down
    return [count, increaseCount, decreaseCount];
}

export default useCounter;

