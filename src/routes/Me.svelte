<script lang="ts">
  import { fly } from "svelte/transition"
</script>

<span class="jumpable" id="me" />
<div class="page h-auto gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-4 rounded-b-none border-b border-lucy-border">
    <h1>What do I do?</h1>
    <p>
      As a developer, I thrive in the intersection of frontend and backend.
      I have put myself in both shoes&mdash;creating clean UIs with SvelteKit and building solid APIs with Django and Spring Boot.
      These experiences have taught me to aim for detail-driven solutions, resulting in products with codebases that are
      <span class="minor-highlight">as thoughtful as they are functional</span>.
    </p>
  </section>
  
  <section class="flex flex-col gap-2 rounded-t-none">
    <p>
      Outside of work, I prefer to take a break from all the screen time by spending my breaks away from the keyboard.
      I do this by <span class="minor-highlight">being physically active and keeping fit</span>, usually through weightlifting, playing basketball, or running.
    </p>
    
    <p>
      I am also an 
      <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="hoverable-link cursor-help" target="_blank">avid Swiftie</a>: 
      I'd bet my left leg I know more about Taylor Swift than you!
    </p>
  </section>
</div>

<style>
  /* p {
    @apply text-lg;
  } */

  span.minor-highlight {
    @apply font-medium text-lucy-fg hover:text-lucy-tertiary transition ease-linear;
  }
</style>