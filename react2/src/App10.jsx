import React, {useContext} from 'react';

const ThemeContext = React.createContext('light');
const UserContext = React.createContext('Guest');

function App10(props) {

    const {theme, signedInUser} = props;

    return (
        <ThemeContext.Provider value={theme}>
            <UserContext.Provider value={signedInUser}>
                <Layout />
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}

function Layout(props){
    return(
        <Content />
    );
}

function Content(props){
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    return(
        <ProfilePage theme={theme} user={user}/>
    );
}

function ProfilePage(props){
    return (
        <div>
            <p>{props.theme}</p>
            <p>{props.user}</p>
        </div>
    );
}


export default App10;