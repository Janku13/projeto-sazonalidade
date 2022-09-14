import { useEffect } from "react";
import Sazonalidade from "./pages/sazonalidade/Sazonalidade";
import sazonalidadeApi from "./services/api/sazonalidadeApi";
function App() {
    useEffect(() => {
      const fetchUsers = async () => {
          const data = await sazonalidadeApi.fetchSazonalidades()
          console.log(data)
      
    };

    fetchUsers();
  }, []);
  return (
    <div className="App">
      <Sazonalidade/>
    </div>
  );
}

export default App;
