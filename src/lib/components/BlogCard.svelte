<script lang="ts">
  import { goto } from "$app/navigation";
  import type { MarkdownData } from "$lib/types/MarkdownData";
  export let data: MarkdownData;
</script>

<div class="border border-neutral-700 bg-neutral-800 p-3">
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
  <button
    class="flex items-center gap-2 hover:text-neutral-300 active:text-neutral-500 duration-200 text-neutral-400"
    on:click={() => goto("blog" + data.path)}
  >
    Read more <span class="material-symbols-outlined">arrow_right_alt</span>
  </button>
</div>
