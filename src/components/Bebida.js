import React from "react";

export default function Bebida(props) {
    const {
        imagem,
        nome,
        descricao,
        preco
    } = props;
    const [selecionado, setSelecionado] = React.useState('');

    return (
    <div className={`opcao ${selecionado}`} onClick={() => setSelecionado('selecionado')}>
        <img src={imagem} />
        <div className="titulo">{nome}</div>
        <div className="descricao">{descricao}</div>
        <div className="fundo">
            <div className="preco">{preco}</div>
            <div className="contador">
                <div className="diminuir">-</div>
                <div className="quantidade">1</div>
                <div className="aumentar">+</div>
            </div>
        </div>
    </div>
    );
}