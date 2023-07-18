import React, {useEffect, useState} from "react";
import useStatus from "./UseStatus";

function useUserStatus(userId){
    const [isOnline, setIsOnline] = useStatus(null);

    useEffect(() =>{
        function handleStatusChange(status){
            setIsOnline(status.isOnline);
        }
        ServerAPI.subscribeUserStatus(userId, handleStatusChange());
    });
    return isOnline;
}

export default useUserStatus(userId);