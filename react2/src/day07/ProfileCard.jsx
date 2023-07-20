import React from 'react';
import Card from "./Card";

function ProfileCard(props) {

    return (
        // 부모 컴포넌트인 profilecard에서 자식 컴포넌트인 Card를 호출
        // 자식 컴포넌트에 title, backgroundColor 속성에 데이터를 전달
        // 컴포넌트 합성 기업 중 포함 방식을 통해서 자식 컴포넌트에 html 태그를 전달
        <div>

        <Card title={'안유진'} backgroundColor={'#1E90FF'}>
          <p>안녕하세요</p>
          <p>리액트 처음 입니다.</p>
        </Card>

        <Card title={'안유진'} backgroundColor={'DeepPink'}>
            <p>안녕하세요</p>
                <p>리액트 처음 입니다.</p>
            </Card>
            <Card title={'안유진'}>
                <p>안녕하세요</p>
                <p>리액트 처음 입니다.</p>
            </Card>
            <Card backgroundColor={'DeepPink'}>
                <p>안녕하세요</p>
                <p>리액트 처음 입니다.</p>
            </Card>
        </div>
    )
}

export default ProfileCard;