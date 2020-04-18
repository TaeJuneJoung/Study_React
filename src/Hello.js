import React from 'react'; //리액트를 불러와서 사용
import './App.css';

/**
 * 1. 함수 형태로 컴포넌트 생성
 * 2. 클래스 형태로 컴포넌트 생성
 */

 // 함수 형태로 컴포넌트 생성

function Hello({color, name, isSpecial}) { //props를 비구조할당
	// const h_name = '리액트'; //위 파라미터와 이름이 달라야함
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: 24,
		padding: '1rem'
	}
	return (
		<>{/* 플래그먼트 */}
			<div style={style}>
				{isSpecial ? <b>*</b> : null}
				{/*
					false일 때 값을 넣을 필요 없는
					이러한 경우에는 삼항 연산자보다,
					&& 연산자가 더 보기 편하다
					-> isSpecial && <b>*</b>
				*/}
				{name}
			</div> {/*<div></div> JSX */}
			{/*JSX에서는 style 태그가 먹히지 않는다.
			 대신에 객체를 만들어야한다. */}

			<div className='gray-box'
			 //안에서는 이렇게 주석을 사용
				>CSS SRC</div>
			{/* 클래스라고만 적어도 작동은 하나, 경고를 띄운다. */}
			<div style={{color}}>객체를 감싸는 중괄호</div>
		</>
		// 2개 이상의 태그는 감싸주어야 한다.
	) 
}

Hello.defaultProps = { //없을 시에 기본적으로 넣어주는 처리
	name: '이름없음'
}


export default Hello; //해당 컴포넌트를 내보냄