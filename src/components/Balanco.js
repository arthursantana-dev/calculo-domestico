import { useState } from "react"

export default function Balanco(props) {
	let custo = 0
	return(
		<div className="wrapper-border">
			<h1>Balanço</h1>
			<hr />
			<div className="custos-wrapper">
				<h2>
					Custos Fixos
				</h2>
				{
					props.listaCustoFixo.map((c, i) => {
						if(c.ativo){
							custo += c.valor

							return (
								<section key={i} className="balanco__custo-container">
									<p>
										{c.nome}
									</p>
									<p>
										{c.valor}
									</p>
								</section>
							)
						}

					})
					
				}
				<h2>
					Custo Misto
				</h2>
				{
					props.listaCustoMisto.map((c, i) => {
						if(c.ativo){
							custo += c.valor

							return (
								<section key={i} className="balanco__custo-container">
									<p>
										{c.nome}
									</p>
									<p>
										{c.valor}
									</p>
								</section>
							)
						}

					})
					
				}
				{
					custo.toFixed(2)
				}
				
			</div>
		</div>
	)
}