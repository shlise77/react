import React from 'react';

function BoardList(props) {

    return (
        <div className={'container'}>
            <div className={'row mx-auto'}>
                <div className={'col-sm-8'}>
                    <table className={'table table-striped'}>
                        <thead>
                        <th>
                            <td>글번호</td>
                            <td>제목</td>
                            <td>글쓴이</td>
                            <td>날짜</td>
                        </th>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default BoardList;