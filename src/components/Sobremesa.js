import React, { useState } from "react";

export default function Sobremesa(props) {
    const {
        imagem,
        nome,
        descricao,
        preco
    } = props;
    const [selecionado, setSelecionado] = useState('');
    const [contador, setContador] = useState(1);

    function selecionar() {
        setSelecionado('selecionado');
    }

    function desmarcar() {
        setSelecionado('');
    }

    function diminuir() {
        if (contador === 1) {
            setSelecionado(desmarcar);
        } else {
            setContador(contador - 1);
        }
    }

    function aumentar() {
        setContador(contador + 1);
    }

    return (
    <div className={`opcao ${selecionado}`} onClick={selecionar}>
        <img src={imagem} />
        <div className="titulo">{nome}</div>
        <div className="descricao">{descricao}</div>
        <div className="fundo">
            <div className="preco">{preco}</div>
            <div className="contador">
                <div className="diminuir" onClick={diminuir}>-</div>
                <div className="quantidade">{contador}</div>
                <div className="aumentar" onClick={aumentar}>+</div>
            </div>
        </div>
    </div>
    );
}
