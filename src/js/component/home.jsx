import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";

//create your first component
const Home = ({ numero }) => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<div className="d-flex justify-content-center " >
				<div className="card mb-3 bg-dark m-1" style={{ width: "6rem" }}>
					<i className="far fa-clock text-white text-center m-2"></i>
				</div>
				<Card digito={Math.floor(numero / 10000 % 10)} />
				<Card digito={Math.floor(numero / 1000 % 10)} />
				<Card digito={Math.floor(numero / 100 % 10)} />
				<Card digito={Math.floor(numero / 10 % 10)} />
				<Card digito={numero % 10} />
			</div>
		</div>
	);
};

export default Home;
