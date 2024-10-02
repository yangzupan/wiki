<script setup lang="ts">
import { reactive, toRefs, onMounted, ref, computed } from "vue";
import { useData } from "vitepress";

import VPImage from "../../../../node_modules/vitepress/dist/client/theme-default/components/VPImage.vue";
import VPLink from "../../../../node_modules/vitepress/dist/client/theme-default/components/VPLink.vue";
// import { url } from "inspector";

const props = defineProps<{
  url: string;
  title?: string;
  icon?: string | { svg: string };

  desc?: string;
  type?: string;
  rel?: string;
  target?: string;
}>();
const { theme } = useData();

// const title = computed(() => props.title ?? "");
// const description = computed(() => props.desc || (props.url ?? ""));
// const icon = computed(() => props.icon ?? "");

const data = reactive({
  isEnable: theme.value.linkCardContainerConfig.isEnable ?? true,
  isShowTip: theme.value.linkCardContainerConfig.isShowTip ?? false,
  title: props.title ?? theme.value.linkCardContainerConfig.defaultTitle ?? "",
  icon: props.icon,
  description: props.desc ?? props.url ?? "",
});

const { isEnable, title, icon, description, isShowTip } = toRefs(data);
</script>

<template>
  <VPLink
    v-if="isEnable"
    class="vp-link-card"
    :class="props.type"
    :href="props.url"
    :rel="rel"
    :target="target"
    :no-icon="true"
    :tag="props.url ? 'a' : 'div'"
  >
  <div class="card-head">
    <img src="data:image/png;base64,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" alt="" srcset="">
  </div>
    <div class="card-body">
      <div class="container">
         <!-- <img :src="icon.src" alt="" srcset="" /> -->
        <div v-if="icon" class="icon">
          <img :src="icon" alt="图标" srcset="" />
        </div>

          <div class="content">
          <slot name="title">
            <span v-if="title" v-html="title" class="title" />
            <p v-if="description" v-html="description" class="description" />
          </slot>
        </div>
        <!-- <span v-if="url">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-link-2"
          >
            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
            <line x1="8" x2="16" y1="12" y2="12" />
          </svg>
        </span> -->
      </div>
    </div>
    <div v-if="isShowTip" class="card-footer">
      <span class="tip">链接卡片，请注意甄别链接安全性</span>
    </div>
  </VPLink>
</template>

<style scoped>
.vp-link-card-container {
  position: static;
}
.vp-link-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 1rem;
  margin: 16px 0;
  background-color: transparent;
  border: solid 1px var(--vp-c-divider);
  border-radius: 8px;
  transition: border-color var(--t-color), box-shadow var(--t-color),
    background-color var(--t-color);
}
.vp-link-card.tip {
  background-color: var(--vp-c-tip-soft);
}
.vp-link-card.info {
  background-color: var(--vp-c-default-soft);
}
.vp-link-card.note {
  background-color: var(--vp-c-default-soft);
}
.vp-link-card.important {
  background-color: var(--vp-c-important-soft);
}
.vp-link-card.warning {
  background-color: var(--vp-c-warning-soft);
}
.vp-link-card.danger {
  background-color: var(--vp-c-danger-soft);
}
.vp-link-card.caution {
  background-color: var(--vp-c-danger-soft);
}

.vp-card-grid .vp-link-card {
  margin: 0;
}
.vp-link-card:hover {
  text-decoration: none;
  background-color: var(--vp-c-default-soft);
  border-color: var(--vp-c-default-1);
}

.vp-link-card .card-head img{
width: 16rem;
height: 16rem;
}
.vp-link-card .card-body {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--vp-c-text-1);
  margin: 6px 0;
}

.vp-link-card .card-body .container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.vp-link-card .card-body .container .icon {
  flex: none;
  width: 3rem;
  border-radius: 50%;
  overflow: hidden;
}
.vp-link-card .card-body .container .content {
  flex: auto;
  overflow: hidden;
  /* width: calc(100% - 4rem); */
}
.vp-link-card .card-body .container .content .title {
  font-size: 1rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vp-link-card .card-body .container .content .description {
  font-size: 0.875rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vp-link-card .card-body .container .vpi-arrow-right {
  flex: none;
}

.vp-link-card .card-footer {
  padding-top: 0.5rem;
  border-top: 2px dashed var(--vp-c-divider);
}
.vp-link-card .card-footer .tip {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}
</style>
