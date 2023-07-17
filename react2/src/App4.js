import React from "react";
import SetStateClass from "./day03/SetStateClass";
import SetStateFunction from "./day03/setStateFunction";
import NotificationList from "./NotificationList";
import Counter from "./day03/Counter";
import CounterUseState from "./day03/CounterUseState";
import CounterUseEffect from "./day03/CounterUseEffect";
import VolumeControl from "./day03/VolumeControl";
import TextImputWhatFouce from "./day03/TextImputWhatFouce";


function App4(){
    return(
        <div>
            <SetStateClass />

            <hr/>

            <SetStateFunction />

            <hr/>

            <NotificationList />

            <hr/>

            <Counter />
            <CounterUseState />
            <br/>
            <CounterUseEffect />
            <hr/>
            <VolumeControl />
            <br/>
            <TextImputWhatFouce />

        </div>
    )
}

export default App4;