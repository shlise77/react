import React from 'react';
import axios from "axios";

function AxiosRestServer(props) {

    const sendDataGet = () =>{
        axios.get('http://localhost:8080/async/sendDataGet')
            .then(res =>{
                if(res.data.result == "success"){
                    console.log(`수신된 데이터: ${res.data.data}`);
                }
                else{
                    console.log('오류가 발생했습니다.');
                }
            })
            .catch(err =>{
                errorMessage('get',err);
            });
    }

    const sendDataGetParam = () =>{
        axios.get('http://localhost:8080/async/sendDataGetParam', {params: {idx:100}})
            .then(res =>{
                if(res.data.result == "success"){
                    console.log(`GET 방식 비동기 통신 성공`);
                    console.log(res);
                }
                else{
                    console.log('오류가 발생했습니다.');
                }
            })
            .catch(err =>{
                errorMessage('get',err);
            });
    }

    const sendDataPost  = () =>{
        axios.post('http://localhost:8080/async/sendDataPost', null, {
            params: {
                userId: "testId",
                userPw: "test password"
            }
        })
            .then(res =>{
                console.log('POST 방식 비동기 통신 성공')
                console.log(res)
            })
            .catch(err =>{
               errorMessage('post',err);
            });
    }
    const sendDataPut  = () =>{
        axios.put("http://localhost:8080/async/sendDataPut", null, {
            params:{
                idx:100
            }
        })
            .then(res =>{
                console.log('put 방식으로 통신 성공');
                console.log(res)
            })
            .catch(err =>{
                errorMessage('put',err);
            });
    }
    const sendDataDelete  = () =>{
        axios.delete("http://localhost:8080/async/sendDataDelete", {
            params:{
                idx:200
            }
        })
            .then(res =>{
                console.log('Delete 방식으로 통신 성공');
                console.log(res)
            })
            .catch(err =>{
                errorMessage('delete',err);
            });}

    const errorMessage=(type, message) =>{
        console.log(`${type} 방식 통신 중 오류가 발생했습니다.`);
        console.log(message);
    }




    return(
        <div className={'mt-5 p-5'}>
            <h1 className={'text-center'}>Axios를 사용한 비동기 통신</h1>
            <div className={'col-sm-8 mx-auto'}>
                <div></div>
                <div className={'my-3 d-flex justify-content-center'}>
                    <button type={'button'} className={'btn btn-primary me-3'} onClick={sendDataGet}>get 방식</button>
                    <button type={'button'} className={'btn btn-warning me-3'} onClick={sendDataGetParam}>get 파라미터 방식 추가</button>
                    <button type={'button'} className={'btn btn-success me-3'} onClick={sendDataPost}>post 방식</button>
                    <button type={'button'} className={'btn btn-info me-3'} onClick={sendDataPut}>put 방식</button>
                    <button type={'button'} className={'btn btn-danger me-3'} onClick={sendDataDelete}>delete 방식</button>
                </div>
            </div>
        </div>
    )
}

export default AxiosRestServer;