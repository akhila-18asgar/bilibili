import Sidebar from "./components/Sidebar.jsx";
import Subscriptions from "./components/Subscriptions.jsx";
import Title from "./components/Title.jsx";
import Search from "./components/search.jsx";
import image from "./assets/logo.png";
import eye from "./assets/eye.jpeg";
import cam from "./assets/cam.jpeg";

function App(){
  return(
    <div>
      <Title />
    <div className="main">
      <div>
      <Search />
      </div>
      <div className="home">
      <Subscriptions image={image} title="MrBeast" />
      <Subscriptions image={eye} title="Eye" />
      <Subscriptions image={cam} title="MrBeast" />
      <Subscriptions image={image} title="MrBeast" />
      </div>
      </div>
            <Sidebar /> 
    </div>
  );
}
export default App