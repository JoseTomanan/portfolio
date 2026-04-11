<script lang="ts">
  import { iconMap } from "$lib/iconMap";
  import IcBaselineArrowOutward from '~icons/ic/baseline-arrow-forward';
  import * as Accordion from "$lib/components/ui/accordion/index";
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

  let itemRef = $state<HTMLElement | null>(null);
  let isOpen: boolean = $state(false);

  $effect(() => {
    if (!itemRef) return;
    isOpen = itemRef.dataset.state === 'open';
    const observer = new MutationObserver(() => {
      isOpen = itemRef?.dataset.state === 'open';
    });
    observer.observe(itemRef, { attributes: true, attributeFilter: ['data-state'] });
    return () => observer.disconnect();
  });
</script>



<article class="group/whole rounded-lg text-left bg-card z-10 shadow shadow-border/50
         hover:ring hover:ring-border"
         data-open={isOpen}
         class:ring={isOpen}
         class:ring-border={isOpen}>
  <Accordion.Item bind:ref={itemRef} value={id} class="border-none">
    <Accordion.Trigger class="w-full px-4 hover:no-underline flex-wrap">
      <div class="flex flex-row w-full justify-between gap-0.5
            md:w-auto md:basis-1/4 md:flex-col">
        <span class="text-left md:text-right text-sm font-mono font-normal tracking-tighter w-full
              text-muted-foreground/60
              group-hover/whole:text-foreground/100
              group-data-[open=true]/whole:text-foreground/100">
          {date}
        </span>

        <div class="flex flex-row justify-end gap-2">
        {#each techInvolved as tech}
          {@const actualTag = tech.toLowerCase()}
          {@const displayableName = tech.split(":")[1]}
          {@const TechIcon = iconMap[actualTag]}
          <Tooltip.Root>
            <Tooltip.Trigger class="items-center" aria-label={displayableName}>
              <TechIcon class="h-4 w-4
                      cursor-default
                      text-muted-foreground/60
                      group-hover/whole:text-muted-foreground/100
                      group-data-[open=true]/whole:text-muted-foreground/100
                    "/>
            </Tooltip.Trigger>
            <Tooltip.Content class="bg-popover text-popover-foreground border-none">
              {displayableName}
            </Tooltip.Content>
          </Tooltip.Root>
        {/each}
        </div>
      </div>

      <div class="flex-1 flex flex-col gap-2 text-left">
        <div class="md:grid space-y-1">
          <h4 class="underline-offset-2 flex font-sans font-semibold
                      group-hover/whole:text-foreground/100
                      group-data-[open=true]/whole:text-foreground/100">
            <a class="group/link flex items-baseline leading-5 gap-2 hover:gap-4
                  text-foreground/80
                  group-hover/whole:text-foreground/100
                  group-data-[open=true]/whole:text-foreground/100
                  hover:text-secondary"
                  target="_blank" rel="noopener noreferrer" {id} {href}
                  onclick={(e) => e.stopPropagation()}>
              {title}
              <IcBaselineArrowOutward
                  class="w-4 h-4 opacity-0 group-hover/whole:opacity-100 group-data-[open=true]/whole:opacity-100 hidden md:inline"/>
            </a>
          </h4>
          <h4 class="leading-4 mt-0 font-normal
                      text-foreground/50
                      group-hover/whole:text-foreground/80
                      group-data-[open=true]/whole:text-foreground/80">
            {subtitle}
          </h4>
        </div>
      </div>
    </Accordion.Trigger>

    <Accordion.Content class="flex flex-row gap-x-4 px-4">
      <div class="hidden md:block md:basis-[25%] shrink-0"></div>
      <span class="leading-5 text-base font-light text-muted-foreground/60">
        {other}
      </span>
    </Accordion.Content>
  </Accordion.Item>
</article>
