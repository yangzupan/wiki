<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// 定义组件属性及其默认值
const props = defineProps<{
    threshold: number;
  }>();

// 定义滚动距离变量，初始值为0
const scrollTop = ref(0);

// 计算是否显示，基于当前滚动距离是否超过阈值
const show = computed(() => scrollTop.value > props.threshold);

// 在组件挂载时初始化滚动距离，并添加滚动事件监听器
onMounted(() => {
  scrollTop.value = getScrollTop();
  window.addEventListener(
    "scroll",
    debounce(() => {
      scrollTop.value = getScrollTop();
    }, 100)
  );
});

/**
 * 获取当前滚动距离的函数
 * @returns 当前滚动距离
 */
function getScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

/**
 * 平滑滚动到顶部的函数
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  scrollTop.value = 0;
}

/**
 * 防抖函数，用于限制函数调用频率
 * @param func 需要被防抖的函数
 * @param timeout 防抖延时，单位为毫秒，默认为100
 * @returns 防抖后的函数
 */
function debounce(func: Function, timeout = 100) {
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
}
</script>

<template>
  <transition name="fade">
    <div class="go-to-top" @click="scrollToTop" v-if="show">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="m20 22l-3.86-1.55c.7-1.53 1.2-3.11 1.51-4.72zM7.86 20.45L4 22l2.35-6.27c.31 1.61.81 3.19 1.51 4.72M12 2s5 2 5 10c0 3.1-.75 5.75-1.67 7.83A2 2 0 0 1 13.5 21h-3a2 2 0 0 1-1.83-1.17C7.76 17.75 7 15.1 7 12c0-8 5-10 5-10m0 10c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"
          />
        </svg>
      <!-- <svg
        class="icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v13m0-13 4 4m-4-4-4 4"
        />
      </svg> -->
    </div>
  </transition>

</template>

<style scoped>
.go-to-top {
  width: 36px;
  height: 36px;
  line-height: 36px;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 50%;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.go-to-top:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);

  /* background-color: var(--vp-c-bg-soft); */
}

.go-to-top .icon {
  color: var(--vp-c-text-2);

  display: inline-block;
}

@media (max-width: 959px) {
  .go-to-top {
    bottom: 2rem;
    right: 1rem;
  }
}

</style>
