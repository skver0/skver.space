<script lang="ts">
  import { goto } from "$app/navigation";
  import type { MarkdownData } from "$lib/types/MarkdownData";
  import Button from "./Button.svelte";
  export let data: MarkdownData;
</script>

<div
  class="border dark:border-neutral-700 dark:bg-neutral-800 border-neutral-400 bg-neutral-300 p-3"
>
  <p class="border-b border-neutral-700 mb-2">{data.metadata.title}</p>
  <div class="flex flex-col sm:flex-row gap-2">
    <p class="text-neutral-600 pb-0">
      {data.metadata.author} :: {new Date(
        data.metadata.date
      ).toLocaleDateString()}
      {new Date(data.metadata.date).toLocaleTimeString()}
    </p>
    <div class="flex gap-2">
      {#each data.metadata.tags as tag}
        <button on:click={() => (window.location.href = tag)}>{tag}</button>
      {/each}
    </div>
  </div>

  <p class="text-neutral-500 text-base">{data.metadata.description}</p>
  <Button
    style="side"
    class="flex items-center gap-2 mx-0"
    on:click={() => goto("blog" + data.path)}
  >
    Read more <span class="material-symbols-outlined">arrow_right_alt</span>
  </Button>
</div>
