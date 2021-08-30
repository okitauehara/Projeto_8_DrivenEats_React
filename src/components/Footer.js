export default function Footer({ conteudo }) {

	const pedidoFinal = [
        {
            nomes: [],
            precos: [],
            quantidades: [],
            categoria: "Pratos"
        },
        {
            nomes: [],
            precos: [],
            quantidades: [],
            categoria: "Bebidas"
        },
        {
            nomes: [],
            precos: [],
            quantidades: [],
            categoria: "Sobremesas"
        }
    ];
    let precoTotal = 0;
	let contadorSecoes = 0;
    
    for(let i = 0; i < conteudo.length; i++) {
		for(let k = 0; k < conteudo[i].opcoes.length; k++) {
			if (conteudo[i].opcoes[k].quantidade !== 0) {
				pedidoFinal[i].nomes.push(conteudo[i].opcoes[k].nome);
                pedidoFinal[i].precos.push(conteudo[i].opcoes[k].preco);
                pedidoFinal[i].quantidades.push(conteudo[i].opcoes[k].quantidade);
                precoTotal += (Number(conteudo[i].opcoes[k].preco) * conteudo[i].opcoes[k].quantidade);
			}
		}
	}

    function adicionarCategoria(index) {
        let mensagem = '';
        for(let i = 0; i < pedidoFinal[index].nomes.length; i++) {
            mensagem += `${pedidoFinal[index].nomes[i]}`
            if(pedidoFinal[index].quantidades[i] > 1) {
                mensagem += ` (${pedidoFinal[index].quantidades[i]}x) `
            } else {
                mensagem += ' (1x) '
            }
        }
        return mensagem;
    }

    const mensagemFinal = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n-Prato(s): ${adicionarCategoria(0)}\n-Bebida(s): ${adicionarCategoria(1)}\n-Sobremesa(s): ${adicionarCategoria(2)}\nTotal: R$${precoTotal.toFixed(2)}`);

	function enviarMensagem() {
		window.location.assign(`https://wa.me/5541999352531?text=${mensagemFinal}`)
	}


	for(let i = 0; i < conteudo.length; i++) {
		for(let j = 0; j < conteudo[i].opcoes.length; j++) {
			if (conteudo[i].opcoes[j].quantidade !== 0) {
				contadorSecoes++;
				break;
			}
		}
	}

	if (contadorSecoes === 3) {
		return (
		<div className="footer">
			<button className="fazer-pedido ativo" onClick={enviarMensagem}>
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