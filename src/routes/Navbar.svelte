<script lang="ts">
  import { link } from "$lib";

  let scrollY = $state(0);

  const navTop: number = $derived(Math.max(4, 16 - (scrollY / 80) * 4));
  const navVerticalPadding: number = $derived(Math.max(0, 4 - (scrollY / 80) * 4));
</script>


<svelte:window bind:scrollY />

<div style="top: {navTop}px;"
      class="fixed left-1/2 -translate-x-1/2 z-50
          flex flex-row items-center gap-x-0.5
          [&>nav]:bg-card/50 [&>nav]:text-foreground [&>nav]:backdrop-blur-sm
          [&>nav]:ring [&>nav]:ring-border
          [&>nav]:shadow [&>nav]:shadow-border/50
          [&>nav]:px-8 [&>nav]:w-fit
          [&>nav]:flex [&>nav]:flex-row [&>nav]:items-center [&>nav]:align-middle
          [&>nav]:font-medium
          [&>nav>*]:py-2
        ">
  <nav aria-label="Main navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="justify-center gap-10
              rounded-l-full
              *:hover:text-primary
              *:focus-visible:text-primary *:focus-visible:underline
            ">
    <a href="#me">Me</a>
    <a href="#projects">Projects</a>
    <a href="#roles">Roles</a>
    <!-- <a href="#contact">Contact</a> -->
  </nav>

  <nav aria-label="Resume navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="rounded-r-full">
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
