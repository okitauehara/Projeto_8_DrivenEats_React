export default function Bebida(props) {
    const {
        imagem,
        nome,
        descricao,
        preco
    } = props

    return (
    <div className="opcao">
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