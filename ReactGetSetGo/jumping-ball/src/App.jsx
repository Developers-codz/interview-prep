// --- Jumping Ball (commented out) ---
// import './App.css'
// import { useState } from "react"
//
// function App() {
//   const [x, setX] = useState(0);
//   const [jumping, setJumping] = useState(false);
//
//   return (
//     <div className='container'>
//       <div id="ball" className={`ball centered-ball ${jumping ? "jump": ""}`} style={{transform:`translateX(${x}px)`}}></div>
//       <div className='line'></div>
//       <div className='btn-wrapper'>
//         <button onClick={() => setX(-150)}>Left</button>
//         <button onClick={() => {
//           setJumping(true);
//           setTimeout(() => {
//             setJumping(false)
//           },1000)
//         }}>Jump</button>
//         <button onClick={() => setX(+150)}>Right</button>
//       </div>
//     </div>
//   )
// }
//
// export default App

import { useState } from "react";
import { MultiStepper } from "./components/MultiStepper";
import "./App.css";

function App() {
  const [form, setForm] = useState({ name: "", email: "", plan: "" });
  const [done, setDone] = useState(false);

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const steps = [
    {
      id: "personal",
      title: "Personal",
      content: (
        <>
          <label>
            Name
            <input
              className="demo-input"
              value={form.name}
              onChange={updateField("name")}
              placeholder="Enter your name"
            />
          </label>
        </>
      ),
      validate: () => form.name.trim() !== "" || "Name is required.",
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <>
          <label>
            Email
            <input
              className="demo-input"
              type="email"
              value={form.email}
              onChange={updateField("email")}
              placeholder="Enter your email"
            />
          </label>
        </>
      ),
      validate: () =>
        form.email.includes("@") || "Enter a valid email address.",
    },
    {
      id: "plan",
      title: "Plan",
      content: (
        <>
          <label>
            Choose a plan
            <select
              className="demo-input"
              value={form.plan}
              onChange={updateField("plan")}
            >
              <option value="">Select...</option>
              <option value="free">Free</option>
              <option value="pro">Pro</option>
              <option value="team">Team</option>
            </select>
          </label>
        </>
      ),
      validate: () => form.plan !== "" || "Please select a plan.",
    },
    {
      id: "review",
      title: "Review",
      content: (
        <ul className="demo-review">
          <li><strong>Name:</strong> {form.name}</li>
          <li><strong>Email:</strong> {form.email}</li>
          <li><strong>Plan:</strong> {form.plan}</li>
        </ul>
      ),
    },
  ];

  if (done) {
    return (
      <div className="app">
        <p className="demo-success">All steps completed! Welcome, {form.name}.</p>
        <button className="demo-reset" onClick={() => setDone(false)}>
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1 className="app-title">Multi-Step Form</h1>
      <MultiStepper
        steps={steps}
        allowStepClick
        onComplete={() => setDone(true)}
      />
    </div>
  );
}

export default App;
