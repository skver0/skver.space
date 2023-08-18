<script>
  import { page } from "$app/stores";
  import RainEffect from "$lib/components/RainEffect.svelte";
  import SideMenu from "$lib/components/SideMenu.svelte";
  import Window from "$lib/components/Window.svelte";
  import ModalRoot from "$lib/components/modals/ModalRoot.svelte";
  import "../app.css";
</script>

<svelte:head>
  <title>skver.space</title>
  <link rel="icon" href="" />
</svelte:head>

<RainEffect />
<SideMenu />
{#key $page.url.pathname}
  <Window class="w-full">
    <slot />
  </Window>
{/key}
<ModalRoot />
