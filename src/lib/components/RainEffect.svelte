<script lang="ts">
  import { darkModeStore } from "$lib/stores/DarkModeStore";
  import { onDestroy, onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  const raindrops: any[] = [];

  const raindropWidth = 2;
  const raindropHeight = 10;
  let raindropColor = "#AABBFF";
  let currentMonth = new Date().getMonth();
  let isSnowing = currentMonth == 11 || currentMonth == 0 || currentMonth == 1;

  let raindropSpeed = isSnowing ? 2 : 10;
  let maxRaindrops = isSnowing ? 1000 : 200;

  darkModeStore.subscribe((value) => {
    if (value) raindropColor = "#404040";
    else raindropColor = "#AABBFF";
  });

  onMount(() => {
    init();
    if (typeof window !== undefined) {
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
      });
      window.addEventListener("scroll", () => {
        canvas.width = window.innerWidth;
        canvas.height = document.body.scrollHeight;
      });
    }
  });

  const init = () => {
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    if (!ctx) {
      alert("bruh moment detected");
      return;
    }
    run();
  };

  const run = () => {
    ctx!.clearRect(0, 0, canvas.width, canvas.height);
    ctx!.fillStyle = raindropColor;

    raindrops.forEach((raindrop, i) => {
      if (!isSnowing)
        ctx!.fillRect(raindrop.x, raindrop.y, raindropWidth, raindropHeight);
      else {
        ctx!.beginPath();
        ctx!.arc(raindrop.x, raindrop.y, 5, 0, 2 * Math.PI);
        ctx!.fill();
      }
      raindrop.y += raindropSpeed;

      if (raindrop.y > canvas.height) raindrops.splice(i, 1);
    });

    if (raindrops.length < maxRaindrops)
      raindrops.push({
        x: Math.random() * canvas.width,
        y: 0,
      });

    requestAnimationFrame(run);
  };

  onDestroy(() => {
    ctx = null;
  });
</script>

<canvas bind:this={canvas} class="absolute top-0 left-0 -z-10 w-full" />
