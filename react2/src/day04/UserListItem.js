import React, {useEffect, useState} from "react";
import useUserStatus from "./useUserStatus";

// 사용자의 상태에 따라 사용자 아이디의 색상을 변경하는 컴포넌트
function UserListItem(props){
    // 커스덤 훅 사용
    const isOnline = useUserStatus(props.user.id);

    // 커스텀 훅 미사용
    // useState 훅 사용
    // const [isOnline, setIsOnline] = useState(null);

    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline);
    //     }
    //     // 서버에서 접속하여 지정한 사용자가 온라인 인지 아닌지 확인하는 로직
    //     ServerAPI.subscribeUserStatis(props.user.id, handleStatusChange());
    // });

    return(
        <li style={{color:isOnline?'green': 'black'}}>{props.user.name}</li>
    )
}

export default UserListItem;