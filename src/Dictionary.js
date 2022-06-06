import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function submitKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section id="Dictionary">
        <form onSubmit={search}>
          <h1>Dictionary</h1>
          <br />
          <input
            type="search"
            onChange={submitKeyword}
            placeholder="What word would you like to look up?"
          />
          <br />
          <button type="submit">Search</button>
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
