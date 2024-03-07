<template>
  <div v-if="mensagem" class="alert alert-success">
    <p class="text-success">{{ mensagem }}</p>
  </div>
</template>
<script>
    export default {
        props: {
            mensagem: String
        },
    };
</script>
