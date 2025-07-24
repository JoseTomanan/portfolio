<script lang="ts">
  import Icon from "@iconify/svelte";
  import * as Tooltip from "$lib/components/ui/tooltip/index";

  export let id: string;
  export let href: string;
  // export let color;
  export let title: string;
  export let subtitle: string;
  export let other: string = "";
  export let date: string = "AUG 2023 - AUG 2023";
  export let techInvolved: string[] = [""];
</script>

<article class="group/whole flex flex-col md:flex-row gap-4 items-baseline p-4 rounded-lg text-left
			border border-lucy-border hover:bg-lucy-surface hover:border-lucy-border-alt z-10">
  <div class="flex flex-row w-full justify-between gap-0.5
				md:basis-1/4 md:flex-col">
    <span class="text-left md:text-right text-sm font-mono tracking-tighter w-full
					text-lucy-muted group-hover/whole:text-lucy-fg/95">
      {date}
    </span>

    <div class="flex flex-row justify-end gap-2">
      {#each techInvolved as tech}
				{@const actualTag = tech.toLowerCase()}
				{@const displayableName = tech.split(":")[1]}
				<Tooltip.Root>
					<Tooltip.Trigger class="items-center">
						<Icon icon={actualTag}
									class="h-4 w-4 text-lucy-muted opacity-80 group-hover/whole:opacity-100" />
					</Tooltip.Trigger>
					<Tooltip.Content class="bg-lucy-bg/85 text-lucy-fg border-none">
						{displayableName}
					</Tooltip.Content>
				</Tooltip.Root>
      {/each}
    </div>
  </div>
  
  <div class="basis-5/6 md:basis-3/4 flex flex-col gap-2">
    <div class="md:grid space-y-1">
      <h4 class="underline-offset-2 flex font-sans font-semibold group-hover/whole:text-lucy-fg/100">
        <a class="group/link flex items-baseline leading-5 gap-2 hover:gap-4
							text-lucy-fg/90 hover:text-lucy-secondary"
							target="_blank" {id} {href} on:click|once>
          {title}
          <Icon icon="ic:baseline-arrow-outward"
              class="w-4 h-4 opacity-0 group-hover/whole:opacity-100 hidden md:inline"/>
        </a>
      </h4>
      <h4 class="leading-4 mt-0 text-lucy-fg/75 group-hover/whole:text-lucy-fg/100">
        {subtitle}
      </h4>
    </div>

    <p class="grow leading-5 tracking-tighter
					text-lucy-muted/50 group-hover/whole:text-lucy-muted/100">
      {other}
    </p>
  </div>
</article>
