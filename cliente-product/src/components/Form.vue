<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3" v-for="campo in campos" :key="campo">
      <label :for="campo" class="form-label">{{ campo }}</label>
      <template v-if="campo === 'Produtos'">
        <div v-for="produto in produtos" :key="produto.id">
          <input type="checkbox" :id="produto.id" v-model="formulario.produtos" :value="produto">
          <label class="mx-2" :for="produto.id">{{ produto.nome }}</label>
        </div>
      </template>
      <template v-else>
        <input type="text" class="form-control" :id="campo" v-model="formulario[campo]" required>
      </template>
    </div>
    <button type="submit" class="btn btn-primary">Cadastrar</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    campos: Array,
    produtos: Array
  },
  data() {
    return {
      formulario: {
        produtos: [] 
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("cadastrar", this.formulario);
      this.limparFormulario();
    },
    limparFormulario() {
      for (let campo of this.campos) {
        this.formulario[campo] = "";
      }
      this.formulario.produtos = [];
    }
  }
};
</script>

