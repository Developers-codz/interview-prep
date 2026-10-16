import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const initData = [
    {
      app: "Instagram",
      otp: ""

    },
    {
      app: "Twitter",
      otp: ""
    },
    {
      app: "Facebook",
      otp: ""
    }
  ]

  const [data, setData] = useState(initData);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    generateOtp();
  }, []);

  const generateOtp = () => {
    const tempData = [...data];
    tempData.forEach(el => {
      el.otp = Math.floor(100000 + Math.random() * 900000);
    })
    setData(tempData);
    startTimer();
  }

  const startTimer = () => {
    // Clear any existing interval first
    if (window.timerInterval) {
      clearInterval(window.timerInterval);
    }
    
    window.timerInterval = setInterval(() => {
      setTimer(prevInterval => {
        if(prevInterval <= 1) {
          clearInterval(window.timerInterval);
          generateOtp();
          return 10;
        }
        return prevInterval - 1;
      });
    }, 1000);
  }

  const string = "<div><h1>Hello</h1><p>World</p><b>Bold</b></div>"
  const stringToHtml = () => {
    return <div dangerouslySetInnerHTML={{__html: string}} />
  }


  return (
    <>
     <div className='header'>Authentication App</div>
     <div>
      {data.map(el => {
        return (
          <div className='app-container'>
            <div>
            <div>{el.app}</div>
            <div className='otp-container'>{el.otp}</div>
             
            </div>
            <div>{timer}</div>
              {stringToHtml()}
          </div>
        )
      })}
     </div>
    </>
  )
}

export default App
