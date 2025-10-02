import useFetch from "./hooks/useFetch";

import "./App.css";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const getData = () => {
    return data.map((item: any, index: number) => (
      <li key={index}>
        <div>{item.title}</div>
        <div>{item.body}</div>
      </li>
    ));
  };

  return (
    <>
      {loading ? (
        <div id="loading">Loading...</div>
      ) : data ? (
        <ol>{getData()}</ol>
      ) : (
        <div id="error">{error?.message}</div>
      )}
    </>
  );
}
