import Navbar from './component/Navbar';
import Input from './component/Input';
import Result from './component/Result';
import Table from './component/table';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Input />
      <Result />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
