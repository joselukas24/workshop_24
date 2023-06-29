import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  let newList = puppies.map((puppy) => {
    return <p key={puppy.id}>{puppy.name}</p>;
  });
  console.log(newList);

  return <div className="App">{newList}</div>;
}

export default App;
