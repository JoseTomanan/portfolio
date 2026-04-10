<script lang="ts">
  import { link } from "$lib";
  import IcOutlineArrowOutward from '~icons/ic/outline-arrow-outward';

  let scrollY = $state(0);

  const navTop: number = $derived(Math.max(6, 16 - (scrollY / 80) * 8));
</script>


<svelte:window bind:scrollY />

<nav aria-label="Main navigation"
      style="top: {navTop}px;"
      class="bg-background/50 text-foreground
              flex flex-row items-center justify-center align-middle backdrop-blur-sm
              fixed left-1/2 -translate-x-1/2 w-fit z-50 gap-6 sm:gap-10
              px-8 rounded-full ring ring-border/20
              shadow shadow-border/50
              *:py-2 *:font-medium
              *:hover:text-primary
              *:focus-visible:text-primary *:focus-visible:underline
            ">
  <a href="#top">Me</a>
  <a href="#roles">Roles</a>
  <a href="#projects">Projects</a>
  <a id="clickable-resume"
      href={ link.cv }
      target="_blank"
      rel="noopener noreferrer"
      class="relative group/resume flex flex-row items-baseline gap-1 w-fit">
    <span>CV</span>
    <IcOutlineArrowOutward
          class="absolute top-2.5 -right-5 size-4 opacity-0 group-hover/resume:opacity-100" />
  </a>
    <!-- <a href="#contact">Contact</a> -->
</nav>
