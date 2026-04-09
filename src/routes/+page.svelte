<script lang="ts">
  import Top from "./Top.svelte";
  import Roles from "./Roles.svelte";
  import Projects from "./Projects.svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";

  let startPage: boolean = $state(false);
  
  onMount(() => {
    startPage = true;
  })
</script>



<Top />

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

  <footer>
    <p>Written with Svelte and Tailwind &hearts;</p>
  </footer>
{/if}

<style>
</style>