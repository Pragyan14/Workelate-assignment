import { useState } from 'react'
import { Rating } from '@mantine/core';


function App() {

  return (
    <>
      <h1 className={"text-xl border-4 border-red-300"}>WORKING</h1>
      <Rating defaultValue={2} />
    </>
  )
}

export default App
