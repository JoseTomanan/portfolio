<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Carousel from "$lib/components/ui/carousel/index";

  import hero1 from "$lib/images/hero/1.jpg?enhanced";
  import hero4 from "$lib/images/hero/4.jpg?enhanced";
  import hero2 from "$lib/images/hero/2.jpg?enhanced";
  import hero3 from "$lib/images/hero/3.jpg?enhanced";

  const slides = [hero1, hero4, hero2, hero3];
</script>

<div class="relative shrink-0 size-64 sm:size-72 md:size-80">
  <Carousel.Root
      class="size-full rounded-full overflow-hidden"
      opts={{ loop: true }}
      plugins={[ Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }) ]}>
    <Carousel.Content class="h-full m-0">
      {#each slides as src}
        <Carousel.Item class="h-full p-0">
          <enhanced:img {src}
                        alt=""
                        aria-hidden="true"
                        class="size-full object-cover"
                      />
        </Carousel.Item>
      {/each}
    </Carousel.Content>
  </Carousel.Root>
  <span class="absolute left-[86%] top-[86%] -translate-x-1/2 -translate-y-1/2 size-4
                rounded-full bg-green-500 ring-[3px] ring-muted"></span>
</div>
