import React from 'react';
import WelcomeDialog from "./day07/WelcomeDialog";
import SpitPane from "./day07/SpitPane";
import Contacts from "./day07/Contacts";
import Chat from "./day07/Chat";
import bootstrapReact from "./day02/BootstrapReact";
import WelComeDialog2 from "./day07/WelComeDialog2";
import SignUpDialog from "./day07/SignUpDialog";
import ProfileCard from "./day07/ProfileCard";
import Toolbar from "./day07/Toolbar";

function App7(){

    const ThemeContext = React.createContext('info');

    return(
        <div className={'container mt-4'}>
            <WelcomeDialog />
            <br/>
            {/* 부모 컴포넌트인 App7에서 자식 컴포넌틍니 SplitPane을 호출 */}
            {/* 자식 컴포넌트 호출 시 속성 left, right에 다른 자식 컴포넌트를 전달함 */}
            <SpitPane left={<Contacts />} right={<Chat />} />
            <br/>
            <WelComeDialog2 />
            <br/>
            <hr/>
            <SignUpDialog />
            <br/>
            <hr/>
            <ProfileCard />
            <br/>
            <hr/>
            {/* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하면서 호출 */}
            <Toolbar theme={'primary'}/>
                <br/>
                <hr/>
        </div>
    )
}

export default App7;