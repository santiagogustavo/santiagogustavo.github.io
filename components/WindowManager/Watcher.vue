<template>
  <span />
</template>

<script>
export default {
  name: 'Watcher',
  mounted() {
    this.$emit('created');
  }
};
</script>
