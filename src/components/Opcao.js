import React from "react";

export default function Opcao({
    imagem,
    alt,
    nome,
    descricao,
    preco,
    numero,
    quantidade,
    aumentar,
    diminuir
}) {

    const [selecionado, setSelecionado] = React.useState('opcao');

    function selecionar() {
        if (selecionado === 'opcao') {
            setSelecionado('opcao selecionado');
            aumentar(numero);
        } else {
            return;
        }
    }
    
    function checarQuantidade() {
        if (quantidade[numero] === 1) {
            setSelecionado('opcao');
            diminuir(numero);
        } else {
            diminuir(numero);
        }
    }

    return (
    <div id={numero} className={selecionado} onClick={selecionar}>
        <img src={imagem} alt={alt}/>
        <div className="titulo">{nome}</div>
        <div className="descricao">{descricao}</div>
        <div className="fundo">
            <div className="preco">R$ {preco}</div>
            <div className="contador">
                <div className="diminuir" onClick={checarQuantidade}>-</div>
                <div className="quantidade">{quantidade[numero]}</div>
                <div className="aumentar" onClick={() => aumentar(numero)}>+</div>
            </div>
        </div>
    </div>
    );
}