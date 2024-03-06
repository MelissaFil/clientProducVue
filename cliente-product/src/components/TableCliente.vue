<template>
    <table class="table table-striped" >
        <thead>
            <tr>
                <th v-for="(coluna, index) in colunas" scope="col">{{colunas[index]}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(dado, index) in data">
                 <th scope="row">{{dado.nome}}</th> 
                <th scope="row">{{dado.documento}}</th>
                <th scope="row">{{dado.telefone}}</th>
                <th scope="row">{{dado.email}}</th>
                <th scope="row"> 
                    <router-link to="/" class="btn btn-link">Produtos</router-link> 
                </th>
                    <th scope="row" v-if="dado.ativo"> <button type="button" class="btn btn-outline-danger" >Desativar</button></th>
                    <th scope="row" v-else="dado.ativo"> <button type="button" class="btn btn-outline-success" >Ativar</button></th>
                </tr>

      </tbody>
    </table>
</template>
<script>
      export default{
        name: "Table",
        props:{
            colunas: Array,
            data:[]
        },
    }  
</script>