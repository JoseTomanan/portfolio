<script lang="ts">
  import { link } from "$lib";
  import Icon from "@iconify/svelte";
</script>


<nav aria-label="Main navigation"
      class="bg-card/80 text-card-foreground
              flex flex-row items-center justify-center align-middle backdrop-blur-sm
              fixed top-4 left-1/2 -translate-x-1/2 w-fit z-50 gap-6 sm:gap-10
              px-8 rounded-full ring ring-border/50
              shadow shadow-border/50
              *:py-2
              *:hover:text-primary
              *:focus-visible:text-primary *:focus-visible:underline
          ">
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
    <Icon icon="ic:outline-arrow-outward"
          class="absolute top-2.5 -right-5 size-4 opacity-0 group-hover/resume:opacity-100" />
  </a>
    <!-- <a href="#contact">Contact</a> -->
</nav>
