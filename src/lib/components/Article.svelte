<script lang="ts">
  import Icon from "@iconify/svelte"

  export let id: string
  export let href: string
  // export let color;
  export let title: string
  export let subtitle: string
  export let other: string = ""
  
  export let date: string = "AUG 2023 - AUG 2023"
  export let techInvolved: string[] = [""]
</script>

<article class="
    group/whole
    flex gap-4 items-baseline
    p-4 rounded-lg text-left border
    bg-lucy-surface border-lucy-border
    hover:bg-lucy-surface-alt hover:border-lucy-border-alt
    hover:shadow-lucy-border-alt hover:shadow-sm
    transition ease-linear z-10
  ">
  <date class="
      grow text-right text-sm font-mono tracking-tighter text-lucy-muted
      group-hover/whole:text-lucy-fg/100
      transition ease-out
    ">
    {date}
  </date>
  
  <div class="basis-5/6 md:basis-3/4 flex flex-col gap-2">
    <div class="grid leading-4">
      <h3 class="
          text-lg underline-offset-2 flex font-sans font-semibold not-italic
          transition-all ease-in-out
          group-hover/whole:text-lucy-fg
        ">
        <a class="
            group/link flex items-baseline gap-2 hover:gap-4
            text-lucy-fg/90 hover:text-lucy-secondary
            transition-all ease-out
          " target="_blank" {id} {href} on:click|once
          >
          {title}
          <Icon
              icon="ic:baseline-arrow-outward"
              class="w-4 h-4 opacity-0 group-hover/link:opacity-100"
            />
        </a>
      </h3>
      <h5 class="
          text-lucy-fg/75 mt-0
          group-hover/whole:text-lucy-fg/100
        ">
        { subtitle }
      </h5>
    </div>

    <p class="
        text-sm grow leading-5 tracking-tight text-lucy-muted/75
        group-hover/whole:text-lucy-muted/100
      ">
      {other}
    </p>

    <techs class="flex gap-1">
      <!-- TODO: justify between, make sure this is at the bottom. mt-1.5 is not it -->
      {#each techInvolved as tech}
        <perTech class="
            flex items-center transition ease-out rounded-xl px-2
            bg-lucy-surface-alt text-lucy-muted
            group-hover/whole:bg-lucy-hover group-hover/whole:text-lucy-fg
            hover:bg-lucy-tertiary hover:text-lucy-surface-alt
          ">
          { tech }
        </perTech>
      {/each}
    </techs>
  </div>
</article>

<style>
</style>