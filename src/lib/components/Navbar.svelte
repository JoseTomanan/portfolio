<script lang="ts">
	import { link } from "$lib";
	import Icon from "@iconify/svelte";
</script>

<nav class="flex flex-row items-center justify-center align-middle
			fixed w-screen mx-auto py-2.5 z-50 gap-[min(10%,4em)]
			focus:border-none active:border-none">
	<a href="#top" id="first"
				class="justify-items-start font-bold italic font-heading hidden sm:inline">
		JoseTomanan.io
	</a>
	<a href="#me">Me</a>
	<a href="#roles">Roles</a>
	<a href="#projects">Projects</a>
	<a id="clickable-resume" href={ link.resume } target="_blank"
				class="relative group/resume flex flex-row items-baseline gap-1 w-fit">
		<span>Resume</span>
		<Icon icon="ic:outline-arrow-outward"
					class="absolute top-0.5 -translate-1/2 -right-5 size-4 opacity-0 group-hover/resume:opacity-100" />
	</a>
		<!-- <a href="#contact">Contact</a> -->
</nav>

<style>
  nav > a {
    @apply hover:text-lucy-primary;
  }
</style>