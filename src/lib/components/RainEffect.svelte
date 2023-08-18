<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  const raindrops: any[] = [];
  const maxRaindrops = 200;
  const raindropSpeed = 10;
  const raindropWidth = 2;
  const raindropHeight = 10;
  const raindropColor = "#404040";

  onMount(() => {
    init();
    if (typeof window !== undefined)
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
  });

  const init = () => {
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
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
      ctx!.fillRect(raindrop.x, raindrop.y, raindropWidth, raindropHeight);
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

<div class="absolute inset-0 w-full h-full -z-10">
  <canvas bind:this={canvas} class="w-full h-full" />
</div>
