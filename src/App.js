import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello 
        //이곳에서는 이런식으로 주석을 사용
        name="react"
        color="blue"
        isSpecial={true} //true값을 주지 않고 변수만 주어도 default -> true
        />
        <Hello />
        <Hello />
       </Wrapper>
    </div>
  );
}

export default App;
