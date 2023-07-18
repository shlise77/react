import React, {useState} from "react";
import * as PropTypes from "prop-types";

function Greeting2(props) {
    return null;
}

Greeting2.propTypes = {isLoggedIn: PropTypes.bool};

function LogoutButton(props) {
    return null;
}

LogoutButton.propTypes = {onClick: PropTypes.any};

function LoginButton(props) {
    return null;
}

LoginButton.propTypes = {onClick: PropTypes.any};

function LoginControl2(props){
    const [isLogedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () =>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () =>{
        setIsLoggedIn(true);
    }

    return(
        <div className={'container'}>
            {/* inline if 방식을 화면에 출력 */}
            <Greeting2 isLoggedIn={isLogedIn} />
            {

                isLogedIn
                ?<LogoutButton onClick={handleLogoutClick()} />
                    : <LoginButton onClick={handleLoginClick()} />
            }
        </div>
    )
}

export default LoginControl2;