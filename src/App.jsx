// Imports
import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";

// Components
import NotFound from "./components/NotFound";
import PageLoader from "./components/PageLoader";
import Game from "./components/Game";

// Styles
import Web3ContextProvider from "./context/Web3Context";
const Lobby = lazy(() => import("./components/Lobby"));

const App = () => {
	return (
		<Web3ContextProvider>
			<Routes>
				<Route path="/">
					<Route
						exact
						path=""
						element={
							<Suspense fallback={<PageLoader />}>
								<Lobby />
							</Suspense>
						}
					/>

					<Route path="/game" element={<Game />} />
					<Route exact path="404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Route>
			</Routes>
		</Web3ContextProvider>
	);
};

export default App;
