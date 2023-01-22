import {BrowserRouter, Routes,Route} from "react-router-dom";
import HojaVida from "../Pages/HojaVida";
import NotFound from "../Pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Jesus-137/HojaVida.git/Jesus-137" element={<HojaVida/>} />
                <Route path="/HojaVida/" element={<HojaVida/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;