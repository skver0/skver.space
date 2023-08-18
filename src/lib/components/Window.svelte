<script lang="ts">
  import { fade } from "svelte/transition";
</script>

<div
  in:fade={{ duration: 200 }}
  class={`border border-neutral-700 bg-neutral-800 px-2 py-1 rounded-lg drop-shadow-xl ${$$restProps.class}`}
>
  <slot />
</div>
