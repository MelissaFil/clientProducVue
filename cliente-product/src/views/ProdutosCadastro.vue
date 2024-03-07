<template>
    <div class="container">
        <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
        <Alerta :mensagem="res" :type="'success'"/>
        <Form :campos="campos" @cadastrar="createProduto" />
    </div>
</template>

<script>
import Cabecalho from "../components/Cabecalho.vue";
import Form from "../components/Form.vue";
import Alerta from "../components/Alert.vue";

export default {
    name:'ProdutosCadastro',
    data(){
        return{
            pagina: 'Cadastro de produtos',
            campos: ['Nome'],
            res: null
        }
    },
    components:{
        Cabecalho,
        Form,
        Alerta
    },
    methods:{
        async createProduto(dados){
            const data = {
                nome: dados.Nome,
                ativo: true
            };

            const dataJson = JSON.stringify(data);

            await fetch("http://localhost:3000/produtos", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });
            this.res = "Produto cadastrado com sucesso!"
            setTimeout(() => {
                this.res = '';
            }, 2000);
        }
    }
};
</script>
