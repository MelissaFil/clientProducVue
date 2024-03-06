<template>
    <div class="container my-5">
        <div class="d-flex flex-row align-items-center justify-content-between">
            <h4>{{ nomePagina }}</h4>
            <router-link :to="`/${nomePagina}/cadastro`" class="btn btn-primary">Cadastrar {{ nomePagina }}</router-link>
        </div> 
    </div>
</template>

<script>
    export default{
        name: "Cabecalho",
        props:{
            nomePagina: String
        }
        
    }

</script>