// Imports
import { Routes, Route, Navigate } from "react-router";
import { lazy, Suspense } from "react";

// Components
import NotFound from "./components/NotFound";
import PageLoader from "./components/PageLoader";

// Styles
import "./styles/App.scss";

const Home = lazy(() => import("./components/Home"));

const App = () => {
    return (
        <Web3ContextProvider>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route
                            exact
                            path=''
                            element={
                                <Suspense fallback={<PageLoader />}>
                                    <Home />
                                </Suspense>
                            }
                        />

                        <Route exact path='404' element={<NotFound />} />
                        <Route path='*' element={<Navigate to='/404' />} />
                    </Route>
                </Routes>
            </main>

            <footer>
                <div>Shatranj - BUIDLT with Respect</div>
            </footer>
        </Web3ContextProvider>
    );
};

export default App;
