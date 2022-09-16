import Sazonalidade from "./pages/sazonalidade/Sazonalidade";
import { Routes, Route } from 'react-router-dom';
import AddSazonalidade from "./pages/add-sazonalidade/AddSazonalidade";

function App() {
//  <Sazonalidade/>
  return (
    <Routes>
      <Route path='/' element={<Sazonalidade />}/>
      <Route path='/add-sazonalidade' element={<AddSazonalidade />}/>
    </Routes>
  );
}

export default App;
