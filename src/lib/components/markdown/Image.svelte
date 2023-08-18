<script lang="ts">
  import { modals } from "$lib/stores/ModalStore";
  import ImageViewerModal from "$lib/components/modals/ImageViewerModal.svelte";
  export let image = "";
  export let alt = "";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<img
  src={image}
  {alt}
  on:click={() => modals.push(ImageViewerModal, { images: [image] })}
/>
