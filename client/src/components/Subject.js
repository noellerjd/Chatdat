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

  // var results = [];
  // for (let i = 0; i < searchResult.data.children.length; i++) {
  //   results += searchResult.data.children[i].data.title;
  // }
  console.log(searchResult);

  return (
    <div style={{ border: "1px solid purple", width: "100%" }}>
      This will be for the subject area where search is perform and rendered
      {searchResult.slice(0, 15).map((result) => (
        <p>{result.data.title}</p>
      ))}
    </div>
  );
}
