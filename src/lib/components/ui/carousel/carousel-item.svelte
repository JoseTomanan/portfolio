<script lang="ts">
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
</script>

<div
  role="group"
  aria-roledescription="slide"
  class={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
  {...restProps}
>
  {@render children?.()}
</div>
