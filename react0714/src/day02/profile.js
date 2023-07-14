import React from "react";


//

function Profile(props){
    return(
        <div>
            <p>`이름 : ${props.name}`</p>
            <p>`차종 : ${props.type}`</p>
            <p>`가격 : ${props.price}`</p>
            <p>`전기차 : ${props.ele}`</p>
        </div>
    )
}

export default Profile;