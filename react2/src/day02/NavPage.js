import React from "react";

function NavPage(){
    return(
        <nav className={'navbar navbar-expand-sm bg-dark navbar-dark'}>
            <div className={'container-fluid'}>
                <ul className={'navbar-nav'}>
                    <li className={'nav-item'}>
                        <a href="#" className={'nav-link active'}>Active</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href="#" className={'nav-link'}>Link</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href="#" className={'nav-link'}>Link</a>
                    </li>
                    <li className={'nav-item'}>
                        <a href="#" className={'nav-link disabled'}>Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavPage;