<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th v-for="(coluna, index) in colunas" :key="index" scope="col">{{ coluna }}</th>
        <th scope="col">Ações</th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(coluna, index) in colunas" :key="index">
          <template v-if="coluna.toLowerCase() === 'produtos'">
            <router-link v-if="item.produtos" :to="{ name: 'ClienteProdutos', params: { idcliente: item.id }}" class="btn btn-link">Produtos</router-link>
          </template>
          <template v-else-if="item[coluna.toLowerCase()]">
            {{ item[coluna.toLowerCase()] }}
          </template>
        </td>
        <td>
          <button type="button" class="btn btn-outline-danger" v-if="item.ativo" @click="toggleAtivo(item)">Desativar</button>
          <button type="button" class="btn btn-outline-success" v-else @click="toggleAtivo(item)">Ativar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    colunas: Array,
    data: Array
  },
  methods: {
    toggleAtivo(item) {
      item.ativo = !item.ativo;
    }
  }
};
</script>
