<script lang="ts">
  import { setContext, untrack } from "svelte";
  import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
  import type { EmblaCarouselType } from "embla-carousel";
  import type { Snippet } from "svelte";

  let {
    class: className = "",
    opts = {} as EmblaOptionsType,
    plugins = [] as EmblaPluginType[],
    orientation = "horizontal" as "horizontal" | "vertical",
    children,
    ...restProps
  }: {
    class?: string;
    opts?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    orientation?: "horizontal" | "vertical";
    children?: Snippet;
    [key: string]: unknown;
  } = $props();

  // Separate mutable state from static config to avoid state_referenced_locally warning
  const state = $state({
    api: undefined as EmblaCarouselType | undefined,
    canScrollPrev: false,
    canScrollNext: true,
  });

  // Static config from props — intentionally one-time read, opts don't change after init
  const config = untrack(() => ({ orientation, opts, plugins }));

  setContext("carousel", { state, config });
</script>

<div
  class="relative {className}"
  role="region"
  aria-roledescription="carousel"
  {...restProps}
>
  {@render children?.()}
</div>
