import React, {useState, useEffect} from "react";

// 문제1) 버튼 2개를 생성(+,-)하고 useState와 useEffect를 사용하여 불륨값을 조절하는 프로그램과 UI와 이벤트가 동작하도록 작성하세요

// state 변수명 volume
// volume 초기값 = 0, 기본 설정값 5, 최대값은 10으로 설정

function VolumeControl(){

    const [countADD, stateAdd] = useState(1);

    useEffect(() =>{
        return () =>{
        }
    },[countADD]);

    return(
        <div className={'container'}>
            <p>총 갯수 : {countADD}</p>
            <button type={'button'} className={'btn btn-primary me-5'} onClick={() => stateAdd(countADD+1)}>더하기</button>
            <button type={'button'} className={'btn btn-primary'} onClick={() => stateAdd(countADD-1)}>빼기</button>
        </div>
    )
}

export default VolumeControl;