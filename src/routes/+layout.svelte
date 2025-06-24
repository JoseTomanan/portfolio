<script lang="ts">
  import "../app.css"
</script>

<div class="app bg-fixed">
  <nav class="
      flex items-center justify-center gap-8
      fixed w-full max-w-screen p-4 z-50
      bg-white backdrop-blur-sm opacity-80
      shadow-xl
      border-b-2 border-none"
    >
  <a class="justify-items-start font-bold italic font-heading" href="#top">JoseTomanan.io</a>
  <a href="#me">Me</a>
  <a href="#roles">Roles</a>
  <a href="#projects">Projects</a>
  <a href="./resume.pdf" class="hoverable-special" target="_blank">Resume</a>
  <!-- <a href="#contact">Contact</a> -->
</nav>

<premain class="flex justify-center">
  <main class="mx-2 max-w-[840px] flex flex-col gap-10">
    <slot />
  </main>
</premain>

<footer class="pt-20 pb-1 text-slate-400">
  <h6 class="text-center shadow-xs">
    This page is written with Svelte and Tailwind.
    Feel free to open the codebase to see how I made this!
  </h6>
</footer>
</div>

<style>
  nav > a {
    @apply transition ease-out hover:text-sky-500;
  }
  
  nav > a.hoverable-special {
    @apply hover:text-amber-500;
  }
</style>