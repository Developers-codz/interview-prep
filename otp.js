import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const OTP_LENGTH = 6;
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const otpChangeHandler = (e, index) => {
    let tempOtp = [...otp];
    tempOtp[index] = e.target.value;
    setOtp(tempOtp);
    if (index !== OTP_LENGTH - 1) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key !== "Backspace") return;
    const newOtp = [...otp];

    if (newOtp[index] !== "") {
      newOtp[index] = "";
      setOtp(newOtp);
      return;
    }
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const dataFromPaste = e.clipboardData.getData("text");
    console.log(dataFromPaste);
    console.log(dataFromPaste);
    const newOtp = new Array(OTP_LENGTH).fill("");

    dataFromPaste
      .slice(0, OTP_LENGTH) // Ignore extra digits
      .split("")
      .forEach((digit, index) => {
        newOtp[index] = digit;
      });

    setOtp(newOtp);
    const focusIndex = Math.min(.length, OTP_LENGTH) - 1;
    inputRefs.current[focusIndex]?.focus();
  };
  return (
    <div className="App">
      <div className="otp-wrapper">
        {otp.map((item, i) => {
          return (
            <input
              value={item}
              key={i}
              type="text"
              maxLength={1}
              onChange={(e) => otpChangeHandler(e, i)}
              inputMode="numeric"
              ref={(el) => (inputRefs.current[i] = el)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onPaste={(e) => handlePaste(e)}
            />
          );
        })}
      </div>
    </div>
  );
}


