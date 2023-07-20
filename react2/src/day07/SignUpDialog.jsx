import React, {useState} from 'react';
import Dialog3 from "./Dialog3";

function SignUpDialog(props) {

  // useState를 사용하여 변수 ninkName을 state 로 설정
  const [nickName, setNickName] = useState('')

  // 이벤트 발생 시 동작할 콜백함수 선언
  const handleChange = (e) =>{
    setNickName(e.target.value);
  }

  //
  const handleSingup = () =>{
    alert(`어서오세요, ${nickName}님`);
  }

  const handleCheckboxChange = () => alert('체크되었습니다.')

  //
    return (
        <div>
          <Dialog3 title={'화성 탐파 프로그램'} message={'닉네임을 입력하세요'}>
            {/* Dialog3 의 자식 컴포넌트의 props.children 부분임 */}
            <input value={nickName} onChange={handleChange} className={'form-control'} />
            <button type={'button'} onClick={handleSingup} className={'btn btn-primary'}>가입하기</button>
          </Dialog3>

          <Dialog3 title={'심해 탐파 프로그램'} message={'닉네임을 입력하세요'}>
            {/* Dialog3 의 자식 컴포넌트의 props.children 부분임 */}
            <input value={nickName} onChange={handleChange} className={'form-control'} />
            <label htmlFor={'chk'} className={'form-label ms-3'}>18세 이상 :
              <input type={'checkbox'} id={'chk'} className={'form-check-input'} onChange={handleCheckboxChange}/>
            </label>
            <button type={'button'} onClick={handleSingup} className={'btn btn-primary'}>가입하기</button>
          </Dialog3>
        </div>
    )
}

export default SignUpDialog;