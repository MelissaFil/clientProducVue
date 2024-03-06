<template>
    <div class="container">
        <Cabecalho :tipo="'exibir'" :nome-pagina="pagina"/>
        <Table :colunas="colunas" :data="data"/>
    </div>

</template>
<script>
    import Cabecalho from "../components/Cabecalho.vue";
    import Table from "../components/Table.vue";
    export default{
        name:'Produtos',
        data(){
            return{
                pagina: 'Produtos',
                colunas: ['Nome'],
                data:[]
            }
        },
        components:{
            Cabecalho,
            Table
        },
        methods:{
            async getProduto(){
                const req = await fetch("http://localhost:3000/produtos");
                const data = await req.json();
                this.data = data
                
            }
        },
        mounted(){
            this.getProduto();
        }
    }
</script>