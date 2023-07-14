import React from "react";
import Reply from "./Reply";
import reply from "./Reply";

const replys = [
{name: '안유진', content:'첫번째 댓글 입니다.'},
{name: '고윤하', content:'두번째 댓글 입니다.'},
{name: '유재석', content:'세번째 댓글 입니다.'}
]

function ReplyList(props){
    return(
        <div>
            {
                replys.map((reply) => {
                    return(
                        <Reply name={reply.name} content={reply.content} />
                    );
                })
            }
            {/*<Reply name={replys[0].name} content={replys[0].content} />*/}
            {/*<Reply name={'고윤하'} content={'두번째 댓글'} />*/}
            {/*<Reply name={'장원영'} content={'세번째 댓글'} />*/}
        </div>
    )
}

export default ReplyList;