import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TexrForm from "./components/TexrForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#353535";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="YellClocks"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        <Route path="me" element={<TexrForm heading="Enter the text to analyze below" showAlert={showAlert}  mode={mode} />} />
        <Route path="about/*" element={<About />} />
        </Routes>
      </div>
      </Router>  
    </>
  );
}

export default App;
