<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="(coluna, index) in colunas" :key="index" scope="col">{{ coluna }}</th>
          <th scope="col">Status</th>
          <th scope="col">Ativar/desativar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td v-for="(coluna, index) in colunas" :key="index">
            <span class="col-nome d-lg-none">{{ coluna }}:</span>
            <span class="col-valor">
              <template v-if="coluna.toLowerCase() === 'produtos'">
                <router-link v-if="item.produtos" :to="{ name: 'ClienteProdutos', params: { idcliente: item.id }}" class="btn btn-link">Produtos</router-link>
              </template>
              <template v-else-if="item[coluna.toLowerCase()]">
                {{ item[coluna.toLowerCase()] }}
              </template>
            </span>
          </td>
          <td>
            <span class="col-nome d-lg-none">status:</span>
            <span class="badge text-bg-success" v-if="item.ativo">Ativo</span>
            <span class="badge text-bg-danger" v-else>Inativo</span>
            <button type="button" class="btn btn-danger d-lg-none mx-3" v-if="item.ativo" @click="toggleAtivo(item)"><i class="bi bi-power"></i> Desativar</button>
            <button type="button" class="btn btn-success d-lg-none mx-3" v-else @click="toggleAtivo(item)"><i class="bi bi-power"></i>Ativar</button>
          </td>
          <td class="buttonsAcoes">
            <button type="button" class="btn btn-danger" v-if="item.ativo" @click="toggleAtivo(item)"><i class="bi bi-power"></i></button>
            <button type="button" class="btn btn-success" v-else @click="toggleAtivo(item)"><i class="bi bi-power"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
      this.$emit("toggleAtivo", item);
    }
  }
};
</script>

<style scoped>
@media (max-width: 991px) {
  .table tbody tr {
    display: block;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 10px;
  }
  .table tbody tr td {
    display: flex;
    align-items: center;
  }
  .col-nome {
    font-weight: bold;
    margin-right: 5px;
  }
  .table thead, .table tbody tr .buttonsAcoes{
    display: none;
  }
}
</style>
