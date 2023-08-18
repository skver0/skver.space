<script lang="ts">
  import { goto } from "$app/navigation";
  import BlogCard from "$lib/components/BlogCard.svelte";
  import Button from "$lib/components/Button.svelte";
  import type { MarkdownData, Metadata } from "$lib/types/MarkdownData";
  import { onDestroy, onMount } from "svelte";

  let entries: MarkdownData[] = [];
  let allEntries: MarkdownData[] = [];

  const globs = import.meta.glob("./**/*.md");
  let isFiltered = false;
  let currentTag = "";

  const filterByHash = () => {
    const tag = window.location.hash;
    if (tag) {
      entries = entries.filter((entry) => entry.metadata.tags.includes(tag));
      currentTag = tag;
      isFiltered = true;
    }
  };

  onMount(async () => {
    await Promise.all(
      Object.entries(globs).map(async ([path, resolver]) => {
        const { metadata } = (await resolver()) as any;
        const p = path.split("+")[0].slice(1);

        entries = [...entries, { path: p, metadata: metadata as Metadata }];
      })
    );
    entries.reverse();
    allEntries = entries;

    filterByHash();

    window.addEventListener("hashchange", (e) => {
      filterByHash();
    });
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("hashchange", (e) => {
        filterByHash();
      });
    }
  });
</script>

<main>
  <h1>Blog posts {currentTag ?? currentTag}</h1>
  <article class="flex flex-col gap-4">
    {#if isFiltered}
      <Button
        class="flex items-center justify-center gap-2 font-assistant"
        on:click={() => {
          entries = allEntries;
          isFiltered = false;
          currentTag = "";
          goto("/blog");
        }}
      >
        <span class="material-symbols-outlined">delete</span>
        Remove filter
      </Button>
    {/if}
    {#if entries}
      {#key entries}
        {#each entries as entry}
          <BlogCard data={entry} />
        {/each}
      {/key}
    {/if}
  </article>
</main>
