<script lang="ts">
  import ImageViewerModal from "./modals/ImageViewerModal.svelte";
  import { modals } from "../stores/ModalStore";

  export let title: string = "Title";
  export let description: string = "Description";
  export let images: string[] = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    "https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder-6.png?fit=1200%2C800&ssl=1",
  ];
  export let link: string | null = null;
</script>

<div
  class="flex flex-col gap-2 w-36 h-64 rounded-lg border dark:border-neutral-700 border-neutral-400 overflow-hidden font-assistant"
>
  <button on:click={() => modals.push(ImageViewerModal, { images: images })}>
    <img
      class="object-cover w-full h-36 hover:opacity-100 opacity-60 active:opacity-50 duration-200 cursor-pointer"
      src={images[0]}
      alt={title}
    />
  </button>
  <div class="px-2 flex flex-col">
    {#if link}
      <a href={link} class="text-lg font-bold" target="_blank">{title}</a>
    {:else}
      <span class="text-lg font-bold">{title}</span>
    {/if}
    <p class="text-sm text-neutral-500">{description}</p>
  </div>
</div>
