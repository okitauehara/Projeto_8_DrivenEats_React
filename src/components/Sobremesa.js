export default function Sobremesa(props) {
    return (
    <div className="opcao">
        <img src={props.imagem} />
        <div className="titulo">{props.nome}</div>
        <div className="descricao">{props.descricao}</div>
        <div className="fundo">
            <div className="preco">{props.preco}</div>
            <div className="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    </div>
    );
}