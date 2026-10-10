import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// About Pages
import About from "./pages/About/About";
import Introduction from "./pages/About/Introduction";
import Jurisdiction from "./pages/About/Jurisdiction";

// e-Filing
import Efiling from "./pages/Efiling/Efiling";

// Complaint Pages
import LodgeComplaint from "./pages/LodgeComplaint";
import CaseStatus from "./pages/CaseStatus";
import ComplaintFormat from "./pages/ComplaintFormat";
import Instruction from "./pages/Instruction";

import "./App.css";


function App() {
    return (
        <div>

            <Routes>

                {/* =================================
                    HOME
                ================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =================================
                    ABOUT US
                ================================= */}

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/about/introduction"
                    element={<Introduction />}
                />

                <Route
                    path="/about/jurisdiction"
                    element={<Jurisdiction />}
                />


                {/* =================================
                    E-FILING
                ================================= */}

                <Route
                    path="/efiling"
                    element={<Efiling />}
                />


                {/* =================================
                    COMPLAINT CENTER
                ================================= */}

                <Route
                    path="/complaint/lodge"
                    element={<LodgeComplaint />}
                />

                <Route
                    path="/complaint/status"
                    element={<CaseStatus />}
                />

                <Route
                    path="/complaint/format"
                    element={<ComplaintFormat />}
                />

                <Route
                    path="/complaint/instruction"
                    element={<Instruction />}
                />


            </Routes>

        </div>
    );
}

export default App;