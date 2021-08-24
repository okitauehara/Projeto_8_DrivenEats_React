import Bebida from "./Bebida";

const bebidas = [
    {
        imagem: "img/coquinha_gelada.png",
        nome: "Coquinha gelada",
        descricao: "Lata 350ml",
        preco: "R$ 4,90"
    },
    {
        imagem: "img/agua_natural.jpg",
        nome: "Água Natural",
        descricao: "Garrafa 500ml",
        preco: "R$ 3,90"
    },
    {
        imagem: "img/agua_com_gas.jpg",
        nome: "Água Com Gás",
        descricao: "Garrafa 500ml",
        preco: "R$ 4,10"
    },
    {
        imagem: "img/bonbon.jpg",
        nome: "Suco BonBon",
        descricao: "Lata 238ml",
        preco: "R$ 6,90"
    },
    {
        imagem: "img/del_valle.jpg",
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
              <Bebida
              key={index}
              imagem={bebida.imagem}
              nome={bebida.nome}
              descricao={bebida.descricao}
              preco={bebida.preco}
              />))}
        </div>
    </div>
    );
}