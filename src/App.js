import './App.css';
import {useState} from 'react'
import CustoFixo from './components/CustoFixo';

function App() {
	const [salario, setSalario] = useState(0);
	const [listaCustoFixo, setlistaCustoFixo] = useState([
		{
			nome: 'Aluguel',
			valor: 1200
		} 
	]);
	const [listaCustoMisto, setlistaCustoMisto] = useState([]);

  return (
    <div>
		<div className="salario-wrapper">
			<p>
				Seu salário é
			</p>
			<input type="number" value={salario} onChange={(e) => setSalario(e.target.value)}/>
		</div>
		<hr />
		<CustoFixo listaCustoFixo={listaCustoFixo}setlistaCustoFixo={setlistaCustoFixo}/>
    </div>
  );
}


export default App;
