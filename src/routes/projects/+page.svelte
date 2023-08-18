<script>
  import ProjectCard from "$lib/components/ProjectCard.svelte";
</script>

<main>
  <h1>Projects</h1>
  <article>
    <div
      class="flex flex-col justify-center items-center sm:grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-2"
    >
      <ProjectCard
        title="Gen111 Game"
        description="Under PushToWeb, wallet connection, base game"
        link="https://genesissus.eu/gen111/"
        images={["genesis.jpg", "genesis2.png", "genesis3.png"]}
      />
      <ProjectCard
        title="Fitters"
        description="Under PushToWeb"
        link="https://fitters.live"
        images={["fitter.png", "fitter2.png", "fitter3.png"]}
      />
      <ProjectCard
        title="Raraku"
        description="Own, small project"
        link="https://raraku.skver.space"
      />
      <ProjectCard
        title="cé"
        description="Joke on the C language"
        link="https://github.com/skver0/ce"
        images={["ce.png"]}
      />
      <ProjectCard title="obelus" description="Videogame cheat loader" />
      <ProjectCard title="MediMassage" description="Massage website" />
    </div>
  </article>
</main>
