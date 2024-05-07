import { Routes, Route } from "react-router-dom";
import Authentication from "./views/Auth";

function App() {
	return (
		<Routes>
			<Route path="/auth" element={<Authentication />} />
		</Routes>
	);
}

export default App;
