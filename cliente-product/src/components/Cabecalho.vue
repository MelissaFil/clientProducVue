<template>
   
    <div class="my-5 d-flex flex-row align-items-center justify-content-between">
        <h4>{{ nomePagina }}</h4>
        <router-link v-if="tipo == 'exibir'" :to="`/${nomePagina}/cadastro`" class="btn btn-primary">Cadastrar {{ nomePagina }}</router-link>
        <router-link v-if="tipo == 'cadastro'" :to="`/${nomePagina.split(' ').pop().toLowerCase()}`" class="btn btn-primary">Voltar</router-link>
    </div> 

</template>

<script>
    export default{
        name: "Cabecalho",
        props:{
            nomePagina: String,
            tipo: String
        }
        
    }

</script>