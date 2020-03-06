
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [pic, setPic] = useState([]);
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=pVzYAArvN8c8Fez9O5lg6h3ciz0pSOuEMCPKSNav").then(response => {
          setPic(response.data);
      });
  }, []);
  console.log(pic);
  return <div></div>

};


  
export default App;
