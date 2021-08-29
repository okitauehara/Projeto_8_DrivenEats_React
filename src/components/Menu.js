import Opcao from "./Opcao";

const conteudo = [
    {
        titulo: "Primeiro, seu prato",
        tipo: "opcoes prato",
        opcoes: [
            {
                imagem: "img/frango_yin_yang.png",
                alt: "Frango Ying Yang",
                nome: "Frango Yin Yang",
                descricao: "Frango, batata, salada e molho de pimenta",
                preco: "R$ 18,90"
            },
            {
                imagem: "img/sukiyaki.jpg",
                alt: "Sukiyaki",
                nome: "Sukiyaki",
                descricao: "Tradicional com base de carne de porco",
                preco: "R$ 31,90"
            },
            {
                imagem: "img/poke.jpg",
                alt: "Poke de Salmão",
                nome: "Poke de Salmão",
                descricao: "Salmão, pepino, avocado, ovo, kani",
                preco: "R$ 28,90"
            },
            {
                imagem: "img/lamen.jpg",
                alt: "Lamen de Cogumelos",
                nome: "Lamen de Cogumelos",
                descricao: "Vegano, molho a base de óleo de gergelim",
                preco: "R$ 34,90"
            },
            {
                imagem: "img/temaki.jpg",
                alt: "Temaki de Salmão",
                nome: "Temaki de Salmão",
                descricao: "Acompanhamento de gengibre e wasabi",
                preco: "R$ 21,90"
            }
        ]
    },
    {
        titulo: "Agora, sua bebida",
        tipo: "opcoes bebida",
        opcoes: [
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
        ]
    },
    {
        titulo: "Por fim, sua sobremesa",
        tipo: "opcoes sobremesa",
        opcoes: [
            {
                imagem: "img/pudim.png",
                alt: "Pudim",
                nome: "Pudim",
                descricao: "Apenas pudim",
                preco: "R$ 7,00"
            },
            {
                imagem: "img/dorayaki.png",
                alt: "Dorayaki",
                nome: "Dorayaki",
                descricao: "Massa de panqueca, recheio de anko",
                preco: "R$ 7,50"
            },
            {
                imagem: "img/dango.jpg",
                alt: "Dango",
                nome: "Dango",
                descricao: "3 unidades, massa de arroz doce",
                preco: "R$ 11,90"
            },
            {
                imagem: "img/melona.png",
                alt: "Sorvete Melona",
                nome: "Sorvete Melona",
                descricao: "Sorvete importado de melão",
                preco: "R$ 7,90"
            },
            {
                imagem: "img/rolinho_primavera.jpg",
                alt: "Rolinho Primavera",
                nome: "Rolinho Primavera",
                descricao: "Sabor banana e Nutella",
                preco: "R$ 6,50"
            }
        ]
    }
];

export default function Menu() {
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
                        />))}
                </div>
            </div>
        ))}
    </div>
    );
}

