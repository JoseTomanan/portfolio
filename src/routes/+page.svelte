<script lang="ts">
  import Icon from "@iconify/svelte";

  import CarouselContent from "./CarouselContent.svelte";
  import Roles from "./Roles.svelte";
  import Projects from "./Projects.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import { onMount, onDestroy } from "svelte";
  import { activeSection } from "$lib/stores/activeSection";

  let observer: IntersectionObserver;

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.set(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    document.querySelectorAll("span.jumpable[id]").forEach((el) => {
      observer.observe(el);
    });
  });

  onDestroy(() => observer?.disconnect());
</script>


<main-div class="flex flex-col gap-6 mt-12 px-2 w-full max-w-[840px] mx-auto">
  <span class="jumpable h-6" id="top"></span>
  <div class="page gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
    <section class="section-body gap-8 items-center justify-between overflow-clip
                    p-0 pb-8">
      <CarouselContent/>

      <div class="flex flex-col items-center justify-center gap-0">
        <h1 class="hero-text">Jose Tomanan</h1>
        <h3 class="font-heading font-semibold text-muted-foreground px-4 text-center tracking-tight">
          Tech buff &middot;
          <span class="magic-text">
            Full-stack web developer
          </span>
          &middot; Gym rat
        </h3>
      </div>
      <h4 class="text-center">
        Hello there! I'm Jose, a BS CS student from UP Diliman. Thank you for visiting!
      </h4>
    </section>
  </div>

  <span class="jumpable" id="me"></span>
  <div class="page gap-0"
        transition:fly={{ delay: 0, duration: 1000 }}>
    <section class="section-body gap-4 rounded-b-none border-b border-border">
      <h2>What do I do?</h2>
      <p>
        As a developer, I thrive in the intersection of frontend and backend.
        I have put myself in both shoes&mdash;creating clean UIs with SvelteKit and building solid APIs with Django and Spring Boot.
        These experiences have taught me to aim for detail-driven solutions, resulting in products with codebases that are
        <span class="non-link-highlight">as thoughtful as they are functional</span>.
      </p>
    </section>
    
    <section class="section-body gap-2 rounded-t-none">
      <p>
        Outside of work, I like to play competitive FPS games like Valorant and CS2, where I can unwind and get my mind off of work.
        I also choose to take a break from all the screen time by
        <span class="non-link-highlight">being physically active and keeping fit</span>, usually through running, weightlifting, or playing basketball.
      </p>
      
      <p>
        I am also an 
        <a href={link.ig_swiftie} class="hoverable-link" target="_blank" rel="noopener noreferrer">avid Swiftie</a>: 
        I'd bet my left leg I know more about Taylor Swift than you!
      </p>
    </section>
  </div>
  
  <Roles />
  
  <Projects />

  <footer class="flex flex-wrap py-4 w-full items-center
                *:text-muted-foreground/40 *:text-sm">
    <p class="text-center px-0">
      Written with Svelte and Tailwind &hearts;
    </p>
    <a href="#top" class="hoverable-link ml-auto">
      Back to top
    </a>
    <div class="inline-flex justify-end items-center ml-auto
                  *:p-2 *:rounded-lg *:text-muted-foreground *:h-fit *:hover:text-foreground *:hover:bg-card">
      <a href={link.li} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Icon icon="fa-brands:linkedin" class="size-4 my-auto" />
      </a>
      <a href={link.gh} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Icon icon="fa-brands:github" class="size-4 my-auto" />
      </a>
      <a href={link.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Icon icon="fa-brands:facebook" class="size-4 my-auto" />
      </a>
      <a href={link.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Icon icon="fa-brands:instagram" class="size-4 my-auto" />
      </a>
    </div>
  </footer>
</main-div>
