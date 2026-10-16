import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    setData((prev) => [...prev, ...data]);
    console.log("data", data);
  };

  const handleInfiniteScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div className="App">
      <h1>Infinite Scroll</h1>
      <div className="card-wrapper">
        {data.map((el, i) => {
          return (
            <div className="card">
              <h4>{el.title.slice(0, 30)}</h4>
              <div>{el.body.slice(0, 100)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
