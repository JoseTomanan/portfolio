<script lang="ts">
  import Carousel from "$lib/components/Carousel.svelte"
  import { link } from "$lib"
  import { fly } from "svelte/transition"
  
  const header: {logo: string, color:string, link:string, handle:string}[] = [
    { logo: "/logo/li.png", color: "hover:from-sky-200 hover:to-sky-300", link: link.li, handle: "jedtomanan" },
    { logo: "/logo/gh.svg", color: "hover:from-purple-200 hover:to-purple-300", link: link.gh, handle: "HoweZae" },
    { logo: "/logo/fb.png", color: "hover:from-blue-200 hover:to-blue-300", link: link.fb, handle: "jedtomanan" },
    { logo: "/logo/ig.png", color: "hover:from-red-100 hover:to-red-200", link: link.ig, handle: "jose.tmnn" },
    { logo: "/logo/twt.png", color: "hover:from-sky-100 hover:to-sky-200", link: link.twt, handle: "howe_zae" },
  ]
</script>

<page class="mt-24 h-auto gap-0 fade-in" transition:fly={{ delay: 100, duration: 1000 }}>
  <jumpable id="top" />

  <section class="flex flex-col gap-4 items-center justify-between overflow-hidden p-0 pb-4 mt-4 border-b-4 border-lucy-bg">
    <Carousel />
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold text-lucy-fg">Jose Tomanan</h1>
      <h3 class="text-lucy-muted px-4 text-center">CS major · Full-stack web developer · Gym rat</h3>
    </div>
  </section>
  
  <section class="shrink flex flex-col gap-1.5 items-baseline rounded-t-none pt-3">
    <h4>
      Hey! I'm Jose, a BS Computer Science junior from UP Diliman.
      <!--
      <a id="see-resume" class="text-lucy-surface hover:text-lucy-secondary transition-all ease-out" href="./resume.pdf" target="_blank">
        <span>Visit my resume!</span>
        <svg id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
      -->
    </h4>

    <div class="flex gap-1 w-full">
      {#each header as image}
        <button type="button" class="
          grow flex justify-center bg-gradient-to-b bg-lucy-surface-alt hover:bg-lucy-hover active:from-slate-100 active:to-slate-100 p-2 rounded-xl transition-all ease-out
        ">
          <a href={ image.link } target="_blank">
            <img class="h-6" src={image.logo} alt="Logo" />
          </a>
        </button>
      {/each}
    </div>
  </section>
</page>

<style>
  /*
  #link {
    opacity: 0;
  }
  #see-resume {
    @apply inline-flex gap-0.5;
  }
  #see-resume:hover {
    @apply gap-2 text-lucy-secondary;
  }
  #see-resume:hover #link {
    opacity: 1;
  }
  */
</style>