import React, {useState} from "react";
import Children31 from "./Children31";

function Parent3(props){

    // state 설정
    const[data1, setData1] = useState('');

    // 엘리먼트 변수 선언
    // const child1 = <Chlidren31 data={data1} func={null}/>

    // 각종 이벤트 시 동작하는 함수
    const inputChange1 = e => setData1(e.target.value);
    const ClickBtn1 = e => {
        // child1 = <>>
    }

    return(
        <div className={'row my-4'}>
            <div className={'col-sm border-2 rounded rounded-3 p-3'}>
                <div className={'my-3'}>
                    <input type={'text'} className={'form-control'} value={data1} onChange={inputChange1}/>
                    <button type={'button'} className={'btn btn-primary'} onClick={child1}>
                        데이터 전달
                    </button>
                </div>
                <Children31 />
            </div>
            <div className={'col-sm border-2 rounded rounded-3 p-3'}>
                {/*<Children32 />*/}
            </div>

        </div>
    )
}

export default Parent3;