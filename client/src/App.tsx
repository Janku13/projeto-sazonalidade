import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sazonalidade from "./pages/sazonalidade/Sazonalidade";
import sazonalidadeApi from "./services/api/sazonalidadeApi";
function App() {
  const error = useSelector((state) => state);
  console.log(error)
    useEffect(() => {
      const fetchSazonalidades = async () => {
        const data = await sazonalidadeApi.fetchSazonalidades()
        console.log(data)
    };

    fetchSazonalidades();
  }, []);
  return (
    <div className="App">
      <Sazonalidade/>
    </div>
  );
}

export default App;
