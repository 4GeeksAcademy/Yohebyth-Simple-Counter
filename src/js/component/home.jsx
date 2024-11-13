import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondscounter.jsx";


//create your first component
const Home = () => {
	const [count, setCount] = useState(0)
	const [run, setRun] = useState(true)

	useEffect(() => {
		if(run){
			setTimeout(() => {
				setCount(value => value + 1)
			}, 1000)
		}
	},[count, run])

	return (
		<div className="text-center">
			<div className="container text-center bg-dark">
				<div className="row row-cols-1 g-2 g-sm-3">
					<SecondsCounter time={<span className="fa-regular fa-clock"></span>} />
				</div>				
				<div className="row row-cols-1 row-cols-sm-6 g-2 g-sm-3">					
					<SecondsCounter time={Math.floor(count / 100000) % 10} />
					<SecondsCounter time={Math.floor(count / 10000) % 10} />
					<SecondsCounter time={Math.floor(count / 1000) % 10} />
					<SecondsCounter time={Math.floor(count / 100) % 10} />
					<SecondsCounter time={Math.floor(count / 10) % 10} />
					<SecondsCounter time={Math.floor(count % 10)} />
				</div>
			</div>	
			<button type="button" 
				className="btn btn-dark"
				onClick={ () => setRun(false)}
			>
				<i className="fa-solid fa-pause"></i>								
			</button>		
			<button type="button" 
				className="btn btn-dark"
				onClick={ () => setRun(true)}
			>
				<i className="fa-solid fa-play"></i>
			</button>
			<button type="button" 
				className="btn btn-dark"
				onClick={ () =>{
					setCount(0) 
					setRun(true)
				}}
			>
				<i className="fa-solid fa-rotate"></i>
			</button>
		</div>
	);
};

export default Home;
