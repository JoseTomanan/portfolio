<script lang="ts">
  import { link } from "$lib";

  let scrollY = $state(0);

  const navTop: number = $derived(Math.max(6, 16 - (scrollY / 80) * 8));
  const navVerticalPadding: number = $derived(Math.max(0, 2 - (scrollY / 80) * 8));
</script>


<svelte:window bind:scrollY />

<div style="top: {navTop}px;"
      class="fixed left-1/2 -translate-x-1/2 z-50 flex flex-row items-center gap-4
          [&>nav]:bg-background/50 [&>nav]:text-foreground [&>nav]:backdrop-blur-sm
          [&>nav]:rounded-full
          [&>nav]:ring [&>nav]:ring-border/20 [&>nav]:w-fit
          [&>nav]:shadow [&>nav]:shadow-border/50
          [&>nav]:flex [&>nav]:flex-row [&>nav]:items-center [&>nav]:align-middle
          [&>nav]:font-medium
          [&>nav>*]:py-2
        ">
  <nav aria-label="Main navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="justify-center gap-6 px-8 sm:gap-10
              *:hover:text-primary
              *:focus-visible:text-primary *:focus-visible:underline
            ">
    <a href="#top">Me</a>
    <a href="#roles">Roles</a>
    <a href="#projects">Projects</a>
    <!-- <a href="#contact">Contact</a> -->
  </nav>

  <nav aria-label="Resume navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="px-6">
    <a id="clickable-resume"
        href={link.cv}
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-row items-center gap-1 underline-offset-2
              hover:text-secondary hover:underline
              focus-visible:text-secondary focus-visible:underline
            ">
      <span>CV</span>
    </a>
  </nav>
</div>
