import React from 'react'
import Movie from './components/Movie'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <>
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Movie setProgress={setProgress}></Movie>
    </>
  )
}

export default App
