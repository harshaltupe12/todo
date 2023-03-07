import './App.css';
import Navbar from './Mycomponents/Navbar';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';
function App() {
  let todos = [
    {
    sno: 1,
    title: "Goto Market",
    desc: "from market you have to Purchase some Vegitables for tomarrows dinners."
    },
    {
      sno: 1,
      title: "Goto Mall",
      desc: "from Mall you have to Purchase some Vegitables for tomarrows dinners."
    },

    {
      sno: 1,
      title: "Goto Street",
      desc: "from street you have to Purchase some Vegitables for tomarrows dinners."
    },


]
  return (
    <div>
      <Navbar title = "My-Todo"/>
      <Todos todos = {todos}/>
      <Footer/>
    </div>
  );
}

export default App;
