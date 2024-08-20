
import './App.css';
import Navbar from './component/navbar';
function App() {
  const product =[
    {
    price:1000,
    quantity:0,
    },
    {
      price:2000,
      quantity:1,
      }
  ]
  return (
    <>
        <p>hello app</p>
        <Navbar product={product}/>
    </>
  );
}

export default App;
