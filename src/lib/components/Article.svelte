<script lang="ts">
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
    flex gap-4 items-baseline
    p-4 rounded-lg text-left border
    bg-lucy-surface border-lucy-border
    hover:bg-lucy-surface-alt hover:border-lucy-border-alt
    hover:shadow-lucy-border-alt hover:shadow-sm
    transition ease-linear z-10
  ">
  <date class="grow text-right text-sm font-mono tracking-tighter text-lucy-muted transition ease-out">
    {date}
  </date>
  
  <div class="basis-5/6 md:basis-3/4 flex flex-col gap-2">
    <div class="grid leading-4">
      <h3 class="text-lg underline-offset-2 flex font-sans font-semibold not-italic">
        <a class="flex items-baseline gap-2 hover:gap-4 text-lucy-fg/90 hover:text-lucy-secondary transition-all ease-out" target="_blank" {id} {href} on:click|once>
          {title}
          <svg
          id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </h3>
      <h5 class="text-lucy-fg/80 mt-0">{subtitle}</h5>
    </div>

    <p class="text-sm grow leading-5 tracking-normal">
      {other}
    </p>

    <techs class="flex gap-1">
      <!-- TODO: justify between, make sure this is at the bottom. mt-1.5 is not it -->
      {#each techInvolved as tech}
        <perTech class="bg-lucy-surface-alt rounded-xl px-2 text-lucy-muted flex items-center transition ease-out">
          {tech}
        </perTech>
      {/each}
    </techs>
  </div>
</article>

<style>
  article:hover h3 {
    @apply text-lucy-fg;
    @apply transition-all duration-150 ease-in-out;
  }

  article:hover h5, article:hover date {
    @apply text-lucy-fg
  }
  
  #link {
    --tw-text-opacity: 0;
    stroke-width: 0;
  }
  
  article:hover #link {
    --tw-text-opacity: 1;
    stroke-width: 2;
  }
  
  article:hover perTech {
    @apply bg-lucy-hover text-lucy-fg;
  }

  article perTech:hover {
    @apply bg-lucy-tertiary text-lucy-surface-alt;
  }
</style>