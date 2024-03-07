<template>
  <div v-if="mensagem" :class="['alert', type === 'success' ? 'alert-success' : 'alert-danger']">
    <p :class="['alert', type === 'success' ? 'text-success' : 'text-danger']">{{ mensagem }}</p>
  </div>
</template>
<script>
    export default {
        props: {
            mensagem: String,
            type: String
        },
    };
</script>
