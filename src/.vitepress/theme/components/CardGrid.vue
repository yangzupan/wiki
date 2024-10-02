<script setup lang="ts">
</script>

<template>
  <div class="vp-card-grid ">
    <slot />
  </div>
</template>

<style scoped>
.vp-card-grid {
  margin: 1rem 0;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
@media (min-width: 640px) {
  .vp-card-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

</style>
