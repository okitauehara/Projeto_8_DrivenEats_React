export default function Footer({ conteudo }) {

	let contadorSecoes = 0;
	for(let i = 0; i < conteudo.length; i++) {
		for(let k = 0; k < conteudo[i].opcoes.length; k++) {
			if (conteudo[i].opcoes[k].quantidade !== 0) {
				contadorSecoes++;
				break;
			}
		}
	}

	if (contadorSecoes === 3) {
		return (
		<div className="footer">
			<button className="fazer-pedido ativo">
			Fechar pedido
			</button>
		</div>
		);

	} else {
		return (
		<div className="footer">
			<button className="fazer-pedido">
			Selecione os 3 itens para fechar o pedido
			</button>
		</div>
		);
	}
}