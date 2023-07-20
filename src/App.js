import Navbar from "./components/Navbar";
import TexrForm from "./components/TexrForm";

function App() {
  return (
    <>
      <Navbar title="YellClocks" about="About"/>
      <div className="container my-3">
        <TexrForm heading = "Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
