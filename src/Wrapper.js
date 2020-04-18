import React from 'react';

function Wrapper({ children }) { //Props의 children에 값을 받아 넣어주어야함
	const style = {
		border: '2px solid black',
		padding: 16
	};

	return <div style={style}>{children}</div>
}

export default Wrapper;