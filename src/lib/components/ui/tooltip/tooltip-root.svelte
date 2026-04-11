<script lang="ts">
  import { Tooltip } from "bits-ui";
  import type { ComponentProps } from "svelte";
  import type { Snippet } from "svelte";

  let { children, ...restProps }: Omit<ComponentProps<typeof Tooltip.Root>, "children"> & { children?: Snippet } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root {...restProps}>
    {@render children?.()}
  </Tooltip.Root>
</Tooltip.Provider>
