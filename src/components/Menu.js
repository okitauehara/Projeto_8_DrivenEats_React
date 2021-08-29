import Opcao from "./Opcao";

export default function Menu({
    conteudo,
    quantidade,
    aumentar,
    diminuir
}) {
    return (
    <div className="menu">
        {conteudo.map((secao, index) => (
            <div key={index} className="secao">
                <div className="titulo">{secao.titulo}</div>
                <div className={secao.tipo}>
                        {secao.opcoes.map((opcao, index) => (
                        <Opcao
                        key={index}
                        imagem={opcao.imagem}
                        alt={opcao.alt}
                        nome={opcao.nome}
                        descricao={opcao.descricao}
                        preco={opcao.preco}
                        numero={opcao.numero}
                        quantidade={quantidade}
                        aumentar={aumentar}
                        diminuir={diminuir}
                        />))}
                </div>
            </div>
        ))}
    </div>
    );
}

