<script lang="ts">
  import Icon from "@iconify/svelte";

  import Carousel from "$lib/components/Carousel.svelte"
  import { link } from "$lib"
  import { fly } from "svelte/transition"

  const header: {iconifyTag: string, color: string, link: string, handle: string}[] = [
    {
      iconifyTag: "bi:linkedin",
      color: "hover:from-sky-200 hover:to-sky-300",
      link: link.li,
      handle: "jedtomanan"
    },
    {
      iconifyTag: "bi:github",
      color: "hover:from-purple-200 hover:to-purple-300",
      link: link.gh,
      handle: "HoweZae"
    },
    {
      iconifyTag: "bi:facebook",
      color: "hover:from-blue-200 hover:to-blue-300",
      link: link.fb,
      handle: "jedtomanan"
    },
    {
      iconifyTag: "bi:instagram",
      color: "hover:from-red-100 hover:to-red-200",
      link: link.ig,
      handle: "jose.tmnn"
    },
  ]
</script>

<span class="jumpable" id="top" />
<div class="page h-auto gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <!-- <div class="h-4" /> -->

  <section class="flex flex-col gap-8 items-center justify-between overflow-hidden p-0 pb-8 rounded-b-none border-b border-lucy-border">
    <Carousel />
    <div class="flex flex-col items-center justify-center gap-0">
      <h1 class="font-bold text-lucy-fg tracking-wide">Jose Tomanan</h1>
      <h3 class="font-heading font-medium text-lucy-muted px-4 text-center tracking-tight">
        CS major · Full-stack web developer · Gym rat
      </h3>
    </div>
  </section>

  <section class="flex md:flex-row gap-1.5 items-center rounded-t-none px-8 pt-8">
    <h4>
      Hi! I'm Jose, a <span id="special">full-stack web developer</span> from UP Diliman.
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

    <div class="flex-1" />

    <div class="flex gap-2 justify-end">
      {#each header as image}
        <div class="flex justify-center bg-gradient-to-b rounded-xl transition-all ease-out bg-transparent">
          <a href={ image.link } target="_blank">
            <Icon
                icon={ image.iconifyTag }
                class="h-5 w-5 text-lucy-muted hover:text-lucy-primary"
              />
          </a>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  span#special {
    @apply hover:text-lucy-tertiary transition-colors ease-out;
    /* TODO: WORK IN PROGRESS! */
  }
</style>