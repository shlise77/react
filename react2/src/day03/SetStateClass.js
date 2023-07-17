import React from "react";

// 클래스 컴포넌트 사용
    // 자바스크립트 ES6버전에서 사용할 수 있는 클래스
class SetStateClass extends React.Component {

    //constructor : 자바스크립트 클래스의 생성자,
    //              자바와 달리 자바스크립트의 생성자 이름은 지정되어 있음
    constructor(props) {
        super(props); // 자바의 SUPER와 동일한 의미

        // 자바스크립트의 생성자 안에 this.변수명을 사용 시 클래스 맴버 변수로 동작함
        // SetStateClass의 멤버 변수로 state를 선언, 데이터 티입은 object 타입임
        // 클래스 컴포넌트를 사용하는 리액트 컴포넌트의 state 임
        this.state ={
            StateString: 'click',
        }
    }

    StateChange = (flag) => {
        if (flag == 'direct'){
            // 클래스 멤버 변수인 state인 요소인 StateString의 값을 직접 대입하여 수정
            // 일반적인 프로그래밍 방식으로 변수의 데이터를 수정하고 그대로 출력
            // 리액트는 Virtual DOM을 사용하기 때문에 state의 내용을 직접 수정하면 수정된 내용이 VirtualDOM에만
            // 적용되고 실제 DOM에는 적용되지 않음
            console.log(`원본 내용 : ${this.state.StateString}`);
            this.state.StateString = '직접 수정하여 클릭';
            console.log(`수정 내용 : ${this.state.StateString}`);
        }

        if(flag == 'setstate'){
            // 클래스 멤버 변수인 state 의 요소인 StateString 의 값을 setState() 함수를 사용하여 수정
            // setState()를 사용하여 내용을 수정 시 Virtual DOM에 적용된 내용을 DOM에 적용함
            console.log(`원본 내용 : ${this.state.StateString}`)
            this.setState({StateString: 'setState로 수정하여 클릭'})
            console.log(`수정 내용 : ${this.state.StateString}`)
        }

    }

    render(){
        return(
            <div>
                {/* jsx 문법에서 문자열만 {}(중괄호) 없이 사용 가능, {}(중괄호) 사용 시 자바스크립트 코드임 */}
                {/* jsx 문법에서 css 속성 사용 시 '-' 기호를 생략하고 카멜명명법 사용 */}
                {/* jsx 문법에서 클릭 이벤트가 onClick -> onClick로 변경 */}
                {/* 리액트는 화살표 함수를 많이 쓴다. */}
                <button style={{marginRight: '20px'}} onClick={(e) => {
                    this.StateChange('direct',e)
                }}>state 직접 수정</button>
                <button onClick={(e) => {
                    this.StateChange('setstate',e)
                }}>setSate로변경</button>

                <br />

                [state 변경하기] StateString: {this.state.StateString}
            </div>
            )

    }

}

export default SetStateClass;