// import React from "react";
// import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun 🚀!
//       </p>
//     </div>
//   );
// }

// export default App;

function App() {
  const [pic, setPic] = useState([]);
  useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=pVzYAArvN8c8Fez9O5lg6h3ciz0pSOuEMCPKSNav").then(response => {
          setPic(response.data);
      });
  }, []);
}
  console.log(pic);

  export default App;
