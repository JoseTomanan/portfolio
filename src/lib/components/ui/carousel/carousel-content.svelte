<script lang="ts">
  import { getContext } from "svelte";
  import emblaCarouselSvelte from "embla-carousel-svelte";
  import type { Snippet } from "svelte";
  import { cn } from "$lib/utils.js";

  let {
    class: className = "",
    children,
    ...restProps
  }: {
    class?: string;
    children?: Snippet;
    [key: string]: unknown;
  } = $props();

  const { state, config } = getContext<{
    state: {
      api: import("embla-carousel").EmblaCarouselType | undefined;
      canScrollPrev: boolean;
      canScrollNext: boolean;
    };
    config: {
      orientation: "horizontal" | "vertical";
      opts: import("embla-carousel").EmblaOptionsType;
      plugins: import("embla-carousel").EmblaPluginType[];
    };
  }>("carousel");

  function handleInit(e: CustomEvent<import("embla-carousel").EmblaCarouselType>) {
    state.api = e.detail;
    state.canScrollPrev = state.api.canScrollPrev();
    state.canScrollNext = state.api.canScrollNext();
    state.api.on("select", () => {
      state.canScrollPrev = state.api!.canScrollPrev();
      state.canScrollNext = state.api!.canScrollNext();
    });
    state.api.on("reInit", () => {
      state.canScrollPrev = state.api!.canScrollPrev();
      state.canScrollNext = state.api!.canScrollNext();
    });
  }
</script>

<div
  use:emblaCarouselSvelte={{ options: config.opts, plugins: config.plugins }}
  onemblaInit={handleInit}
  class="overflow-hidden h-full"
>
  <div
    class={cn(
      "flex",
      config.orientation === "vertical" ? "flex-col" : "-ml-4",
      className
    )}
    {...restProps}
  >
    {@render children?.()}
  </div>
</div>
