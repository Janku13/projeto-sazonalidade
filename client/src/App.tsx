import { useEffect } from "react";
import { useDispatch  } from "react-redux";
import Sazonalidade from "./pages/sazonalidade/Sazonalidade";
import { fetchSazonalidadeRequest } from "./store/sazonalidade/sazonalidade-action";

function App() {
  const dispatch = useDispatch<any>(); //need to fix this type

  useEffect(() => {
    dispatch(fetchSazonalidadeRequest())  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Sazonalidade/>
    </div>
  );
}

export default App;
