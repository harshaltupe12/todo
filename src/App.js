import './App.css';
import Navbar from './Mycomponents/Navbar';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
function App() {
  let todo = [{
    sn: 1,
    title: "Goto Market",
    description: "from market you have to Purchase some Vegitables for tomarrows dinners."
  }]
  return (
    <div>
      <Navbar title = "My-Todo"/>
      <Todos/>
      <Footer/>
    </div>
  );
}

export default App;
