import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

function ProFile1(props) {

    //useParams() 훅을 사용하여 파라미터로 전달된 데이터를 모두 가져옴
    const profile = useParams();
    console.log(profile);

    const navi = useNavigate()

    const goPrev = () => {
        navi(-1);
    }

    const goNext = () =>{
        navi(1);
    }

    const goAbout = () =>{
        navi('about');
    }


    return (
        <div>
            <h1>profile1 페이지</h1>
            <h3>파라미터1 : {profile.userNmae}</h3>
            <h3>파라미터2 : {profile.age}</h3>

            <button type={'button'} className={'btn btn-primary'} onClick={goPrev}>이전페이지</button>
            <button type={'button'} className={'btn btn-primary'} onClick={goNext}>이전페이지</button>
            <button type={'button'} className={'btn btn-primary'} onClick={goAbout}>다음페이지</button>
        </div>
    )
}

export default ProFile1;