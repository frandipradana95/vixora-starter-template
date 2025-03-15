import { createElement, useState } from "vixora";
import "./style.css";

/**
 * Every time you use JSX syntax
 * you have to call the createElement function, that's mandatory!
 *
 */

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="app">
			<h1>Welcome from Vixore smaller framewor</h1>
			<p>Conunt = {count}</p>
			<button onClick={() => setCount(count + 1)}>Increnment</button>
		</div>
	);
};

export default App;
