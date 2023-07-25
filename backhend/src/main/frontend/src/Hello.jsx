import React from 'react';
import axios from "axios";

function Hello(props) {

    return (
        <div>
          <button type={'button'} onClick={() => {
            axios.get('http://localhost:8080/hello')
                .then(res =>{
                    alert(`정상 통신이 되었습니다.\n${res.data}`);
                })
                .catch(err =>{
                    alert(`통신이 실패 했습니다.`)
                })
          }}>확인</button>
        </div>
    )
}

export default Hello;