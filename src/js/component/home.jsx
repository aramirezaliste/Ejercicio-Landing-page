import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const hongos = [
  {
    nombre: "Maitake",
    img: "https://www.casapia.com/blog/wp-content/uploads/2009/07/maitake-1.jpg",
    cientifico: "Grifola frondosa",
  },
  {
    nombre: "Shiitake",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shiitakegrowing.jpg/220px-Shiitakegrowing.jpg",
    cientifico: "Lentinula edodes",
  },
  {
    nombre: "Turkey Tail",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Trametes_versicolor_G4_%281%29.JPG/220px-Trametes_versicolor_G4_%281%29.JPG",
    cientifico: "Trametes versicolor",
  },
  {
    nombre: "Lion's mane",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Igelstachelbart_Nov_06.jpg/220px-Igelstachelbart_Nov_06.jpg",
    cientifico: "Hericium erinaceus",
  }
];

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <div className="row hstack gap-3 d-flex justify-content-center">
          {hongos.map(function(elem,index){
			return <Card nombre = {elem.nombre} img = {elem.img} cientifico = {elem.cientifico} />
		  })}
        </div>
      </div>
    </div>
  );
};

export default Home;
