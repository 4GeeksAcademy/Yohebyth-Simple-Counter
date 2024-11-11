import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondscounter.jsx";


//create your first component
const Home = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setCount(value => value + 1)
		}, 1000)
	},[count])

	return (
		<div className="text-center">
			<div className="container text-center bg-dark">
				<div className="row row-cols-lg-7 g-2 g-lg-3">
					<SecondsCounter time={<span className="fa fa-clock"></span>} />
					<SecondsCounter time={Math.floor(count / 100000) % 10} />
					<SecondsCounter time={Math.floor(count / 10000) % 10} />
					<SecondsCounter time={Math.floor(count / 1000) % 10} />
					<SecondsCounter time={Math.floor(count / 100) % 10} />
					<SecondsCounter time={Math.floor(count / 10) % 10} />
					<SecondsCounter time={Math.floor(count % 10)} />
				</div>
			</div>
			
		</div>
	);
};

export default Home;
