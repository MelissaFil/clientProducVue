<template>
    <Cabecalho :nome-pagina="pagina"/>
</template>
<script>
    import Cabecalho from "../components/Cabecalho.vue";
    export default{
        name:'Clientes',
        data(){
            return{
                pagina: 'Clientes'
            }
        },
        components:{
            Cabecalho
        }
    }
</script>