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

  function updateActiveSection() {
    const threshold = window.innerHeight * 0.35;
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


<main-div class="flex flex-col gap-y-6 mt-12 px-2 w-full max-w-[840px] mx-auto">
  <span class="jumpable h-6" id="top"></span>
  <div class="page gap-0"
        data-section="top"
        transition:fly={{ delay: 100, duration: 1000 }}
        class:section-active={$activeSection === 'top'}>
    <section class="section-body gap-8 items-center justify-between overflow-clip
                    px-4 pt-0 pb-8">
      <CarouselContent/>

      <div class="flex flex-col items-center justify-center gap-0">
        <h1 class="font-extrabold">Jose Tomanan</h1>
        <h2 class="font-heading font-semibold text-foreground px-4 text-center tracking-tight">
          Tech buff &middot;
          <span class="magic-text">Full-stack web developer</span>
          &middot; Gym rat
        </h2>
      </div>
      <h3 class="text-center">
        Hi! I'm Jose, a CS student from UP Diliman 👋
      </h3>
    </section>
  </div>

  <span class="jumpable" id="me"></span>
  <div class="page gap-0"
        data-section="me"
        transition:fly={{ delay: 0, duration: 1000 }}
        class:section-active={$activeSection === 'me'}>
    <section class="section-body gap-4 rounded-b-none border-b border-border">
      <h2>About me</h2>
      <p>
        I am a full-stack developer comfortable on both ends &mdash; clean UIs with SvelteKit, solid APIs with Django &amp; Spring Boot.
        I am detail-driven; I write code that is
        <span class="non-link-highlight">as thoughtful as it is functional.</span>
      </p>
    </section>
    
    <section class="section-body gap-2 rounded-t-none">
      <p>
        Off the clock: competitive FPS (Valorant, CS2), and
        <span class="non-link-highlight">physical activity:</span>
        running, weightlifting, basketball.
        <br>
        I am also an 
        <a href={link.ig_swiftie} class="hoverable-link" target="_blank" rel="noopener noreferrer">avid Swiftie</a>: 
        I'd bet my left leg I know more about Taylor Swift than you!
      </p>
    </section>
  </div>
  
  <Projects />
  <Roles />

  <footer class="flex flex-wrap py-4 w-full items-center
                gap-x-4
                border-t border-border mt-2
                *:text-muted-foreground/40 *:text-sm">
    <p class="text-center px-0">
      Written in Svelte and Tailwind &hearts;
    </p>
    <a href="#top" class="hoverable-link ml-auto">
      Back to top
    </a>
    <div class="inline-flex justify-end items-center ml-auto
                  *:p-2 *:rounded-lg *:text-muted-foreground *:h-fit
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
</main-div>
