<script>
  import { goto } from "$app/navigation";
  import Button from "$lib/components/Button.svelte";
</script>

<main>
  <Button
    class="flex items-center font-assistant gap-2"
    on:click={() => goto("/blog")}
    ><span class="material-symbols-outlined">arrow_left_alt</span> Back</Button
  >
  <article>
    <slot />
  </article>
</main>
