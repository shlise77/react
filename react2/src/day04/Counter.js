import React from "react";

function Counter(props){
    const count= 0;

    return(
        <div className={'container'}>
            {
                count
                &&
                <h1>현재 카운트 : ${count}</h1>
            }
        </div>
    )

}

export default Counter;