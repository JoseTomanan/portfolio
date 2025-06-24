<script lang="ts">
  import { fly } from "svelte/transition"
</script>

<page class="h-auto gap-0.5" transition:fly={{ delay: 100, duration: 1000 }}>
  <jumpable id="me" />
  <section class="flex flex-col gap-1.5 mt-3.5 rounded-b-none">
    <h2>What do I do?</h2>
    <p>
      As a developer, I enjoy <span id="special">full-stack software development.</span>
      I am experienced in the frontend side &mdash; creating prototypes in Figma and using Svelte to implement this appearance, as well as the backend side &mdash; building APIs with Django and Spring Boot.
      I feel that I thrive in this field, and I would love the opportunity to do more of this in my career.
    </p>
  <!-- </section>
  
  <section class="flex flex-col gap-1.5 rounded-t-none"> -->
    <p>
      Outside of work, I prefer to spend my time away from the keyboard than in front of it.
      I like to stay physically active and explore different things, but my favorite way to spend my free time is through
      <span class="hoverable-link">weightlifting</span>,
      <span class="hoverable-link">playing chess</span> and
      <span class="hoverable-link">playing basketball</span>.
    </p>
    
    <p>
      I am also an 
      <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="hoverable-link" target="_blank">avid Swiftie</a>: 
      I'd bet my left leg I know more about Taylor Swift than you!
    </p>
  </section>
</page>

<style>
  span#special {
    @apply font-bold text-sky-500 hover:text-amber-500 transition-colors ease-out;
    /* TODO: WORK IN PROGRESS! */
  }
</style>