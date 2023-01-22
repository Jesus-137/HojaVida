import {BrowserRouter, Routes,Route} from "react-router-dom";
import HojaVida from "../Pages/HojaVida";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HojaVida/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;