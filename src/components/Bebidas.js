import Opcao from "./Opcao";

const bebidas = [
    {
        imagem: "img/coquinha_gelada.png",
        alt: "Coquinha gelada",
        nome: "Coquinha gelada",
        descricao: "Lata 350ml",
        preco: "R$ 4,90"
    },
    {
        imagem: "img/agua_natural.jpg",
        alt: "Água Natural",
        nome: "Água Natural",
        descricao: "Garrafa 500ml",
        preco: "R$ 3,90"
    },
    {
        imagem: "img/agua_com_gas.jpg",
        alt: "Água Com Gás",
        nome: "Água Com Gás",
        descricao: "Garrafa 500ml",
        preco: "R$ 4,10"
    },
    {
        imagem: "img/bonbon.jpg",
        alt: "Suco BonBon",
        nome: "Suco BonBon",
        descricao: "Lata 238ml",
        preco: "R$ 6,90"
    },
    {
        imagem: "img/del_valle.jpg",
        alt: "Suco Del Valle",
        nome: "Suco Del Valle",
        descricao: "Lata 290ml",
        preco: "R$ 5,50"
    }
];

export default function Bebidas() {
    return (
    <div className="secao">
        <div className="titulo">Agora, sua bebida</div>
        <div className="opcoes bebida">
          {bebidas.map((bebida, index) =>(
              <Opcao
              key={index}
              imagem={bebida.imagem}
              alt={bebida.alt}
              nome={bebida.nome}
              descricao={bebida.descricao}
              preco={bebida.preco}
              />))}
        </div>
    </div>
    );
}