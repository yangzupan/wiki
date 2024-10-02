<script setup lang="ts">
import { reactive, toRefs, onMounted } from "vue";
import { useData } from "vitepress";

const props = defineProps<{
  date?: string;
  title?: string;
}>();

const { theme } = useData();

const data = reactive({
  isEnable: theme.value.cardContainerConfig.isEnable ?? true,
  title: props.title ?? "",
  date: props.date ?? "",
});

const { isEnable, title, date } = toRefs(data);
</script>

<template>
  <div class="vp-timeline">
    <slot name="header">
      <div class="vp-timeline-header">
        <div v-if="date" class="vp-timeline-date" v-html="date" />
        <div v-if="title" class="vp-timeline-title" v-html="title" />
      </div>
    </slot>
    <div class="vp-timeline-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-timeline {
  position: relative;
  padding: 0 0 18px 24px;
  color: var(--vp-c-text-1);
  box-sizing: border-box;
}
.vp-timeline::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: solid 2px var(--vp-c-brand);
  transform: translate(0, 18%);
}
.vp-timeline::after {
  position: absolute;
  left: 7px;
  top: 19px;
  content: "";
  width: 2px;
  height: calc(100% - 18px);
  background-color: var(--vp-c-divider)
}

.vp-timeline-title {
  color: var(--vp-c-text-2);
  font-size: 1rem;
  font-weight: bold;
  /* padding-top: 0; */
  padding-top: 0.75rem;

}
.vp-timeline-date{
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
.vp-timeline-body {
  color: var(--vp-c-text-2);
}
</style>
