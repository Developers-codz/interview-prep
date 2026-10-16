import useDebounce from './customHooks/debounce';
import './App.css'

function App() {

  const debouncedSearch = useDebounce((value) => {
    console.log("Searching for:", value);
  }, 2000);

  return (
    <>
     <div>Custom Hooks</div>
    <input onChange={(e) => debouncedSearch(e.target.value)} />
    </>
  )
}

export default App
