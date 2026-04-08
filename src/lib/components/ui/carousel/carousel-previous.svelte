<script lang="ts">
  import { getContext } from "svelte";
  import { cn } from "$lib/utils.js";

  let {
    class: className = "",
    ...restProps
  }: {
    class?: string;
    [key: string]: unknown;
  } = $props();

  const { state } = getContext<{
    state: {
      api: import("embla-carousel").EmblaCarouselType | undefined;
      canScrollPrev: boolean;
    };
  }>("carousel");
</script>

<button
  class={cn(
    "inline-flex items-center justify-center rounded-full border border-input bg-background p-2 shadow-sm",
    "hover:bg-accent hover:text-accent-foreground",
    "disabled:pointer-events-none disabled:opacity-50",
    className
  )}
  disabled={!state.canScrollPrev}
  onclick={() => state.api?.scrollPrev()}
  aria-label="Previous slide"
  {...restProps}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
