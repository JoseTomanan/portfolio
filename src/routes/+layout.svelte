<script lang="ts">
  import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="app bg-fixed">
  <Navbar />

  <div class="flex container justify-center px-0">
    <main>
      <slot />
    </main>
  </div>

  <footer>
    <p>
      This page is written with Svelte and Tailwind.
      Feel free to open the codebase to see how I made this!
    </p>
  </footer>
</div>

<style>
</style>