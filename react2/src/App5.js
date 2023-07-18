import React from "react";
import Accommodate from "./day04/Accommodate";
import ToggleClass from "./day04/ToggleClass";
import ToggleFunction from "./day04/ToggleFunction";
import MyButton from "./day04/MyButton";
import ConfigButton from "./day04/ConfigButton";
import ConfirmButtonFunction from "./day04/ConfirmButtonFunction";
import Greeting from "./day04/Greeting";
import LoginControl from "./day04/LoginControl";
import MallBax from "./day04/MallBax";
import Counter from "./day04/Counter";
import WarningBanner from "./day04/WarningBanner";
import MainPage from "./day04/MainPage";
import LandingPage from "./day04/LandingPage";

function App5() {
    return(
        <div className={'container mt-4'}>
            <Accommodate />
            <hr/>
            <ToggleClass />
            <hr/>
            <ToggleFunction />
            <hr/>
            <MyButton />
            <hr/>
            <br/><br/>
            {/*<ConfigButton />*/}
            <hr/>
            <br/><br/>
            <ConfirmButtonFunction />
            <hr/>
            <br/><br/>
            <Greeting isLoggedIn={false}/>
            <hr/>
            <br/>
            <LoginControl />
            <br/>
            <hr/>
            <MallBax unreadMessages={0}/>
            <br/> <br/>
            <MallBax unreadMessages={10}/>
            <br/><br/>
            <Counter />
            <br/><br/>
            <MainPage />
            <br/><br/>
            <LandingPage />
        </div>
    );
}

export default App5;