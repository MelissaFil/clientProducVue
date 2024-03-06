<template>
  <div class="container">
    <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
    <Form :campos="campos" :produtos="produtos" @cadastrar="createProduto" />
  </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Form from "../components/Form.vue";

export default {
  name: "ClientesCadastro",
  data() {
    return {
      pagina: "Cadastro de clientes",
      campos: ["Nome", "Documento", "Telefone", "Email", "Produtos"],
      produtos: []
    };
  },
  components: {
    Cabecalho,
    Form
  },
  methods: {
    async createProduto(dados) {
      const data = {
        nome: dados.Nome,
        documento: dados.Documento,
        telefone: dados.Telefone,
        email: dados.Email,
        produtos: dados.produtos, 
        ativo: true
      };

      const dataJson = JSON.stringify(data);

      await fetch("http://localhost:3000/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });
    },
    async getProdutos() {
      const req = await fetch("http://localhost:3000/produtos");
      const data = await req.json();
      this.produtos = data;
    }
  },
  mounted() {
    this.getProdutos();
  }
};
</script>