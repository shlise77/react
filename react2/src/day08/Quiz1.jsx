import React, {useEffect} from 'react';
import axios from "axios";

// 문제 1) axios를 사용하여 회원 정보 목록을 출력하는 페이지를 작성하세요
// 화면 로드 시 바로 회원 목록 정보를 가져와야 함 (useEffect 사용)

// 문제 2) 동일한 페이지에서 axios 를 사용하여 사용자를 추가하는 페이지를 추가하세요

function Quiz1(props) {

    let userList = "";
    useEffect(() => {
        axios.get('http://localhost:8080/user/userList')
            .then(req => {

                const list = req.data.result;

                for (let i = 0; i < list.length; i++) {
                    userList = [
                                <td>${list[i].userId}</td>,
                                <td>${list[i].userPw}</td>,
                                <td>${list[i].userName}</td>,
                                <td>${list[i].userEmail}</td>
                    ];
                }
            })
            .catch(err => {
                errorMessage('get', err)
            });
    })


    const errorMessage = (type, message) => {
        console.log(`${type} 방식 통신 중 오류가 발생했습니다.`);
        console.log(message);
    }

    return (
        <div className={'row mt-5 pt-5 justify-content-center'}>
            <div className={'col-sm-8'}>
                <table className="table table-striped">
                    <thead className={'text-center'}>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>이메일</th>
                    </thead>
                    <tbody className={'text-center'}>
                    <tr>
                    <td>{userList}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Quiz1;