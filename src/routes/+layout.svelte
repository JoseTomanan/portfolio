<script lang="ts">
  import "../app.css";
	import Navbar from "./Navbar.svelte";
</script>

<div class="app bg-fixed">
  <Navbar />

  <div class="flex container justify-center px-0">
    <main>
      <slot />
    </main>
  </div>
</div>
