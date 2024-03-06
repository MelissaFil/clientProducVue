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
        name:'Clientes',
        data(){
            return{
                pagina: 'Clientes',
                
                colunas: ['Nome', 'Documento', 'Telefone', 'Email', 'Produtos'],
                data:[]
            }
        },
        components:{
            Cabecalho,
            Table
        },
        methods:{
            async getClientes(){
                const req = await fetch("http://localhost:3000/clientes");
                const data = await req.json();
                this.data = data
                
            }
        },
        mounted(){
            this.getClientes();
        }
    }
</script>