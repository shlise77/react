import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BoardList from "./board/BoardList";

function App() {
  return (
        <BrowserRouter>
            <div className={'container'}>
                <Routes>
                    <Route path={'/board'}>
                        <Route index element={<BoardList />} ></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
