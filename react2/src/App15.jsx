import React from 'react';
import BootstrapReact from "./day02/BootstrapReact";
import {Route, Routes} from "react-router-dom";
import BoardList from "./day09/BoardList";

function App15(props) {

    return (
        <BootstrapReact>
            <Route path={'/board'}>
                <Route index element={<BoardList />}></Route>
            </Route>
        </BootstrapReact>
    )
}

export default App15;