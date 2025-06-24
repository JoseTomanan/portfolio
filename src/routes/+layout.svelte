<script lang="ts">
  import "../app.css"
</script>

<div class="app bg-fixed">
  <nav class="
      flex items-center justify-center gap-16
      fixed w-full max-w-screen p-3 z-50
      bg-lucy-surface backdrop-blur-sm opacity-90"
    >
  <a class="justify-items-start font-bold italic font-heading hoverable-special pr-4" href="#top">JoseTomanan.io</a>
  <a href="#me">Me</a>
  <a href="#roles">Roles</a>
  <a href="#projects">Projects</a>
  <a href="./resume.pdf" target="_blank">Resume</a>
  <!-- <a href="#contact">Contact</a> -->
</nav>

<premain class="flex justify-center">
  <main class="mx-2 max-w-[840px] flex flex-col gap-10">
    <slot />
  </main>
</premain>

<footer class="pt-20 pb-1 text-lucy-muted">
  <h6 class="text-center">
    This page is written with Svelte and Tailwind.
    Feel free to open the codebase to see how I made this!
  </h6>
</footer>
</div>

<style>
  nav > a {
    @apply transition ease-out text-lucy-fg hover:text-lucy-primary;
  }
  
  nav > a.hoverable-special {
    @apply hover:text-lucy-secondary;
  }
</style>