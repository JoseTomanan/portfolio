<script lang="ts">
  import "../app.css"
  import { link } from "$lib"
</script>

<div class="app bg-fixed">
  <nav class="
      flex items-center justify-center
      fixed w-full max-w-screen py-3 z-50
      bg-lucy-surface backdrop-blur-sm opacity-90
      gap-4 md:gap-16
      focus:border-none active:border-none
    ">
  <a id="first" class="justify-items-start font-bold italic font-heading pr-0 md:pr-4" href="#top">JoseTomanan.io</a>
  <a href="#me">Me</a>
  <a href="#roles">Roles</a>
  <a href="#projects">Projects</a>
  <a href={ link.resume } target="_blank">Resume</a>
  <!-- <a href="#contact">Contact</a> -->
</nav>

<premain class="flex justify-center">
  <main class="
    mx-2 flex flex-col gap-10
    w-screen px-2 md:max-w-[840px] md:px-0
  ">
    <slot />
  </main>
</premain>

<footer>
  <h6 class="text-center">
    This page is written with Svelte and Tailwind.
    Feel free to open the codebase to see how I made this!
  </h6>
</footer>
</div>

<style>
  nav > a {
    @apply transition ease-out text-lucy-muted/100 hover:text-lucy-primary;
  }
  
  nav > a#first {
    @apply hover:text-lucy-primary;
  }

  nav > a.hoverable-special {
    @apply hover:text-lucy-secondary;
  }
</style>