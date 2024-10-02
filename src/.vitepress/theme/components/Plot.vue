<script setup lang="ts">
import { computed, ref, shallowRef, withDefaults } from "vue";


type Props = {

  tag?: boolean;

  mask?: string | { light: string; dark: string };

  color?: string | { light: string; dark: string };

  trigger?: "hover" | "click";
};

const props = withDefaults(defineProps<Props>(), {
  tag: true,
  mask: undefined,
  color: undefined,
  trigger: undefined,

});


const options = computed(() => {
  return {
    trigger: props.trigger || "hover",
    color: props.color,
    mask: props.mask,
  };
});

const styles = computed(() => {
  const plot = options.value;
  if (!plot.color && !plot.mask) return {};
  const style: Record<string, string> = {};
  if (plot.color) {
    if (typeof plot.color === "string") {
      style["--vp-c-plot-light"] = plot.color;
    } else {
      style["--vp-c-plot-light"] = plot.color.light;
      style["--vp-c-plot-dark"] = plot.color.dark;
    }
  }
  if (plot.mask) {
    if (typeof plot.mask === "string") {
      style["--vp-c-bg-plot-light"] = plot.mask;
    } else {
      style["--vp-c-bg-plot-light"] = plot.mask.light;
      style["--vp-c-bg-plot-dark"] = plot.mask.dark;
    }
  }
  return style;
});

const isMobile = window.matchMedia("(max-width: 768px)");
const active = ref(false);
const el = shallowRef<HTMLElement>();

function onClick() {
  if (props.trigger === "click" || isMobile.matches) active.value = !active.value;
}
</script>

<template>
  <span
    ref="el"
    class="vp-plot"
    :class="{ hover: options.trigger !== 'click', active }"
    :style="styles"
    @click="onClick"
  >
    <slot />
  </span>
</template>

<style>
.vp-plot {
  padding: 1px 8px;
  margin: 0 0.25rem;
  color: transparent;
  background-color: var(--vp-c-bg-plot-light, var(--vp-c-text-3));
  transition: color ease 0.25s, background-color ease 0.25s;
  cursor:pointer;
}

.dark .vp-plot {
  background-color: var(--vp-c-bg-plot-dark, var(--vp-c-text-3));
}

.vp-plot.hover:hover,
.vp-plot.active {
  color: var(--vp-c-plot-light, var(--vp-c-white));
}

.dark .vp-plot.hover:hover,
.dark .vp-plot.active {
  color: var(--vp-c-plot-dark, var(--vp-c-black));
}
</style>
