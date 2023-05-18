import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const fetchimgs = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=33S-w7ZyQKIKrQ7DPPKP2UrbLyC40hUaz4oriIrh_K4&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  };
  return (
    <div className="contaner ">
      <div
        className="heder bg-info d-flex align-items-center justify-content-center "
        style={{ height: "70px" }}
      >
        <input
          className="m-end-5 p-2 rounded"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ width: "40%" }}
          placeholder={"Search. . . (:"}
        />
        <button onClick={fetchimgs} className="m-5 p-2 border rounded  ">
          send
        </button>
      </div>
      <div className="box ">
        {result &&
          result.map((item) => (
            <img
              className=" img p-5   border border-1  m-2 bg-light"
              key={item.id}
              src={item.urls.regular}
              alt=""
            />
          ))}
      </div>
    </div>
  );
}

export default App;
