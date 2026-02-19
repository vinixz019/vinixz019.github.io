let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itens = document.getElementById("itensCarrinho");
  itens.innerHTML = "";
  carrinho.forEach(item => {
    itens.innerHTML += `<li>${item.nome} — R$ ${item.preco}</li>`;
  });
  document.getElementById("total").textContent = total;
}
