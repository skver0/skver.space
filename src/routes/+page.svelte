<script lang="ts">
  import DockerLogo from "$lib/assets/logos/docker.svg?component";
  import TailwindLogo from "$lib/assets/logos/Tailwind_CSS_Logo.svg?component";
  import TypescriptLogo from "$lib/assets/logos/Typescript.svg?component";
  import SvelteLogo from "$lib/assets/logos/Svelte_Logo.svg?component";
  import NodeLogo from "$lib/assets/logos/Node.js_logo.svg?component";
  import GitLogo from "$lib/assets/logos/Git_icon.svg?component";
  import NextLogo from "$lib/assets/logos/Nextjs-logo.svg?component";
  import ReactLogo from "$lib/assets/logos/React-icon.svg?component";
  import VueLogo from "$lib/assets/logos/Vue.js_Logo_2.svg?component";
</script>

<main>
  <h1>About me</h1>
  <article>
    <p>Hello! My name is <b>Károly Sárdi</b>, also known as <b>skver</b>.</p>
    <p>
      I'm a 20 years old student from Hungary, currently studying at the <br /> Eötvös
      Loránd University, Faculty of Informatics.
    </p>
    <p>
      Currently I'm maintaining a few projects of mine such as
      <a href="https://raraku.skver.space">Raraku</a> and I've been programming for
      about 8 years now.
    </p>
    <p>
      Some technologies I'm familiar with: <br />
      <span class="grid grid-cols-7 md:flex gap-2">
        <a href="https://docker.com" target="_blank">
          <DockerLogo
            class="w-10 h-10 dark:fill-neutral-200 fill-neutral-700"
          />
        </a>
        <a href="https://git-scm.com/" target="_blank">
          <GitLogo class="w-10 h-10 dark:fill-neutral-200 fill-neutral-700" />
        </a>
        <a href="https://nextjs.org/" target="_blank">
          <NextLogo class="w-10 h-10 dark:fill-neutral-200 fill-neutral-700" />
        </a>
        <a href="https://nodejs.org" target="_blank">
          <NodeLogo class="w-10 h-10 dark:fill-neutral-200 fill-neutral-700" />
        </a>
        <a href="https://react.dev/" target="_blank">
          <ReactLogo class="w-8 h-8 dark:fill-neutral-200 fill-neutral-700" />
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          <TailwindLogo
            class="w-10 h-10 dark:fill-neutral-200 fill-neutral-700"
          />
        </a>
        <a href="https://typescriptlang.org/" target="_blank">
          <TypescriptLogo
            class="w-10 h-10 dark:text-neutral-200 text-neutral-700"
          />
        </a>
        <a href="https://kit.svelte.dev/" target="_blank">
          <SvelteLogo class="w-8 h-8 dark:fill-neutral-200 fill-neutral-700" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <VueLogo class="w-8 h-8 dark:fill-neutral-200 fill-neutral-700" />
        </a>
      </span>
    </p>
    <p class="pb-0">
      Interests of mine include: <br />
      - Programming <br />
      - Music <br />
      - Manga <br />
    </p>
  </article>
</main>
