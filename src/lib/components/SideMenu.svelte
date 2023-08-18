<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Window from "$lib/components/Window.svelte";

  let isOpen: boolean = true;
</script>

<Window
  class={`flex flex-col flex-none transition-all duration-200 overflow-hidden ${
    isOpen ? "lg:w-44 items-left" : "items-center"
  } md:w-12 w-min`}
>
  <span
    class="pb-1 border-b-neutral-700 text-neutral-400 border-b lg:flex hidden items-center justify-between gap-2"
  >
    <p class={`pb-1 ${isOpen ? "" : "hidden"} flex-none`}>skver's space</p>

    <button
      on:click={() => (isOpen = !isOpen)}
      class="material-symbols-outlined md:block hidden hover:text-neutral-300 active:text-neutral-600 duration-200 cursor-pointer"
    >
      {isOpen ? "menu_open" : "menu"}
    </button>
  </span>
  <div class="flex sm:flex-col lg:gap-1 gap-3 my-1 flex-none">
    {#key $page.url.pathname}
      <Button
        style="side"
        active={$page.url.pathname == "/"}
        on:click={() => goto("/")}
      >
        <span class="material-symbols-outlined">home</span>
        <span class={`${isOpen ? "lg:contents" : "hidden"} hidden flex-none`}>
          about me
        </span>
      </Button>
      <Button
        style="side"
        active={$page.url.pathname == "/projects"}
        on:click={() => goto("/projects")}
      >
        <span class="material-symbols-outlined">code</span>
        <span class={`${isOpen ? "lg:contents" : "hidden"} hidden`}>
          projects
        </span>
      </Button>
      <Button
        style="side"
        active={$page.url.pathname == "/blog"}
        on:click={() => goto("/blog")}
      >
        <span class="material-symbols-outlined">feed</span>
        <span class={`${isOpen ? "lg:contents" : "hidden"} hidden`}>
          blog
        </span>
      </Button>
      <Button
        style="side"
        active={$page.url.pathname == "/contact"}
        on:click={() => goto("/contact")}
      >
        <span class="material-symbols-outlined">person</span>
        <span class={`${isOpen ? "lg:contents" : "hidden"} hidden`}>
          contact
        </span>
      </Button>
    {/key}
  </div>
</Window>
