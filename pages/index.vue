<script setup lang="ts">
const name = ref("World");
</script>

<template>
  <div>
    <HelloMessage :name="name" />
    <p>
      a
      <input type="text" v-model="name" />
    </p>
  </div>
</template>
