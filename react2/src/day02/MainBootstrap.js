import React from "react";

function MainBootstrap(prose){
    return(
        <div className={'col-sm-8'}>
            <p>TITLE HEADING</p>
            <h3>Title description, Dec 7, 2020</h3>
            <div className={'border-5'}>
                <img src={'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MDJfMTg4%2FMDAxNjg4MjQ3ODc5MzQ4.5vLnbI-uNIDel99HVa60-pEI8JeyfKo9goVOV9tX-PEg.VJFv1rANtEf1nto6EEzuM_1QaTeMualsKPCK5YH9oMIg.JPEG.yosiki1928%2FInternet%25A3%25DF20230702%25A3%25DF064312%25A3%25DF7.jpeg&type=sc960_832'}  className={'p-3 w-50 h-50'} />
            </div>
            <p>Some text...</p>

            <p className={'mt-3'}>Sunt in culpa qui officia deserunt mollit anim id est
                laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco.
            </p>
        </div>
    )
}

export default MainBootstrap;