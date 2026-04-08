<script lang="ts">
  import { Tooltip } from "bits-ui";
  import type { ComponentProps } from "svelte";

  let { children, ...restProps }: ComponentProps<typeof Tooltip.Root> = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root {...restProps}>
    {@render children?.()}
  </Tooltip.Root>
</Tooltip.Provider>
