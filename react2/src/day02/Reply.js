import React from "react";

// 리액트에서 css 사용하는 방법
// 리액트 파일이 자바스크립트 이므로 기존 CSS 문법을 그대로 사용할 수 없음
// 자바 스크립트 변수를 선언하고 object 타입으로 css 속성을 입력하여 사용함
// css 속성명을 카멜 명령법으로 수정하여 입력하면 됨
// 기존 css 문법을 그대로 사용하고자 할 경우 css 파일을 import 해야 함
const styles ={
    wrapper:{
        margin: 8,
        padding: 8,
        display: 'flex',
        flexDirection : 'row',
        border: '1px solid gray',
        borderRadius: 16,
    },
    imageContainer: {},
    image : {
        width: 50,
        heigth:50,
        borderRadius: 25,
    },
    contentContainer:{
        marginLeft: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameText:{
        color: 'balck',
        fontSize: 16,
        fontWeight: 'bold',
    },
    replyText:{
        color: 'black',
        fontSize: 16,
    },
}
function Reply(prose){
    return(
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F53%2F53125.png&type=sc960_832'} style={styles.image} />
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{prose.name}</span>
                <span style={styles.replyText}>{prose.content}</span>
            </div>
        </div>
    )
}

export default Reply;