import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        버튼을 {count}번 누르셨습니다
      </div>
      <button onClick={() => setCount(count+1)}>버튼</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  )
}


export default Count;
