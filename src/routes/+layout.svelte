<script>
  import { page } from "$app/stores";
  import JumpToTop from "$lib/components/JumpToTop.svelte";
  import RainEffect from "$lib/components/RainEffect.svelte";
  import SideMenu from "$lib/components/SideMenu.svelte";
  import Window from "$lib/components/Window.svelte";
  import ModalRoot from "$lib/components/modals/ModalRoot.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { darkModeStore } from "$lib/stores/DarkModeStore";
  import { get } from "svelte/store";
  import { browser } from "$app/environment";

  onMount(() => {
    if (get(darkModeStore)) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  });

  $: darkModeStore.subscribe((value) => {
    if (browser && typeof document !== "undefined")
      if (value) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
  });
</script>

<svelte:head>
  <title>skver.space</title>
  <link rel="icon" href="" />
</svelte:head>

<JumpToTop>
  <RainEffect />
  <SideMenu />
  {#key $page.url.pathname}
    <Window class="w-full">
      <slot />
    </Window>
  {/key}
  <ModalRoot />
</JumpToTop>
