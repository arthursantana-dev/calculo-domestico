import "./CustoFixo.css";

export default function CustoFixo(props) {
	return(
		<div className="wrapper-border">
			<h1>Custo Fixo</h1>
			<p>
				(aluguel, contas, ...)
			</p>
			<hr />
			<div className="custos-wrapper">
				{
					props.listaCustoFixo.map((c, i) => {
						return(
							<div className="custo-unico-wrapper" key={i}>
								<input type="checkbox" name="i"/>
								<p className="custo-nome">
									{c.nome}
								</p>
								<p className="custo-valor">
									{`${c.valor.toFixed(2)}`}
								</p>
								<button className="custo-botao botao-editar">
									Editar
								</button>
								<button className="custo-botao botao-remover">
									Remover
								</button>
							</div>
						)
					})
				}
				<button className="custo-botao botao-adicionar">
					Adicionar custo
				</button>
			</div>
		</div>
	)
}