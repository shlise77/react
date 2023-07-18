import React, {useState} from "react";

function ToggleFunction(props){
    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // const handleClick =() =>{
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    return(
      <button type={'button'} className={'btn btn-primary'} onClick={handleClick}>
          {isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
}

export default ToggleFunction;