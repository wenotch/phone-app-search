import axios from "axios";
import React, { useEffect, useState } from "react";
import { iphoneUrl } from "./components/endpoint";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  //Empty phones arrays initially
  const [iphone, setIphone] = useState([]);
  const [grade, setgrade] = useState("");
  // useEffect runs to fetch all iphones
  useEffect(() => {
    axios
      .get(iphoneUrl)
      .then((response) => {
        const data = response.data.data.data;

        const iphones = data.filter((each) => {
          return each.brand == "Apple";
        });
        setIphone(iphones);
        console.log(iphones[0].lowestAsk.grade);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Main data={iphone} />
    </>
  );
}

export default App;
