<script lang="ts">
  import { fade, fly } from "svelte/transition";

  let yPos: number = 0;

  const jumpToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

{#if yPos > 100}
  <div
    transition:fade={{ duration: 200 }}
    class="z-10 fixed flex flex-col items-center justify-center bottom-10 right-10 h-14 w-14 rounded-full dark:bg-neutral-800 bg-neutral-100 dark:border-neutral-700 border-neutral-400 border dark:hover:bg-neutral-700 hover:bg-neutral-300 duration-200 drop-shadow-lg"
  >
    <button
      in:fly={{ y: 100, duration: 200 }}
      out:fly={{ y: -100, duration: 200 }}
      on:click={() => jumpToTop()}
      class="flex items-center justify-center h-full w-full"
    >
      <span class="material-symbols-outlined">arrow_upward</span>
    </button>
  </div>
{/if}
<slot />

<svelte:window bind:scrollY={yPos} />
