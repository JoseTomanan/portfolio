<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index";

  import hero1 from "$lib/images/hero/1.jpg?enhanced";
  import hero4 from "$lib/images/hero/4.jpg?enhanced";
  import hero2 from "$lib/images/hero/2.jpg?enhanced";
  import hero3 from "$lib/images/hero/3.jpg?enhanced";

  const slides = [hero1, hero4, hero2, hero3];
</script>


<Carousel.Root
        class="relative flex"
        opts={{ loop: true }}
        plugins={[ Autoplay({ delay: 8000, stopOnInteraction: true, stopOnMouseEnter: true }) ]}>
  <Carousel.Content class="h-[18rem] sm:h-[22rem] md:h-[26rem] items-center">
    {#each slides as src}
      <Carousel.Item class="carousel-slide">
        <enhanced:img {src} alt="" aria-hidden="true" />
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-foreground" />
  <Carousel.Next class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent text-foreground" />
</Carousel.Root>