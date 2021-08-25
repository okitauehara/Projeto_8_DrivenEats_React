export default function Prato(props) {
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
            <div className="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    </div>
    );
}