import React, {useState,  useEffect} from "react";

function CounterUseEffect() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // useEffect hooks를 사용하여 생명주기 함수의 기능을 사용함

    // 의존성 배열을 빈 배열로 지정하면 componetDidMount() 함수로 동작
    useEffect(() =>{
        setCount2(100);
        console.log('컴포넌트 mount 시 동작')
    },[]);


    // useEffect 사용 시 componentDidUpdate() 함수의 기능을 사용하고자 하면 의존성 배열 부분에 변수를 지정
    useEffect(() =>{
       document.title = `총 ${count} 번 클릭 했습니다.`;
       console.log('컴포넌트 update 시 동작');
    },[count]);


    // useEffect 사용 시 componentWilUnmount() 함수의 기능을 사용하고자 하면 콜백 ㅎ마수에 return 부분에 콜백 함수를 추가하여 사용함
    useEffect(() => {
        return () => {
            console.log('컴포넌트 삭제 시 동작함')
        }
    },[count]);

    return (
        <div className={'container'}>
            <p>총 {count}번 클릭 했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() => setCount(count+1)}>
                클릭
            </button>
            <div>
                <p>두번째 count의 값 : {count2}</p>
                <button type={'button'} className={'btn btn-success'} onClick={() => setCount2(count2 +10)}>10 클릭</button>
            </div>
        </div>
    )
}

export default CounterUseEffect;