<script lang="ts">
	import { link } from "$lib";
	import Icon from "@iconify/svelte";
</script>

<nav class="flex items-center justify-center
			fixed w-full max-w-screen py-2.5 z-50
			gap-4 md:gap-16
			focus:border-none active:border-none">
	<a href="#top" id="first"
				class="justify-items-start font-bold italic font-heading px-0 md:px-4">
		JoseTomanan.io
	</a>
	<a href="#me">Me</a>
	<a href="#roles">Roles</a>
	<a href="#projects">Projects</a>
	<a id="clickable-resume" href={ link.resume } target="_blank"
		class="group flex flex-row items-baseline gap-1">
		<span>Resume</span>
		<div class="size-4">
			<Icon icon="ic:outline-arrow-outward"
						class="size-4 opacity-0 group-hover:opacity-100" />
		</div>
	</a>
	<!-- <a href="#contact">Contact</a> -->
</nav>

<style>
  nav > a {
    @apply hover:text-lucy-primary;
  }
</style>