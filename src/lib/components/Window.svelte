<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 200 }}
  class={`border dark:border-neutral-700 border-neutral-400 dark:bg-neutral-800 bg-neutral-300 px-2 py-1 rounded-lg drop-shadow-xl duration-200 h-min ${$$restProps.class}`}
>
  <slot />
</div>
