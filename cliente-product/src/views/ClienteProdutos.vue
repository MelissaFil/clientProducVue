<template>
  <div class="container my-5">
    <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
    <Alerta :mensagem="res" :type="'success'"/>
    <ul class="list-group">
      <li class="list-group-item active" aria-current="true">{{ cliente }}</li>
      <li class="list-group-item" v-for="produto in produtos">{{ produto.nome }}</li>
    </ul>

    <div class="mt-5">
      <h5>Editar produtos atribuídos:</h5>
      <form @submit.prevent="adicionarProduto">
        <div v-for="produto in produtosDisponiveis" :key="produto.id" class="form-check">
          <input type="checkbox" :id="'produto-' + produto.id" v-model="produtosSelecionados" :value="produto" class="form-check-input">
          <label :for="'produto-' + produto.id" class="form-check-label">{{ produto.nome }}</label>
        </div>
        <button type="submit" class="btn btn-primary">Adicionar Produto</button>
      </form>
    </div>
  </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Alerta from "../components/Alert.vue";

export default {
  name: 'Produtos',
  data() {
    return {
      pagina: "Produtos atribuídos aos clientes",
      produtos: [],
      cliente: null,
      produtosSelecionados: [],
      produtosDisponiveis: [],
      res:null 
    }
  },
  components: {
    Cabecalho,
    Alerta
  },
  methods: {
    async getCliente() {
      const req = await fetch("http://localhost:3000/clientes/" + this.$route.params.idcliente);
      const data = await req.json();
      this.produtos = data.produtos
      this.cliente = data.nome
    },
    async adicionarProduto() {
      const idCliente = this.$route.params.idcliente;
      const produtosSelecionados = this.produtosSelecionados;
      
      await fetch(`http://localhost:3000/clientes/${idCliente}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ produtos: produtosSelecionados })
      });
      
      this.getCliente();
      
      this.res = "Produto adicionado com sucesso!"
      setTimeout(() => {
          this.res = '';
      }, 2000);
    },
    async getProdutosDisponiveis() {
      const req = await fetch("http://localhost:3000/produtos");
      const data = await req.json();
      this.produtosDisponiveis = data.filter(produto => produto.ativo)
    }
  },
  mounted() {
  this.getCliente().then(() => {
    this.getProdutosDisponiveis().then(() => {
      this.produtosDisponiveis.forEach(produto => {
      
        if (this.produtos.some(p => p.id === produto.id)) {
          this.produtosSelecionados.push(produto);
        }
        
      });
    });
  });
},

}
</script>