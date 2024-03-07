<template>
    <div class="container">
        <Cabecalho :tipo="'exibir'" :nome-pagina="pagina"/>
        <Table :colunas="colunas" :data="data" @toggleAtivo="toggleProduto"/>
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
                
            },
            async toggleProduto(item) {
            await fetch(`http://localhost:3000/produtos/${item.id}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ ativo: !item.ativo })
            });

            this.getProduto();
            }
        },
        mounted(){
            this.getProduto();
        }
    }
</script>