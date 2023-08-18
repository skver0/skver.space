<script lang="ts">
  import { onDestroy } from "svelte";
  import { modals } from "../../stores/ModalStore";
  import { clickOutside } from "../utils/ClickOutside";
  import { fade, fly } from "svelte/transition";

  if (typeof window !== "undefined") {
    window?.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modals.close();
    });
  }

  onDestroy(() => {
    if (typeof window === "undefined") return;
    window?.removeEventListener("keydown", (e) => {
      if (e.key === "Escape") modals.close();
    });
  });
</script>

{#if $modals.length > 0}
  <div
    transition:fly|local={{
      y: 20,
      duration: 200,
    }}
    class="fixed left-0 top-0 w-screen h-screen z-50 bg-neutral-900 bg-opacity-80"
  >
    {#each $modals as modal, i}
      <div
        transition:fade|local={{ duration: 100 }}
        class="absolute inset-0 flex items-center justify-center"
      >
        <div
          use:clickOutside={{
            callbackFunction: () => i === $modals.length - 1 && modals.close(),
            onClick: () => {},
          }}
        >
          <svelte:component this={modal.component} {...modal.props} />
        </div>
      </div>
    {/each}
  </div>
{/if}
