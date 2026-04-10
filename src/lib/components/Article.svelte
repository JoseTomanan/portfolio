<script lang="ts">
  import { iconMap } from "$lib/iconMap";
  import IcBaselineArrowOutward from '~icons/ic/baseline-arrow-outward';
  import * as Tooltip from "$lib/components/ui/tooltip/index";

  let {
    id,
    href,
    title,
    subtitle,
    other = "",
    date = "AUG 2023 - AUG 2023",
    techInvolved = [""],
  }: {
    id: string;
    href: string;
    title: string;
    subtitle: string;
    other?: string;
    date?: string;
    techInvolved?: string[];
  } = $props();
</script>

<article class="group/whole
      flex flex-col md:flex-row gap-4 items-baseline p-4 rounded-lg text-left
      bg-card z-10
      shadow shadow-border/50">
  <div class="flex flex-row w-full justify-between gap-0.5
        md:basis-1/4 md:flex-col">
    <span class="text-left md:text-right text-sm font-mono tracking-tighter w-full
          text-muted-foreground group-hover/whole:text-foreground/95">
      {date}
    </span>

    <div class="flex flex-row justify-end gap-2">
      {#each techInvolved as tech}
        {@const actualTag = tech.toLowerCase()}
        {@const displayableName = tech.split(":")[1]}
        {@const TechIcon = iconMap[actualTag]}
        <Tooltip.Root>
          <Tooltip.Trigger class="items-center" aria-label={displayableName}>
            <TechIcon class="h-4 w-4 text-muted-foreground/80 group-hover/whole:text-muted-foreground cursor-default" />
          </Tooltip.Trigger>
          <Tooltip.Content class="bg-popover text-popover-foreground border-none">
            {displayableName}
          </Tooltip.Content>
        </Tooltip.Root>
      {/each}
    </div>
  </div>

  <div class="basis-5/6 md:basis-3/4 flex flex-col gap-2">
    <div class="md:grid space-y-1">
      <h4 class="underline-offset-2 flex font-sans font-semibold
                  group-hover/whole:text-foreground/100">
        <a class="group/link flex items-baseline leading-5 gap-2 hover:gap-4
              text-foreground/90 hover:text-secondary"
              target="_blank" rel="noopener noreferrer" {id} {href}>
          {title}
          <IcBaselineArrowOutward
              class="w-4 h-4 opacity-0 group-hover/whole:opacity-100 hidden md:inline"/>
        </a>
      </h4>
      <h5 class="leading-4 mt-0 text-foreground/75 group-hover/whole:text-foreground/100">
        {subtitle}
      </h5>
    </div>

    <p class="grow leading-5 font-light text-muted-foreground/60">
      {other}
    </p>
  </div>
</article>
