<template>
     <div class="container my-5">
        <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
        <ul class="list-group">
            <li class="list-group-item active" aria-current="true">{{ cliente }} </li>
            <li class="list-group-item" v-for="produto in produtos">{{ produto.nome }}</li>
        </ul>
    </div>
</template>
<script>
    import Cabecalho from "../components/Cabecalho.vue";
    export default{
        name:'Produtos',
        data(){
            return{
                pagina: "Produtos atribuídos a clientes",
                produtos:[],
                cliente: null
            }
        },
        components:{
            Cabecalho,
        },
        methods:{
            async getProduto(){
                const req = await fetch("http://localhost:3000/clientes/"+this.$route.params.idcliente);
                const data = await req.json();
                this.produtos = data.produtos
                this.cliente = data.nome
                
            }
        },
        mounted(){
            this.getProduto();
        }
    }
</script>