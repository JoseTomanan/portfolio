<script lang="ts">
  import "../app.css"
	import Navbar from "$lib/components/Navbar.svelte"
</script>

<div class="app bg-fixed">
  <Navbar />

  <premain class="flex container justify-center px-0">
    <main>
      <slot />
    </main>
  </premain>

  <footer>
    <h6>
      This page is written with Svelte and Tailwind.
      Feel free to open the codebase to see how I made this!
    </h6>
  </footer>
</div>

<style>
</style>