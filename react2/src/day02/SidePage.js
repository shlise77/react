import React from "react";


function SidePage(props){
    return(
        <div>
                <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className={'border-5'}>
                <img src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDJfMTg4%2FMDAxNjg4MjQ3ODc5MzQ4.5vLnbI-uNIDel99HVa60-pEI8JeyfKo9goVOV9tX-PEg.VJFv1rANtEf1nto6EEzuM_1QaTeMualsKPCK5YH9oMIg.JPEG.yosiki1928%2FInternet%25A3%25DF20230702%25A3%25DF064312%25A3%25DF7.jpeg&type=sc960_832'}  className={'p-3 w-50 h-50'} />
            </div>
            <p>Some text about me in culpa qui officaia deserunt mollit anim..</p>
            <h3 className={'mt-4'}></h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <ul className={'nav nav-pills flex-column'}>
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
    )
}

export default SidePage;
