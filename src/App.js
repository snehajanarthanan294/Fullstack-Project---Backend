import { Link, Routes, Route } from 'react-router-dom';
import Appbar from './Components/Appbar';
import Get from './Components/Get';

import SignUp from './Components/Input';
import Update from './Components/Update';
import Input from './Components/Input';

function App() {
  return (
    <>
      {/* <Appbar/> */}
      <Routes>
        <Route path="/" element={<Input/>}/>
        <Route path="/addpatient" element={<Input/>}/>
        <Route path="/get" element={<Get/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
        
    </>
  )
}
export default App