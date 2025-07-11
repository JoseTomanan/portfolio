<script lang="ts">
  import Icon from "@iconify/svelte";

	import Autoplay from "embla-carousel-autoplay"
  import * as Carousel from "$lib/components/ui/carousel/index"

  import { link } from "$lib"
  import { fly } from "svelte/transition"

  const header: {iconifyTag: string, color: string, link: string, handle: string}[] = [
    {
      iconifyTag: "bi:linkedin",
      color: "hover:from-sky-200 hover:to-sky-300",
      link: link.li,
      handle: "jedtomanan"
    },
    {
      iconifyTag: "bi:github",
      color: "hover:from-purple-200 hover:to-purple-300",
      link: link.gh,
      handle: "HoweZae"
    },
    {
      iconifyTag: "bi:facebook",
      color: "hover:from-blue-200 hover:to-blue-300",
      link: link.fb,
      handle: "jedtomanan"
    },
    {
      iconifyTag: "bi:instagram",
      color: "hover:from-red-100 hover:to-red-200",
      link: link.ig,
      handle: "jose.tmnn"
    },
  ]
</script>

<span class="jumpable" id="top" />
<div class="page h-auto gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <!-- <div class="h-4" /> -->

  <section class="flex flex-col gap-8 items-center justify-between overflow-clip p-0 pb-8 rounded-b-none border-b border-lucy-border">
    <Carousel.Root
        class="relative flex"
				opts={{ loop: true }}
				plugins={[ Autoplay({ delay:8000 }) ]}
			>
      <Carousel.Content class="h-[26rem] items-center">
        <Carousel.Item>
          <enhanced:img src="$lib/images/hero/1.jpg" alt="Me in Las Casas" />
        </Carousel.Item>
				<Carousel.Item>
					<enhanced:img src="$lib/images/hero/4.jpg" alt="Me, cuatro" />
				</Carousel.Item>
				<Carousel.Item>
					<enhanced:img src="$lib/images/hero/2.jpg" alt="Me, dos" />
        </Carousel.Item>
				<Carousel.Item>
					<enhanced:img src="$lib/images/hero/3.jpg" alt="Me, tres" />
        </Carousel.Item>
      </Carousel.Content>
			<Carousel.Previous
				class="absolute left-4 top-1/2 -translate-y-1/2 z-2 bg-lucy-muted/50 text-lucy-fg"
				/>
      <Carousel.Next
				class="absolute right-4 top-1/2 -translate-y-1/2 z-2 bg-lucy-muted/50 text-lucy-fg"
				/>
    </Carousel.Root>

    <div class="flex flex-col items-center justify-center gap-0">
      <h1 class="hero-text">Jose Tomanan</h1>
      <h3 class="font-heading font-semibold text-lucy-muted px-4 text-center tracking-tight">
        Tech buff
				<span class="magic-text">
					· Full-stack web developer ·
				</span>
				Gym rat
      </h3>
    </div>
  </section>

  <section class="flex flex-col md:flex-row gap-1.5 items-center rounded-t-none p-8">
    <h4>
      Hi! I'm Jose, a BS CS student from UP Diliman. Welcome aboard!
    </h4>

    <div class="flex-1" />

    <div class="flex gap-2 justify-end">
      {#each header as image}
			<div class="flex justify-center bg-gradient-to-b rounded-xl bg-transparent">
				<a href={ image.link } target="_blank">
					<Icon
						icon={ image.iconifyTag }
						class="h-5 w-5 text-lucy-muted hover:text-lucy-fg"
						/>
				</a>
			</div>
      {/each}
    </div>
  </section>
</div>

<style>
</style>