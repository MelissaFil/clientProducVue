<template>
  <div class="container">
    <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
    <Alerta :mensagem="res" :type="typeAlert"/>
    <Form :campos="campos" :produtos="produtos" @cadastrar="createProduto" />
  </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Form from "../components/Form.vue";
import Alerta from "../components/Alert.vue";
import { cpf } from 'cpf-cnpj-validator';



export default {
  name: "ClientesCadastro",
  data() {
    return {
      pagina: "Cadastro de clientes",
      campos: ["Nome", "Documento", "Telefone", "Email", "Produtos"],
      produtos: [],
      res: null,
      typeAlert: null
    };
  },
  components: {
    Cabecalho,
    Form,
    Alerta
  },
  methods: {
    async createProduto(dados) {


      if (!cpf.isValid(dados.Documento)) {
        this.res = "Digite um CPF válido";
        this.typeAlert="danger"
        setTimeout(() => {
          this.res = '';
        }, 2000);
        return; 
      }

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
      this.res = "Cliente cadastrado com sucesso!"
      this.typeAlert="success"
      setTimeout(() => {
          this.res = '';
      }, 2000);
    },
    async getProdutos() {
      const req = await fetch("http://localhost:3000/produtos");
      const data = await req.json();
      this.produtos = data.filter(produto => produto.ativo);
    }
  },
  mounted() {
    this.getProdutos();
  }
};
</script>