<script lang="ts">
  import Icon from "@iconify/svelte";

	import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index";

  import { link } from "$lib";
  import { fly } from "svelte/transition";

  const header: {iconifyTag: string, label: string, link: string}[] = [
    {
      iconifyTag: "fa-brands:linkedin",
      label: "LinkedIn",
      link: link.li,
    },
    {
      iconifyTag: "fa-brands:github",
      label: "GitHub",
      link: link.gh,
    },
    {
      iconifyTag: "fa-brands:facebook",
      label: "Facebook",
      link: link.fb,
    },
    {
      iconifyTag: "fa-brands:instagram",
      label: "Instagram",
      link: link.ig,
    },
  ];
</script>

<span class="jumpable" id="top"></span>
<div class="page gap-0" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-8 items-center justify-between overflow-clip
				p-0 pb-8 rounded-b-none border-b border-border">
    <Carousel.Root
					class="relative flex"
					opts={{ loop: true }}
					plugins={[ Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true }) ]}>
      <Carousel.Content class="h-[18rem] sm:h-[22rem] md:h-[26rem] items-center">
				<Carousel.Item class="carousel-slide">
					<enhanced:img src="$lib/images/hero/1.jpg" alt="" aria-hidden="true" />
				</Carousel.Item>
				<Carousel.Item class="carousel-slide">
					<enhanced:img src="$lib/images/hero/4.jpg" alt="" aria-hidden="true" />
				</Carousel.Item>
				<Carousel.Item class="carousel-slide">
					<enhanced:img src="$lib/images/hero/2.jpg" alt="" aria-hidden="true" />
				</Carousel.Item>
				<Carousel.Item class="carousel-slide">
					<enhanced:img src="$lib/images/hero/3.jpg" alt="" aria-hidden="true" />
				</Carousel.Item>
      </Carousel.Content>
			<Carousel.Previous class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-foreground" />
      <Carousel.Next class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-foreground" />
    </Carousel.Root>

    <div class="flex flex-col items-center justify-center gap-0">
      <h1 class="hero-text">Jose Tomanan</h1>
      <h3 class="font-heading font-semibold text-muted-foreground px-4 text-center tracking-tight">
        Tech buff
				<span class="magic-text">
					&middot; Full-stack web developer &middot;
				</span>
				Gym rat
      </h3>
    </div>
  </section>

  <section class="flex flex-col md:flex-row gap-1.5 justify-between items-center rounded-t-none p-8">
    <h4>Hi! I'm Jose, a BS CS student from UP Diliman. Welcome aboard!</h4>
    <div class="inline-flex gap-x-2 justify-end items-center h-12">
      {#each header as social}
        <a href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            class="p-2 rounded-lg text-muted-foreground h-fit
                    hover:text-foreground hover:bg-card">
          <Icon icon={social.iconifyTag} class="size-6 my-auto" />
        </a>
      {/each}
    </div>
  </section>
</div>
