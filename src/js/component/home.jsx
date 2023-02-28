import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
		const [selectedColor, setSelectedColor] = useState("red");

		return (
			<div className="traffic-Light bg-black p-1 m-auto d-inline-block  ">

<div role= "button" onClick={() => setSelectedColor("red")} className={"m-2 light bg-danger " + (selectedColor === "red" ? "glow" : "")}></div>

<div role= "button" onClick={() => setSelectedColor("yellow")} className={"m-2 light bg-warning " + (selectedColor === "yellow" ? "glow" : "")}></div>

<div role= "button" onClick={() => setSelectedColor("green")} className={"m-2 light bg-success " + (selectedColor === "green" ? "glow" : "")}></div>




			</div>

	
	);
};

export default Home;
