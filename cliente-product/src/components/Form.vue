<template>
    <form @submit.prevent="handleSubmit">
        <div class="mb-3" v-for="campo in campos" :key="campo">
            <label :for="campo" class="form-label">{{ campo }}</label>
            <input type="text" class="form-control" :id="campo" v-model="formulario[campo]" required>
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
    </form>
</template>

<script>
export default {
    name: "Form",
    props: {
        campos: Array
    },
    data() {
        return {
            formulario: {}
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
        }
    }
};
</script>
