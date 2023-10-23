import './App.css';
import {useState} from 'react'
import Custo from './components/Custo';
import Balanco from './components/Balanco';

function App() {
	const [salario, setSalario] = useState(0);
	const [listaCustoFixo, setListaCustoFixo] = useState([
		{
			nome: 'Aluguel',
			valor: 1200,
			ativo: true
		}
	]);
	const [listaCustoMisto, setListaCustoMisto] = useState([]);

  return (
    <div>
		<div className="salario-wrapper">
			<p>
				Seu salário é
			</p>
			<input type="number" value={salario} onChange={(e) => setSalario(e.target.value)}/>
		</div>
		<hr />
		<div className="custos-container">
			<Custo titulo={"Custo Fixo"} descricao={"(aluguel, contas, ...)"} listaCusto={listaCustoFixo} setListaCusto={setListaCustoFixo}/>
			<Custo titulo={"Custo Misto"} descricao={"(reservas, investimentos, ...)"} listaCusto={listaCustoMisto} setListaCusto={setListaCustoMisto}/>
			<Balanco listaCustoFixo={listaCustoFixo} listaCustoMisto={listaCustoMisto}/>
		</div>
    </div>
  );
}


export default App;
