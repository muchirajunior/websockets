import Navbar from "./components/Navbar";
import Home from "./components/home";
import Client from "./components/client";


function App() {
  let route=window.location.pathname.replace('/','');
  console.log(route);
  return (
   
    <div className="">
     <Navbar />

     {route ==='' ?  <Home /> : <Client />}
    </div>
  );
}

export default App;
