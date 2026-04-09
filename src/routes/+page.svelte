<script lang="ts">
  import Icon from "@iconify/svelte";

  import Top from "./CarouselContent.svelte";
  import Roles from "./Roles.svelte";
  import Projects from "./Projects.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import Separator from "$lib/components/ui/Separator.svelte";

  let startPage: boolean = $state(false);
  
  onMount(() => {
    startPage = true;
  })
</script>



<span class="jumpable h-10" id="top"></span>
<div class="page gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-8 items-center justify-between overflow-clip
                  p-0 pb-8 rounded-b-none border-b border-border">
    <Top/>

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
  </section>

  <section class="flex flex-col md:flex-row gap-1.5 justify-between items-center rounded-t-none p-8">
    <h4>Hi! I'm Jose, a BS CS student from UP Diliman. Welcome aboard!</h4>
    <div class="inline-flex gap-x-2 justify-end items-center h-12
                *:p-2 *:rounded-lg *:text-muted-foreground *:h-fit *:hover:text-foreground *:hover:bg-card">
      <a href={link.li} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Icon icon="fa-brands:linkedin" class="size-6 my-auto" />
      </a>
      <a href={link.gh} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Icon icon="fa-brands:github" class="size-6 my-auto" />
      </a>
      <a href={link.fb} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Icon icon="fa-brands:facebook" class="size-6 my-auto" />
      </a>
      <a href={link.ig} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Icon icon="fa-brands:instagram" class="size-6 my-auto" />
      </a>
    </div>
  </section>
</div>

{#if startPage}
  <span class="jumpable" id="me"></span>
  <div class="page gap-0"
        transition:fly={{ delay: 0, duration: 1000 }}>
    <section class="flex flex-col gap-4 rounded-b-none border-b border-border">
      <h2>What do I do?</h2>
      <p>
        As a developer, I thrive in the intersection of frontend and backend.
        I have put myself in both shoes&mdash;creating clean UIs with SvelteKit and building solid APIs with Django and Spring Boot.
        These experiences have taught me to aim for detail-driven solutions, resulting in products with codebases that are
        <span class="non-link-highlight">as thoughtful as they are functional</span>.
      </p>
    </section>
    
    <section class="flex flex-col gap-2 rounded-t-none">
      <p>
        Outside of work, I prefer to take a break from all the screen time by spending my breaks away from the keyboard.
        I do this by <span class="non-link-highlight">being physically active and keeping fit</span>, usually through weightlifting, playing basketball, or running.
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

  <footer class="inline-flex py-4 w-full justify-between items-center
                  *:text-muted-foreground/40 *:text-sm">
    <p class="text-center px-4 md:px-0">
      Written with Svelte and Tailwind &hearts;
    </p>
    <a href="#top" class="hoverable-link">Back to top</a>
  </footer>
{/if}

<style>
</style>