import React from "react";

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끊습니다.</p>
    }
    return (<div></div>)
}

export default BoilingVerdict;