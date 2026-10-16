import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(() => {
      fetchSuggestions(query, controller);
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);
  const fetchSuggestions = async (query, controller) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products/search?q=${query}`,
        {
          signal: controller.signal,
        }
      );

      const data = await res.json();
      console.log(data);
      setSuggestions(data.products);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="App">
      <input value={query} onChange={handleOnChange} placeholder="Search..." />
    </div>
  );
}
