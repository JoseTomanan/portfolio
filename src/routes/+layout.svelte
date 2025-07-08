<script lang="ts">
  import "../app.css"
	import Navbar from "$lib/components/Navbar.svelte"
</script>

<div class="app bg-fixed">
  <Navbar />

  <premain class="flex justify-center">
    <main class="
        flex flex-col gap-10 mx-2 my-12
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
</style>