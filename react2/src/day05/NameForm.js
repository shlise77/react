import React, {useState} from "react";

function NameForm(props) {

    // useState를 사용하여 변수 value 를 state로 설정
    const [value, setValue] = useState('');

    // 이벤트 발생 시 동작할 함수
    // 매개변수 event는 발생된 이벤트를 의미함
    const handleChange = (event) =>{
        // event.target : 현재 이벤트가 발생한 태그를 의미
        // event.target.value : 현재 이벤트가 발생한 태그가 가지고 있는 value 속성의 값
        // 현재 input 태그의 value 값을 가져와서 setState로 value 변수에 데이터를 저장
        setValue(event.target.value);
    }

    const handleSubmit = (event) =>{
        // 알림창에 state 로 등록된 변수 value의 값을 출력
        alert('입력한 이름 : ' + value);

        // preventDefault : 동작 중지
        //  event.preventDefault : form의 submit이 동작되었을 경우 화면 전환이 발생되는데 해당 화면전환을 막음
        // 어떠한 이벤트를 명시적으로 처리하지 않을 경우 해당 이벤트의 기본 동작을 실행하지 않도록 함
        // https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault 상세 내용
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label for={'user-name'} className={'form-label'}>이름:</label>
                {/* input 태그의 value 속성에 state로 설정된 변수를 대입하면 저장된 값을 화면 재런더링 할수 있음 */}
                <input type={'text'} id={'user-name'} className={'form-control'} value={value} onChange={handleChange} />
            <button type={'submit'} className={'btn btn-primary mt-2'}>확인</button>
        </form>
    )
}

export default NameForm;