<script lang="ts">
  export let style: "side" | "normal" = "normal";
  export let active = false;

  let generatedStyle = "";

  $: style === "side"
    ? (generatedStyle = `dark:active:text-neutral-500 dark:hover:text-neutral-300 hover:text-neutral-800 duration-200 flex gap-1 items-center ${
        active
          ? "dark:text-neutral-100 text-neutral-950"
          : "dark:text-neutral-400 text-neutral-500"
      }`)
    : (generatedStyle =
        "px-2 py-1 rounded-lg border dark:border-neutral-700 border-neutral-400 dark:bg-neutral-800 active:bg-neutral-900/50 hover:bg-neutral-300 dark:hover:bg-neutral-700 w-full duration-200");
</script>

<button
  on:click
  {...$$restProps}
  class={`${generatedStyle} ${$$restProps.class ?? ""}`}
>
  <slot />
</button>
