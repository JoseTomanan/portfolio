<script lang="ts">
  import "../app.css";
  import Navbar from "./Navbar.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<div class="app bg-fixed">
  <Navbar />

  <div class="flex container justify-center px-0">
    <main>
      {@render children()}
    </main>
  </div>
</div>
