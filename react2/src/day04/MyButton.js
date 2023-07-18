import React from "react";

function MyButton(props) {
    // 이벤트 발생 시 실행할 함수
    // 매개변수로 2개의 데이터를 받음

    const handleDelete = (id, event) =>{

        // 전달받은 이벤트 target 속성을 사용 시 이벤트가 발생된 html 태그를 알려줌
        console.log(id, event.target);
    }
    return (
        <div className={'container my-3'}>
            {/*// onclick 속성에 콜백함수를 설정*/}
            {/* onClick속성에 콜백함수 설정 시 매개변수를 지정하면 이벤트가 발생된 태그가 됨 */}
            <button type={'button'} className={'btn btn-primary'} onClick={(event) => handleDelete(1,event)}>
                삭제하기
            </button>
            <button type={'button'} className={'btn btn-primary'} onClick={() =>{
                console.log('이벤트 발생')}}>
                삭제하기
            </button>
        </div>

    );
}

export default MyButton;