import './App.css';
import { Row } from './Row';
import { rowFieldData } from './RowConfig';
import Banner from "./Banner"
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner />
      {rowFieldData.map(rowData=>(
        <Row key={rowData.id} title={rowData.title} fetchURL={rowData.relatedURL} isLargeRow={rowData.isLargeRow}/>
      ))}
    </div>
  );
}

export default App;
