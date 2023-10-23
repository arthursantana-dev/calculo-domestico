import { useState } from "react"

export default function CriarNovoCusto(props) {
	const [nomeCusto, setNomeCusto] = useState("")
	const [valorCusto, setValorCusto] = useState(0)

	function novoCustoHandler(){
		props.setListaCusto([...props.listaCusto, {nome: nomeCusto, valor: parseFloat(valorCusto), ativo: true}])
		props.setVaiCriarNovoCusto(!props.vaiCriarNovoCusto)
	}

	return(
		<div className="criar-novo-custo-container">
			<input type="text" placeholder="Nome" value={nomeCusto} onChange={(e) => setNomeCusto(e.target.value)} />
			<input type="number" placeholder="Valor" value={valorCusto} onChange={(e) => setValorCusto(e.target.value)}  />
			<button className="custo-botao botao-editar" onClick={() => novoCustoHandler()}>Adicionar</button>
		</div>
	)
}