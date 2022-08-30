import ConfirmBtn from "./Components/ConfirmBtn";
import Context from "./Components/Context/Context";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div class="divider -mt-1"></div>
      <Context />
      <ConfirmBtn />
    </div>
  );
}

export default App;
