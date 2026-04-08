<script lang="ts">
  import { Tooltip } from "bits-ui";
  import type { ComponentProps } from "svelte";

  let {
    sideOffset = 4,
    class: className = "",
    children,
    ...restProps
  }: ComponentProps<typeof Tooltip.Content> & { class?: string } = $props();
</script>

<Tooltip.Content {sideOffset} class={className} {...restProps}>
  {@render children?.()}
</Tooltip.Content>
