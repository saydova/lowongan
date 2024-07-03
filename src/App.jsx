import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Nav from './nav/nav';
import Home from './page/home';
import Job from './page/job';

function App() {
  return (
    <>



<BrowserRouter>
<Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/job' element={<Job/>}/>


</Routes>
</BrowserRouter>
</>
  );
}

export default App;
