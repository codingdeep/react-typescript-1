import React from 'react'

export default function App() {
  const _sum=(a:number,b: number): number=>{
    return a+b;
  }
  return (
    <div>
      {_sum(10,20)}
    </div>
  )
}
