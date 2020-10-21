import React, { useEffect } from "react";
import Airtable from "airtable";

function App() {
  const base = new Airtable({ apiKey: "" }).base("");

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        fetchNextPage();
      });
  }, []);

  return <>Air table base key</>;
}

export default App;
