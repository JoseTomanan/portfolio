<script lang="ts">
  import { link } from "$lib";
  import IcOutlineArrowOutward from '~icons/ic/outline-arrow-outward';

  let scrollY = 0;

  // top-4 = 16px, top-2 = 8px. Lerp over the first 80px of scroll.
  $: navTop = Math.max(8, 16 - (scrollY / 80) * 8);
</script>

<svelte:window bind:scrollY />

<nav aria-label="Main navigation"
      style="top: {navTop}px;"
      class="bg-card/80 text-card-foreground
              flex flex-row items-center justify-center align-middle backdrop-blur-sm
              fixed left-1/2 -translate-x-1/2 w-fit z-50 gap-6 sm:gap-10
              px-8 rounded-full ring ring-border/20
              shadow shadow-border/50
              *:py-2
              *:hover:text-primary
              *:focus-visible:text-primary *:focus-visible:underline
          "
>
  <a href="#top" id="first"
        class="justify-items-start font-bold italic font-heading hidden sm:inline">
    JoseTomanan.io
  </a>
  <a href="#me">Me</a>
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
