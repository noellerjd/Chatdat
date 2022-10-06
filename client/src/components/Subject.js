import React, { useState, useEffect } from "react";

export default function Subject() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const url = "https://www.reddit.com/r/learnjavascript/hot.json";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setSearchResult(data.data.children);
        // console.log(data.data.children);
      } catch (err) {
        console.error(err);
      }
    };
    search();
  }, []);

  console.log(searchResult);

  return (
    <div style={{ border: "1px solid purple", width: "100%" }}>
      {searchResult.slice(0, 8).map((result) => (
        <div style={{ border: "1px solid purple" }}>
          <a href={result.data.url} target="_blank">
            <p>{result.data.title}</p>
          </a>
          <button style={{ border: "1px solid purple" }}>SkipDat</button>
          <button style={{ border: "1px solid purple" }}>ChatDat</button>
        </div>
      ))}
      <h1>Line</h1>
      {searchResult.slice(5, 10).map((result) => (
        <p>{result.data.title}</p>
      ))}
      <button>Share</button>
    </div>
  );
}
