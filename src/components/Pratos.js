import Prato from "./Prato";

const pratos = [
    {
        imagem: "img/frango_yin_yang.png",
        nome: "Frango Yin Yang",
        descricao: "Frango, batata, salada e molho de pimenta",
        preco: "R$ 18,90"
    },
    {
        imagem: "img/sukiyaki.jpg",
        nome: "Sukiyaki",
        descricao: "Tradicional com base de carne de porco",
        preco: "R$ 31,90"
    },
    {
        imagem: "img/poke.jpg",
        nome: "Poke de Salmão",
        descricao: "Salmão, pepino, avocado, ovo, kani",
        preco: "R$ 28,90"
    },
    {
        imagem: "img/lamen.jpg",
        nome: "Lamen de Cogumelos",
        descricao: "Vegano, molho a base de óleo de gergelim",
        preco: "R$ 34,90"
    },
    {
        imagem: "img/temaki.jpg",
        nome: "Temaki de Salmão",
        descricao: "Acompanhamento de gengibre e wasabi",
        preco: "R$ 21,90"
    }
];

export default function Pratos() {
    return (
    <div className="secao">
        <div className="titulo">Primeiro, seu prato</div>
            <div className="opcoes prato">
                {pratos.map((prato, index) => (
                <Prato
                key={index}
                imagem={prato.imagem}
                nome={prato.nome}
                descricao={prato.descricao}
                preco={prato.preco}
                />))}
        </div>
      </div>
    );
}
