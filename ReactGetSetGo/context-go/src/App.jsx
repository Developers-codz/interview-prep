import { useState } from 'react'
import './App.css'
import { useTheme } from './context/theme-context'
import { ProductList } from './component/productList'

function App() {
  const { theme, setTheme} = useTheme();
  const handleInputClick = (e) => {
    const value = e.target.checked;
    const theme = value === true ? "dark" : "light"
    setTheme(theme)
  }
  return (
    <div className={theme === "dark" ? "dark": "light"}>
      <label>Toggle</label>
      <input type="checkbox" class="toggle" onClick={handleInputClick}/>
      <h1>Hii There Context here</h1>
      <ProductList />
    </div>
  )
}

export default App
