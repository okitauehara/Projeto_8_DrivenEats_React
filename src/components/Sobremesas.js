import Sobremesa from "./Sobremesa";

const sobremesas = [
    {
        imagem: "img/pudim.png",
        nome: "Pudim",
        descricao: "Apenas pudim",
        preco: "R$ 7,00"
    },
    {
        imagem: "img/dorayaki.png",
        nome: "Dorayaki",
        descricao: "Massa de panqueca, recheio de anko",
        preco: "R$ 7,50"
    },
    {
        imagem: "img/dango.jpg",
        nome: "Dango",
        descricao: "3 unidades, massa de arroz doce",
        preco: "R$ 11,90"
    },
    {
        imagem: "img/melona.png",
        nome: "Sorvete Melona",
        descricao: "Sorvete importado de melão",
        preco: "R$ 7,90"
    },
    {
        imagem: "img/rolinho_primavera.jpg",
        nome: "Rolinho Primavera",
        descricao: "Sabor banana e Nutella",
        preco: "R$ 6,50"
    }
];

export default function Sobremesas() {
    return (
    <div class="secao">
        <div class="titulo">Por fim, sua sobremesa</div>
        <div class="opcoes sobremesa">
            {sobremesas.map((sobremesa, index) => (
                <Sobremesa
                key={index}
                image={sobremesa.imagem}
                nome={sobremesa.nome}
                descricao={sobremesa.descricao}
                preco={sobremesa.preco}
                />))}
        </div>
    </div>
    );
}