<script lang="ts">
  import "../app.css";
  import Navbar from "./Navbar.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <title>JoseTomanan.io</title>
  <meta name="description" content="Jose's portfolio" />
  <meta property="og:image" content="https://josetmnn.vercel.app/cover.JPG" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
</svelte:head>

<a href="#me"
    class="sr-only focus:not-sr-only focus:fixed focus:z-[200]
           focus:top-2 focus:left-1/2 focus:-translate-x-1/2
           focus:px-4 focus:py-2 focus:rounded-full
           focus:bg-card focus:text-foreground focus:ring focus:ring-border">
  Skip to content
</a>

<div class="app bg-fixed">
  <Navbar />
  {@render children()}
</div>
