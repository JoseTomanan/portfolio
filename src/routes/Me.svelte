<script lang="ts">
  import { fly } from "svelte/transition"
</script>

<page class="h-auto gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <jumpable id="me" />
  <section class="flex flex-col gap-2 pb-4 rounded-b-none border-b border-lucy-border">
    <h2>What do I do?</h2>
    <p>
      As a developer, I appreciate the philosophy of <span class="hoverable-link">code craftsmanship</span>, i.e. the use of sustainable design patterns and tech principles to build maintainable codebases.
      I've applied this in frontend, creating web designs using Svelte and Tailwind, as well as in backend, building APIs with Django and Spring Boot.
    </p>
    <p>
      I bring these principles into my projects, as I feel that this is ultimately what makes an application's codebase "timeless": its intuitiveness.
    </p>
  </section>
  
  <section class="flex flex-col gap-2 rounded-t-none pt-4 ">
    <p>
      Outside of work, I prefer to take a break from all the screen time by spending my free time away from the keyboard &mdash;
      I do this by <span class="hoverable-link">being physically active and keeping fit</span>, usually through weightlifting, playing basketball, or running.
    </p>
    
    <p>
      I am also an 
      <a href="https://www.instagram.com/p/B6p4rR_hoUC/" class="hoverable-link" target="_blank">avid Swiftie</a>: 
      I'd bet my left leg I know more about Taylor Swift than you!
    </p>
  </section>
</page>

<style>

</style>