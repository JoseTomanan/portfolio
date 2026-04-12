<script lang="ts">
  import FaBrandsLinkedin from '~icons/fa-brands/linkedin';
  import FaBrandsGithub from '~icons/fa-brands/github';
  import FaBrandsFacebook from '~icons/fa-brands/facebook';
  import FaBrandsInstagram from '~icons/fa-brands/instagram';

  import CarouselContent from "./CarouselContent.svelte";
  import Roles from "./Roles.svelte";
  import Projects from "./Projects.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import { onMount } from "svelte";
  import { activeSection } from "$lib/utils";

  let scrollY = $state(0);
  const parallaxY: number = $derived(scrollY * 0.50);

  function updateActiveSection() {
    const threshold = window.innerHeight * 0.45;
    let current: string | null = null;
    for (const el of document.querySelectorAll<HTMLElement>("div.page[data-section]")) {
      if (el.getBoundingClientRect().top <= threshold)
        current = el.dataset.section!;
    }
    activeSection.set(current);
  }

  onMount(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  });
</script>



<svelte:window bind:scrollY />

<main-div class="max-w-[840px] flex flex-col
                  gap-y-6 px-2 w-full mx-auto">
  <span class="jumpable h-6" id="top"></span>
  <div class="page border-0 gap-0 overflow-visible"
        data-section="top"
        transition:fly={{ delay: 100, duration: 1000 }}>
    <section style="transform: translateY({parallaxY}px);"
              class="section-body
                    bg-transparent -mt-4 h-[90dvh]
                    flex flex-col-reverse sm:flex-row
                    justify-center items-center gap-y-8
                  ">
      <div class="sm:flex-1 flex flex-col items-center gap-y-4
                  *:w-full *:text-center *:sm:text-left">
        <h1 class="font-extrabold">Jose Tomanan</h1>
        <h2 class="flex flex-col font-heading font-semibold text-muted-foreground tracking-tight">
          <span>Tech enthusiast</span>
          <span>Fitness junkie</span>
          <span class="magic-text">
            <!-- &ThickSpace;&middot; -->
            Full-stack web developer
            <!-- &middot;&ThickSpace; -->
          </span>
        </h2>
      </div>

      <CarouselContent/>
    </section>
  </div>

  <span class="jumpable" id="me"></span>
  <div class="page gap-0 z-5"
        data-section="me"
        transition:fly={{ delay: 0, duration: 1000 }}
        class:section-active={$activeSection === 'me'}>
    <section class="section-body gap-4 rounded-b-none border-b border-border">
      <h2>About me</h2>
      <p>
        Hello! I am Jose, a <span class="non-link-highlight">CS student from UP Diliman</span> and a full-stack developer comfortable on both ends &mdash; clean UIs with Svelte5 &amp; React, bugless APIs with Django &amp; Spring Boot.
        I am detail-driven; I write code that is
        <span class="non-link-highlight">as thoughtful as it is functional.</span>
      </p>
    </section>
    
    <section class="section-body gap-2 rounded-t-none">
      <p>
        Off the clock, I play competitive FPS (Valorant, CS2), and
        <span class="non-link-highlight">physical activity:</span>
        running, lifting, basketball.
        I am also an 
        <a href={link.ig_swiftie} class="hoverable-link" target="_blank" rel="noopener noreferrer">avid Swiftie</a>: 
        I'd bet my left leg I know more about Taylor Swift than you!
      </p>
    </section>
  </div>
  
  <Projects />
  <Roles />

</main-div>

<div class="container">
  <footer class="flex flex-wrap w-full justify-between items-end gap-x-4 gap-y-0
                h-32
                border-t border-border mt-10 mb-4
                *:text-muted-foreground/40 *:text-sm">
    <p class="text-center hidden sm:inline">
      Written in Svelte and Tailwind &hearts;
    </p>
    <a href="#top" class="hoverable-link">
      Back to top
    </a>
    <div class="inline-flex gap-x-3 justify-end items-center
                  *:rounded-lg *:text-muted-foreground *:h-fit
                  *:hover:text-foreground *:hover:bg-card">
      <a href={link.li} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaBrandsLinkedin class="size-4 my-auto" />
      </a>
      <a href={link.gh} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaBrandsGithub class="size-4 my-auto" />
      </a>
      <a href={link.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaBrandsFacebook class="size-4 my-auto" />
      </a>
      <a href={link.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaBrandsInstagram class="size-4 my-auto" />
      </a>
    </div>
  </footer>
</div>
