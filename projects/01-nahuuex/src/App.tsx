import './App.css';

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-2 font-bold rounded">
      boton
    </button>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-3">
      <div >01</div>
      <div >02</div>
      <div >03</div>
    </div>
    <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
      <div >01</div>
      <div >02</div>
      <div >03</div>
      <div >04</div>
    </div>
    </>
  );
}

export default App;
