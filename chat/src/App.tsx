import { Routes, Route } from "react-router-dom";

import { routes } from "./routes/routes";

const App = () => {
    return (
        <Routes>
            {routes.map(elem => (
                <Route 
                    key={`key_${elem.path}`}
                    element={<elem.component/>}
                    path={elem.path}
                />
            ))}
            <Route path='*' element={<div>Page not found</div>}/>
        </Routes>
    );
};

export default App;