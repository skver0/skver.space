import { writable } from "svelte/store";
import { browser } from "$app/environment";

export const darkModeStore = writable((browser && localStorage.getItem("darkMode") === "true") || false);

darkModeStore.subscribe((value) => {
  if (browser) {
    localStorage.setItem("darkMode", value.toString());
  }
});