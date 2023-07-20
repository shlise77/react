import React from 'react';
import Dialog2 from "./Dialog2";

function WelComeDialog2(props) {

    return (
        <div>

      <Dialog2
        title={'어서 오세요'}
        message={'우리 사이트에 방문하신 것을 환영합니다.'}
      />
        <Dialog2 title={'경고!!!'} message={'오류가 발생 했습니다.'} />
        </div>
    )
}

export default WelComeDialog2;