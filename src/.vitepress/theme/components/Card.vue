<script setup lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";

const props = defineProps<{
  title?: string;
  type?: string;
}>();

const { theme } = useData();

const data = reactive({
  isEnable: theme.value.cardContainerConfig.isEnable ?? true,
});

const { isEnable } = toRefs(data);
</script>

<template>
  <div v-if="isEnable" class="vp-card" :class="props.type">
    <slot name="title">
      <p v-if="title" class="title">
        <!-- <span>icon</span> -->
        <span v-if="title" v-html="title" />
      </p>
    </slot>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  border: solid 1px var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color var(--t-color), box-shadow var(--t-color);
  /* background-color: var(--vp-card-bg); */
}
.vp-card-grid .vp-card {
  margin: 0;
}
.vp-card.tip {
  background-color: var(--vp-c-tip-soft);
}
.vp-card.info {
  background-color: var(--vp-c-default-soft);
}
.vp-card.note {
  background-color: var(--vp-c-default-soft);
}
.vp-card.important {
  background-color: var(--vp-c-important-soft);
}
.vp-card.warning {
  background-color: var(--vp-c-warning-soft);
}
.vp-card.danger {
  background-color: var(--vp-c-danger-soft);
}
.vp-card.caution {
  background-color: var(--vp-c-danger-soft);
}

.vp-card .title {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  transition: color var(--t-color);
}
</style>
