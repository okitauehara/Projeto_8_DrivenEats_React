export default function Modal() {
    return (
    <div className="modal escondido">
        <div className="confirmar-pedido">
            <div className="titulo">Confirme seu pedido</div>
            <ul>
                <li className="prato">
                    <div className="nome">Frango Yin Yang</div>
                    <div className="preco">18,90</div>
                </li>
                <li className="bebida">
                    <div className="nome">Coquinha gelada</div>
                    <div className="preco">4,90</div>
                </li>
                <li className="sobremesa">
                    <div className="nome">Pudim</div>
                    <div className="preco">7,00</div>
                </li>
                <li className="total">
                    <div>Total</div>
                    <div className="preco">R$ 30,80</div>
                </li>
            </ul>
            <button className="confirmar">Tudo certo, pode pedir!</button>
            <button className="cancelar">Cancelar</button>
        </div>
    </div>
    );
}