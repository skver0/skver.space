<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";
  import Window from "$lib/components/Window.svelte";
  import { darkModeStore } from "$lib/stores/DarkModeStore";
  import { get } from "svelte/store";
  let darkState = false;

  darkModeStore.subscribe((value) => {
    if (value) darkState = true;
    else darkState = false;
  });
  let isOpen: boolean = true;
</script>

<Window
  class={`flex flex-col flex-none transition-all duration-200 overflow-hidden ${
    isOpen ? "lg:w-44 items-left" : "items-center"
  } md:w-[2.6rem] w-min`}
>
  <div
    class="pb-1 dark:border-b-neutral-700 dark:text-neutral-400 border-b-neutral-400 border-b lg:flex hidden items-center justify-between gap-2"
  >
    <p class={`pb-1 ${isOpen ? "" : "hidden"} flex-none`}>skver's space</p>
    <div class={`flex ${isOpen ? "flex-row" : "flex-col-reverse"} gap-1`}>
      <Button
        style="side"
        on:click={() => darkModeStore.set(!darkState)}
        class="material-symbols-outlined md:block hidden"
      >
        {darkState ? "light_mode" : "dark_mode"}
      </Button>
      <Button
        style="side"
        on:click={() => (isOpen = !isOpen)}
        class="material-symbols-outlined md:block hidden"
      >
        {isOpen ? "menu_open" : "menu"}
      </Button>
    </div>
  </div>
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
      <Button
        style="side"
        on:click={() => darkModeStore.set(!darkState)}
        class="material-symbols-outlined lg:hidden block"
      >
        {darkState ? "light_mode" : "dark_mode"}
      </Button>
    {/key}
  </div>
</Window>
