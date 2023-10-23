import { useState } from "react";
import CriarNovoCusto from "./CriarNovoCusto";


export default function Custo(props) {
	function custoClickHandler(i) {
		const novaLista = [...props.listaCusto]
		const novoCusto = { ...novaLista[i] }
		novoCusto.ativo = !novoCusto.ativo
		novaLista[i] = novoCusto
		props.setListaCusto(novaLista)
	}

	function removerCustoHandler(i) {
		const novaLista = [...props.listaCusto]
		novaLista.splice(i, 1)
		props.setListaCusto(novaLista)
	}

	const [vaiCriarNovoCusto, setVaiCriarNovoCusto] = useState(false)

	return (
		<div className="wrapper-border">
			<h1>{props.titulo}</h1>
			<p>
				{props.descricao}
			</p>
			<hr />
			<div className="custos-wrapper">
				{
					props.listaCusto.map((c, i) => {
						return (
							<div className="custo-unico-wrapper" key={i}>
								<input type="checkbox" name="i" checked={props.listaCusto[i].ativo} onChange={() => custoClickHandler(i)} />
								<p className="custo-nome">
									{c.nome}
								</p>
								<p className="custo-valor">
									{`${c.valor.toFixed(2)}`}
								</p>
								<div className="custo-container-botoes">
									<button className="custo-botao botao-remover" onClick={() => removerCustoHandler(i)}>
										Remover
									</button>
								</div>
							</div>
						)
					})
				}

				{
					vaiCriarNovoCusto ? <CriarNovoCusto 
					vaiCriarNovoCusto={vaiCriarNovoCusto} 
					setVaiCriarNovoCusto={setVaiCriarNovoCusto} 
					listaCusto={props.listaCusto}
					setListaCusto={props.setListaCusto}/> :

						<button className="custo-botao botao-adicionar" onClick={() => {
							setVaiCriarNovoCusto(!vaiCriarNovoCusto)
						}}>
							Adicionar custo
						</button>
				}



			</div>
		</div>
	)
}