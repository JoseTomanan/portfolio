<script lang="ts">
  import "../app.css"
  import { link } from "$lib"
</script>

<div class="app bg-fixed">
  <nav class="
      flex items-center justify-center
      fixed w-full max-w-screen py-3 z-50
      bg-lucy-bg backdrop-blur opacity-80
      gap-4 md:gap-16
      focus:border-none active:border-none
    ">
  <a id="first" class="justify-items-start font-bold italic font-heading pr-0 md:pr-4" href="#top">JoseTomanan.io</a>
  <a href="#me">Me</a>
  <a href="#roles">Roles</a>
  <a href="#projects">Projects</a>
  <a
    id="clickable-resume" href={ link.resume } target="_blank"
    class="flex flex-row items-baseline transition-all duration-150 ease-in-out gap-1"
    >
    <span>Resume</span>
    <svg
        class="imported-icon" id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
      >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  </a>
  <!-- <a href="#contact">Contact</a> -->
</nav>

<premain class="flex justify-center">
  <main class="
      flex flex-col gap-8 mx-2 my-12
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
    @apply transition ease-out text-lucy-muted/100 hover:text-lucy-primary opacity-100;
  }
  
  nav > a#first {
    @apply hover:text-lucy-primary;
  }

  .imported-icon {
    opacity: 0;
    transition: opacity 0.15s ease-in-out;
  }

  nav > a#clickable-resume:hover .imported-icon {
    opacity: 1;
  }
</style>