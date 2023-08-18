<script lang="ts">
  export let style: "side" | "normal" = "normal";
  export let active = false;

  let generatedStyle = "";

  $: style === "side"
    ? (generatedStyle = `active:text-neutral-500 hover:text-neutral-300 duration-200 flex gap-1 lg:mx-0 mx-auto items-center ${
        active ? "text-neutral-100" : "text-neutral-400"
      }`)
    : (generatedStyle =
        "px-2 py-1 rounded-lg border border-neutral-700 bg-neutral-800 active:bg-neutral-900/50 hover:bg-neutral-700 w-full duration-200");
</script>

<button
  on:click
  {...$$restProps}
  class={`${generatedStyle} ${$$restProps.class ?? ""}`}
>
  <slot />
</button>
