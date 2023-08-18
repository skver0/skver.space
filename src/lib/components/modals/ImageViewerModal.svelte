<script lang="ts">
  import { fly } from "svelte/transition";
  import { modals } from "../../stores/ModalStore";
  import { onDestroy } from "svelte";
  export let images: string[] = [];

  let modalId: number;
  let index = 0;
  let left = false;

  const nextImage = () => {
    left = false;
    index = (index + 1) % images.length;
  };

  const previousImage = () => {
    left = true;
    index = (index - 1 + images.length) % images.length;
  };

  window?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") previousImage();
  });

  onDestroy(() => {
    window?.removeEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") previousImage();
    });
  });
</script>

<div class="w-full h-full">
  <button
    class="material-symbols-outlined absolute top-0 right-0 m-2 cursor-pointer text-neutral-500 hover:text-neutral-300 active:text-neutral-600 duration-200"
    on:click={() => modals.close(modalId)}
  >
    close
  </button>
  <div class="flex flex-col items-center gap-3">
    <div class="flex items-center justify-center gap-5">
      {#if images.length > 1}
        <button
          class="material-symbols-outlined text-neutral-500 hover:text-neutral-300 active:text-neutral-600 duration-200"
          on:click={previousImage}
        >
          chevron_left
        </button>
      {/if}
      {#key index}
        <img
          class="w-full object-contain max-h-[calc(100vh-4rem)]"
          src={images[index]}
          in:fly={{ x: left ? -20 : 20 }}
          alt=""
        />
      {/key}
      {#if images.length > 1}
        <button
          class="material-symbols-outlined text-neutral-500 hover:text-neutral-300 active:text-neutral-600 duration-200"
          on:click={nextImage}
        >
          chevron_right
        </button>
      {/if}
    </div>
    <div class="flex gap-1">
      {#each images as _, i}
        <button
          class={`w-2 h-2 rounded-full bg-neutral-500 hover:bg-neutral-300 active:bg-neutral-600 duration-200 cursor-pointer ${
            index === i ? "bg-neutral-600" : ""
          }`}
          on:click={() => (index = i)}
        />
      {/each}
    </div>
  </div>
</div>
