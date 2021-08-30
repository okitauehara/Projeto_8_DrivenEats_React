import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

export default function App() {

    const [quantidade, setQuantidade] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function aumentar(numero) {
        const novaQuantidade = [...quantidade];
        for(let i = 0; i < novaQuantidade.length; i++) {
            if (i === numero) {
                novaQuantidade[i]++;
            }
        }
        setQuantidade(novaQuantidade);
    }

    function diminuir(numero) {
        const novaQuantidade = [...quantidade];
        for(let i = 0; i < novaQuantidade.length; i++) {
            if (i === numero) {
                novaQuantidade[i]--;
            }
        }
        setQuantidade(novaQuantidade);
    }

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
                    preco: "18.90",
                    numero: 0,
                    quantidade: quantidade[0]
                },
                {
                    imagem: "img/sukiyaki.jpg",
                    alt: "Sukiyaki",
                    nome: "Sukiyaki",
                    descricao: "Tradicional com base de carne de porco",
                    preco: "31.90",
                    numero: 1,
                    quantidade: quantidade[1]
                },
                {
                    imagem: "img/poke.jpg",
                    alt: "Poke de Salmão",
                    nome: "Poke de Salmão",
                    descricao: "Salmão, pepino, avocado, ovo, kani",
                    preco: "28.90",
                    numero: 2,
                    quantidade: quantidade[2]
                },
                {
                    imagem: "img/lamen.jpg",
                    alt: "Lamen de Cogumelos",
                    nome: "Lamen de Cogumelos",
                    descricao: "Vegano, molho a base de óleo de gergelim",
                    preco: "34.90",
                    numero: 3,
                    quantidade: quantidade[3]
                },
                {
                    imagem: "img/temaki.jpg",
                    alt: "Temaki de Salmão",
                    nome: "Temaki de Salmão",
                    descricao: "Acompanhamento de gengibre e wasabi",
                    preco: "21.90",
                    numero: 4,
                    quantidade: quantidade[4]
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
                    preco: "4.90",
                    numero: 5,
                    quantidade: quantidade[5]
                },
                {
                    imagem: "img/agua_natural.jpg",
                    alt: "Água Natural",
                    nome: "Água Natural",
                    descricao: "Garrafa 500ml",
                    preco: "3.90",
                    numero: 6,
                    quantidade: quantidade[6]
                },
                {
                    imagem: "img/agua_com_gas.jpg",
                    alt: "Água Com Gás",
                    nome: "Água Com Gás",
                    descricao: "Garrafa 500ml",
                    preco: "4.10",
                    numero: 7,
                    quantidade: quantidade[7]
                },
                {
                    imagem: "img/bonbon.jpg",
                    alt: "Suco BonBon",
                    nome: "Suco BonBon",
                    descricao: "Lata 238ml",
                    preco: "6.90",
                    numero: 8,
                    quantidade: quantidade[8]
                },
                {
                    imagem: "img/del_valle.jpg",
                    alt: "Suco Del Valle",
                    nome: "Suco Del Valle",
                    descricao: "Lata 290ml",
                    preco: "5.50",
                    numero: 9,
                    quantidade: quantidade[9]
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
                    preco: "7.00",
                    numero: 10,
                    quantidade: quantidade[10]
                },
                {
                    imagem: "img/dorayaki.png",
                    alt: "Dorayaki",
                    nome: "Dorayaki",
                    descricao: "Massa de panqueca, recheio de anko",
                    preco: "7.50",
                    numero: 11,
                    quantidade: quantidade[11]
                },
                {
                    imagem: "img/dango.jpg",
                    alt: "Dango",
                    nome: "Dango",
                    descricao: "3 unidades, massa de arroz doce",
                    preco: "11.90",
                    numero: 12,
                    quantidade: quantidade[12]
                },
                {
                    imagem: "img/melona.png",
                    alt: "Sorvete Melona",
                    nome: "Sorvete Melona",
                    descricao: "Sorvete importado de melão",
                    preco: "7.90",
                    numero: 13,
                    quantidade: quantidade[13]
                },
                {
                    imagem: "img/rolinho_primavera.jpg",
                    alt: "Rolinho Primavera",
                    nome: "Rolinho Primavera",
                    descricao: "Sabor banana e Nutella",
                    preco: "6.50",
                    numero: 14,
                    quantidade: quantidade[14]
                }
            ]
        }
    ];

    return (
        <>
            <Header />
            <Menu
            conteudo={conteudo}
            quantidade={quantidade}
            aumentar={aumentar}
            diminuir={diminuir}/>
            <Footer 
            conteudo={conteudo}/>
        </>
    );
}
