import React from "react";

//include images into your bundle
import ListaTareas from "./ListaTareas";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ListaTareas/>
		</div>
	);
};

export default Home;