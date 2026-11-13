
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db } from "./firebase.js";


const produtos = [
    {
        id: 1,
        nome: "Cupcake de Chocolate",
        descricao: "Massa de chocolate com cobertura cremosa.",
        preco: 8.50,
        imagem: "images/chocolate.jpg"
    },
    {
        id: 2,
        nome: "Cupcake de Morango",
        descricao: "Massa suave com cobertura de morango.",
        preco: 9.00,
        imagem: "images/morango.jpg"
    },
    {
        id: 3,
        nome: "Cupcake de Baunilha",
        descricao: "Massa de baunilha com cobertura especial.",
        preco: 7.50,
        imagem: "images/baunilha.jpg"
    },
    {
        id: 4,
        nome: "Cupcake Red Velvet",
        descricao: "Massa red velvet com cobertura de cream cheese.",
        preco: 10.00,
        imagem: "images/red velvet.jpg"
    }
];


let carrinho = [];

const areaProdutos = document.getElementById("produtos");
const areaCarrinho = document.getElementById("itens-carrinho");
const totalElemento = document.getElementById("total");

const botaoFinalizar = document.getElementById("finalizar-pedido");
const formularioPedido = document.getElementById("formulario-pedido");
const formulario = document.getElementById("form-pedido");

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function mostrarProdutos() {
    areaProdutos.innerHTML = "";

    produtos.forEach(produto => {
        areaProdutos.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <strong>${formatarPreco(produto.preco)}</strong>
                <br><br>
                <button onclick="adicionarCarrinho(${produto.id})">
                    Adicionar ao carrinho
                </button>
            </div>
        `;
    });
}

function adicionarCarrinho(id) {
    const item = carrinho.find(produto => produto.id === id);

    if (item) {
        item.quantidade++;
    } else {
        const produto = produtos.find(produto => produto.id === id);

        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}

function removerCarrinho(id) {
    carrinho = carrinho.filter(produto => produto.id !== id);
    atualizarCarrinho();
}

function diminuirQuantidade(id) {
    const item = carrinho.find(produto => produto.id === id);

    if (item) {
        item.quantidade--;

        if (item.quantidade <= 0) {
            removerCarrinho(id);
        } else {
            atualizarCarrinho();
        }
    }
}

function atualizarCarrinho() {
    areaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {
        areaCarrinho.innerHTML = "Seu carrinho está vazio.";
    }

    let total = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;

        areaCarrinho.innerHTML += `
            <p>
                ${item.nome} - ${formatarPreco(item.preco)}
                <br>
                Quantidade: ${item.quantidade}
                <button onclick="adicionarCarrinho(${item.id})">+</button>
                <button onclick="diminuirQuantidade(${item.id})">-</button>
                <button onclick="removerCarrinho(${item.id})">Remover</button>
            </p>
        `;
    });

    totalElemento.textContent = formatarPreco(total);
}

botaoFinalizar.addEventListener("click", function () {
    if (carrinho.length === 0) {
        alert("Adicione algum cupcake ao carrinho antes de finalizar.");
        return;
    }

    formularioPedido.style.display = "block";
    formularioPedido.scrollIntoView({ behavior: "smooth" });
});

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();

    if (!nome || !telefone || !endereco) {
        alert("Preencha todos os campos.");
        return;
    }

    const total = carrinho.reduce((soma, item) => {
        return soma + item.preco * item.quantidade;
    }, 0);

    const pedido = {
        cliente: {
            nome,
            telefone,
            endereco
        },
        itens: carrinho.map(item => ({
            produtoId: item.id,
            nome: item.nome,
            quantidade: item.quantidade,
            precoUnitario: item.preco
        })),
        valorTotal: total,
        dataPedido: new Date().toISOString(),
        status: "Recebido"
    };

    try {
        await addDoc(collection(db, "pedidos"), pedido);

        alert("Pedido registrado com sucesso!");

        carrinho = [];
        atualizarCarrinho();
        formulario.reset();
        formularioPedido.style.display = "none";

    } catch (erro) {
        console.error("Erro ao salvar pedido:", erro);
        alert("Não foi possível registrar o pedido. Tente novamente.");
    }
});

mostrarProdutos();
atualizarCarrinho();

window.adicionarCarrinho = adicionarCarrinho;
window.removerCarrinho = removerCarrinho;
window.diminuirQuantidade = diminuirQuantidade;
