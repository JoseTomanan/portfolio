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
    flex gap-4 items-baseline md:p-4 rounded-lg text-left border
    bg-lucy-surface border-lucy-border
    hover:bg-lucy-surface-alt hover:border-lucy-border-alt
    transition ease-linear z-10
  ">

  <div class="basis-1/6 md:basis-1/4 flex flex-col justify-start h-full">
    <span class="
        text-right text-sm font-mono tracking-tighter transition ease-out
        text-lucy-muted
        group-hover/whole:text-lucy-fg/100
      ">
      {date}
    </span>

    <div class="flex-1" />

    <div class="flex flex-row justify-end w-full">
      {#each techInvolved as tech}
        <div class="
            flex items-center transition ease-out p-0.5
            text-lucy-muted/80
            group-hover/whole:text-lucy-muted/100
          ">
          <Icon
              icon={ (tech != "") ? tech : "mdi:question-mark-circle" }
              class="h-4 w-4"
            />
        </div>
      {/each}
    </div>
  </div>
  
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
              class="w-4 h-4 opacity-0 group-hover/whole:opacity-100"
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
        text-base grow leading-5 tracking-tighter text-lucy-muted/50
        group-hover/whole:text-lucy-muted/100
      ">
      {other}
    </p>
  </div>
</article>
