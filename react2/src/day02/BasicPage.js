import React from "react";
import MainBootstrap from "./MainBootstrap";
import SidePage from "./SidePage";
import ReactHeader from "./ReactHeader";
import NavPage from "./NavPage";

function BasicPage(props){
    return(

        <div className={'container mt-5'}>
            <div className={'row'}>
                <div className={'col-sm-4'}>
                    <SidePage />
                </div>
                <div className={'col-sm-8'}>
                    <MainBootstrap />
                    <MainBootstrap />
                </div>
            </div>
        </div>
    )
}

export default BasicPage;