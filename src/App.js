import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ColorPicker } from './components/ColorPicker';

function App() {
  return (
    <div className="App">
      <ColorPicker arr={['#fe0000','#00ff01','#0000fe','#ffff00','#ff00fe','#00ffff','#fea500','#81007f','#ffc0cb','#008001','#fe6347','#01ced1','#8b4512','#ff8b00','#4682b4','#fed700']}/>
    </div>
  );
}

export default App;
