export default function Bebida(props) {
    return (
    <div class="opcao">
        <img src={props.imagem} />
        <div class="titulo">{props.nome}</div>
        <div class="descricao">{props.descricao}</div>
        <div class="fundo">
            <div class="preco">{props.preco}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    </div>
    );
}