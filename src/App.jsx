import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const status = {
  "PAUSED" : 0,
  "RUNNING": 1,
  "RESET": 2
}
function App() {
  const [count, setCount] = useState(0)
  const [sec, setSec] = useState(0)
  const [timerStatus, setTimerStatus] = useState(status.RUNNING)
  let [timer, setTimer] = useState(null)
  useEffect(() => {
    console.log('effect')
    if(timerStatus === status.RUNNING) {
      setTimer(setInterval(() => {
        setSec(prevSec => {
          if(prevSec === 59) {
            return 0
          } else {
            return prevSec + 1
          }
        })
      }, 1000))
    } else if(timerStatus === status.RESET) {
      setSec(0)
      if(timer) {
        clearInterval(timer)
      }
    } else {
      if(timer) {
        clearInterval(timer)
      }
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [timerStatus])
  // const onStart = 
  return (
    <div className='timer-container'>
      <div className='timer-digits'>{sec}</div>
      <div className='timer-btn_grp'>
        <button>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default App
