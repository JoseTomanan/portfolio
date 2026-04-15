<script lang="ts">
  import { link } from "$lib";
  import { activeSection } from "$lib/utils";

  let scrollY = $state(0);

  const navTop: number = $derived(Math.max(4, 16 - (scrollY / 80) * 4));
  const navVerticalPadding: number = $derived(Math.max(0, 4 - (scrollY / 80) * 4));
</script>


<svelte:window bind:scrollY />

<div style="top: {navTop}px;"
      class="fixed left-1/2 -translate-x-1/2 z-50
          flex flex-row items-center gap-x-0.5
          [&>nav]:w-fit
          [&>nav]:bg-card/50 [&>nav]:text-foreground [&>nav]:backdrop-blur-sm
          [&>nav]:ring [&>nav]:ring-border
          [&>nav]:shadow [&>nav]:shadow-border/50
          [&>nav]:px-8 [&>nav]:first:pr-6 [&>nav]:last:pl-6
          [&>nav]:first:rounded-l-full [&>nav]:last:rounded-r-full
          [&>nav]:flex [&>nav]:flex-row [&>nav]:items-center [&>nav]:align-middle
          [&>nav>*]:py-1.5
        ">
  <nav aria-label="Main navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="justify-center gap-10
              [&>a:not(.text-primary):hover]:text-foreground *:hover:text-shadow-glow
              [&>a:not(.text-primary):focus-visible]:text-foreground *:focus-visible:text-shadow-glow *:focus-visible:underline
            ">
    <a href="#me" class:text-primary={$activeSection === 'me'}>Me</a>
    <a href="#projects" class:text-primary={$activeSection === 'projects'}>Projects</a>
    <a href="#roles" class:text-primary={$activeSection === 'roles'}>Roles</a>
    <!-- <a href="#contact">Contact</a> -->
  </nav>

  <nav aria-label="Resume navigation"
        style="padding-block: {navVerticalPadding}px;"
        class="justify-center
                *:hover:text-secondary
                *:focus-visible:text-secondary *:focus-visible:underline
              ">
    <a id="clickable-resume"
        href={link.cv}
        target="_blank"
        rel="noopener noreferrer">
      <span>CV</span>
    </a>
  </nav>
</div>
