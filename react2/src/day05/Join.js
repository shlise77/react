import React, {useState} from "react";

// 문제 1) 회원 가입 페이지를 작성하세요
// id, 비밀번호, 이름, eamil,휴대전화 정보를 입력받고 확인 버튼 클릭시 console 이나 alert 으로 결과를 출력하세요
// id : userId, 비밀번호: userPw, 이름: userName, email: userEmail, 휴대전화: userPhone, 성별 : userGender
function Join(props){
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userGender, setUserGender] = useState('');

    const IdHandler = (event) => {
        setUserId(event.target.value);
    }

    const PwHandler = (event) => {
        setUserPw(event.target.value);
    }

    const NameHandler = (event) => {
        setUserName(event.target.value);
    }

    const EmailHandler = (event) => {
        setUserEmail(event.target.value);
    }

    const PhoneHandler = (event) => {
        setUserPhone(event.target.value);
    }

    const GenderHandler = (event) => {
        setUserGender(event.target.value);
    }

    const LoginSubmit = (event) =>{
        alert('아이디 ::'+ userId + '\n'+
            '비밀번호 ::'+ userPw +
            '이름 ::'+ userName +
            '이메일 ::'+ userEmail +
            '전화번호 ::'+ userPhone +
            '성별 ::'+ userGender);
    }


    return(
        <form onSubmit={LoginSubmit}>
            <label for={'user-id'} className={'form-label'}>아이디:
                <input type={'text'} className={'form-control'} value={userId} id={'user-id'} onChange={IdHandler}/>
            </label>
            <br/>
            <label htmlFor={'user-pw'} className={'form-label'}>비밀번호:
                <input type={'text'} className={'form-control'} value={userPw} id={'user-pw'} onChange={PwHandler}/>
            </label>
            <br/>
            <label htmlFor={'user-name'} className={'form-label'}>이름:
                <input type={'text'} className={'form-control'} value={userName} id={'user-name'} onChange={NameHandler}/>
            </label>
            <br/>
            <label htmlFor={'user-email'} className={'form-label'}>이메일:
                <input type={'text'} className={'form-control'} value={userEmail} id={'user-email'} onChange={EmailHandler}/>
            </label>
            <br/>
            <label htmlFor={'user-phone'} className={'form-label'}>전화번호:
                <input type={'text'} className={'form-control'} value={userPhone} id={'user-phone'} onChange={PhoneHandler}/>
            </label>
            <br/>
            <div className={'form-check'}>
                <label className={'orm-check-label'} form={'genderRadio'}>
                    <input className={'form-check-input'} type={'radio'} id={'genderRadio'}/>남성
                    <input className={'form-check-input ms-5'} type={'radio'} id={'genderRadio'}/>여성
                </label>
            </div>
            <br/>
            <button type={'submit'} className={'btn btn-primary'}>확인</button>
        </form>
    )
}

export default Join;