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
  // icon?: {
  //   type: [string,object];
  // };
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
        <span v-if="url">
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
        </span>
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
