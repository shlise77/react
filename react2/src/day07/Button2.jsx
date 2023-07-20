import React from 'react';

function Button2(props) {

    return (
        // 부모 컴포넌트에서 전달한 데이터가 props에 값을 전달
        <button type={'button'} className={`btn btn-${props.theme}`} onClick={() => {
          alert(`사용한 테마 : ${props.theme}`);
        }}>{props.theme}테마버튼</button>
    )
}

export default Button2;