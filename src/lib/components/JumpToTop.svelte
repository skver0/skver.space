<script lang="ts">
  import { fade } from "svelte/transition";

  let yPos: number = 0;

  const jumpToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

{#if yPos > 100}
  <button
    transition:fade={{ duration: 200 }}
    class="z-10 fixed flex flex-col items-center justify-center bottom-10 right-10 h-14 w-14 rounded-full bg-neutral-800 border-neutral-700 border hover:bg-neutral-700 duration-200 drop-shadow-lg"
    on:click={() => jumpToTop()}
  >
    <span class="material-symbols-outlined">arrow_upward</span>
  </button>
{/if}
<slot />

<svelte:window bind:scrollY={yPos} />
