import { useState } from 'react'

const Counter = ({initial=1}) => {
const [cont,setCont] = useState(initial)


  return (
    <>
        <h1>Counter</h1>

        <div style={{display: 'flex', gap:'30px', justifyContent:'center'}}>
            <button onClick={() => setCont(cont-1)}>-</button>
            <h2>{cont}</h2>
            <button onClick={() => setCont(cont+1)}>+</button>
        </div>
    </>
  )
}

export default Counter