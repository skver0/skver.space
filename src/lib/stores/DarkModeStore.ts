import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const darkModeStore = writable((browser && localStorage.getItem("darkMode") === "true") || (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) || false);

darkModeStore.subscribe((value) => {
  if (browser) {
    localStorage.setItem("darkMode", value.toString());
  }
});