<script lang="ts">
  import Icon from "@iconify/svelte"
  import "../app.css"
  import { link } from "$lib"
</script>

<div class="app bg-fixed">
  <nav class="
      flex items-center justify-center
      fixed w-full max-w-screen py-3 z-50
      bg-lucy-bg backdrop-blur opacity-80 text-lucy-muted/100
      transition ease-out
      gap-4 md:gap-16
      focus:border-none active:border-none
    ">
    <a id="first" class="justify-items-start font-bold italic font-heading px-0 md:px-4" href="#top">JoseTomanan.io</a>
    <a href="#me">Me</a>
    <a href="#roles">Roles</a>
    <a href="#projects">Projects</a>
    <a class="
        group flex flex-row items-baseline gap-1
        transition-all duration-150 ease-in-out
      " id="clickable-resume" href={ link.resume } target="_blank"
      >
      <span>Resume</span>
      <Icon
          icon="ic:outline-arrow-outward"
          class="w-4 h-4 opacity-50 group-hover:opacity-100"
        />
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
    @apply hover:text-lucy-primary;
  }
</style>