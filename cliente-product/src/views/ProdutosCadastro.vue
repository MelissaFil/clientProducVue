<template>
    <div class="container">
    <Cabecalho :tipo="'cadastro'" :nome-pagina="pagina"/>
    </div>

</template>
<script>
    import Cabecalho from "../components/Cabecalho.vue";
    export default{
        name:'ProdutosCadastro',
        data(){
            return{
                pagina: 'Cadastro de produtos',
                campo: ['Nome'],
            }
        },
        components:{
            Cabecalho,

        },
        methods:{
        },
        mounted(){
        
        }
    }
</script>