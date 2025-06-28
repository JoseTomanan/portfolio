<script lang="ts">
  import Carousel from "$lib/components/Carousel.svelte"
  import { link } from "$lib"
  import { fly } from "svelte/transition"

  const header: {logo: any, color: string, link: string, handle: string}[] = [
    {
      logo: `
        <?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
        <svg
          class="fill-lucy-muted/95 hover:fill-lucy-fg"
          height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%"
          xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"
          >
          <path
            d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"
            />
        </svg>
      `,
      color: "hover:from-sky-200 hover:to-sky-300",
      link: link.li,
      handle: "jedtomanan"
    },
    {
      logo: `
        <?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
        <svg
          class="fill-lucy-muted/95 hover:fill-lucy-fg"
          height="100%" viewBox="0 -3.1 2490.3 2493" width="100%" xmlns="http://www.w3.org/2000/svg"
          >
          <ellipse cx="1245.2" cy="1243.4" fill="transparent" rx="1217.6" ry="1246.5"/>
          <path
            d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1" 
            />
        </svg>
      `,
      color: "hover:from-purple-200 hover:to-purple-300",
      link: link.gh,
      handle: "HoweZae"
    },
    {
      logo: `
        <?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
        <svg
          class="fill-lucy-muted/95 hover:fill-lucy-fg"
          height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%"
          xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"
          >
          <path
            d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z"
            />
        </svg>
      `,
      color: "hover:from-blue-200 hover:to-blue-300",
      link: link.fb,
      handle: "jedtomanan"
    },
    {
      logo: `
        <?xml version="1.0"?>
        <svg
          height="100%" width="100%"
          class="fill-lucy-muted/95 hover:fill-lucy-fg"
          data-name="Google alt" id="Google_alt" viewBox="0 0 420 419.997"
          xmlns="http://www.w3.org/2000/svg"
          >
          <title/>
          <path
            d="M388.818,146.28a24.3,24.3,0,1,1-24.295-24.295A24.3,24.3,0,0,1,388.818,146.28ZM466,256l-0.005.306-1.38,88.105a121.58,121.58,0,0,1-120.2,120.2L256,466l-0.306-.006-88.105-1.376a121.586,121.586,0,0,1-120.206-120.2L46,256l0.006-.306,1.376-88.108a121.59,121.59,0,0,1,120.206-120.2L256,46l0.306,0.006,88.105,1.376a121.584,121.584,0,0,1,120.2,120.2Zm-39.112,0-1.374-87.8A82.654,82.654,0,0,0,343.8,86.485L256,85.114l-87.8,1.371A82.658,82.658,0,0,0,86.484,168.2L85.113,256l1.371,87.8A82.655,82.655,0,0,0,168.2,425.515l87.8,1.371,87.8-1.371A82.651,82.651,0,0,0,425.514,343.8Zm-63.048,0A107.841,107.841,0,1,1,256,148.159,107.962,107.962,0,0,1,363.84,256Zm-39.107,0A68.734,68.734,0,1,0,256,324.734,68.812,68.812,0,0,0,324.732,256Z" transform="translate(-46 -46.001)"
            />
        </svg>
      `,
      color: "hover:from-red-100 hover:to-red-200",
      link: link.ig,
      handle: "jose.tmnn"
    },
    // {
    //   logo: `
    //     <?xml version="1.0"?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
    //     <svg
    //       class="fill-lucy-muted/95 hover:fill-lucy-fg"
    //       height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"
    //       xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"
    //       >
    //       <path
    //         d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-253.927,424.544c135.939,0 210.268,-112.643 210.268,-210.268c0,-3.218 0,-6.437 -0.153,-9.502c14.406,-10.421 26.973,-23.448 36.935,-38.314c-13.18,5.824 -27.433,9.809 -42.452,11.648c15.326,-9.196 26.973,-23.602 32.49,-40.92c-14.252,8.429 -30.038,14.56 -46.896,17.931c-13.487,-14.406 -32.644,-23.295 -53.946,-23.295c-40.767,0 -73.87,33.104 -73.87,73.87c0,5.824 0.613,11.494 1.992,16.858c-61.456,-3.065 -115.862,-32.49 -152.337,-77.241c-6.284,10.881 -9.962,23.601 -9.962,37.088c0,25.594 13.027,48.276 32.95,61.456c-12.107,-0.307 -23.448,-3.678 -33.41,-9.196l0,0.92c0,35.862 25.441,65.594 59.311,72.49c-6.13,1.686 -12.72,2.606 -19.464,2.606c-4.751,0 -9.348,-0.46 -13.946,-1.38c9.349,29.426 36.628,50.728 68.965,51.341c-25.287,19.771 -57.164,31.571 -91.8,31.571c-5.977,0 -11.801,-0.306 -17.625,-1.073c32.337,21.15 71.264,33.41 112.95,33.41Z"
    //         />
    //     </svg>
    //   `,
    //   color: "hover:from-sky-100 hover:to-sky-200",
    //   link: link.twt,
    //   handle: "howe_zae"
    // }
  ]
</script>

<page class="mt-24 h-auto gap-0 fade-in" transition:fly={{ delay: 100, duration: 1000 }}>
  <jumpable id="top" />

  <section class="flex flex-col gap-4 items-center justify-between overflow-hidden p-0 pb-4 border-b border-lucy-border">
    <Carousel />
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold text-lucy-fg">Jose Tomanan</h1>
      <h3 class="text-lucy-muted px-4 text-center">CS major · Full-stack web developer · Gym rat</h3>
    </div>
  </section>
  
  <section class="shrink flex flex-col md:flex-row gap-1.5 items-center rounded-t-none pt-4">
    <h4>
      Hey! I'm Jose, a <span id="special">full-stack web developer</span> from UP Diliman.
      <!--
      <a id="see-resume" class="text-lucy-surface hover:text-lucy-secondary transition-all ease-out" href="./resume.pdf" target="_blank">
        <span>Visit my resume!</span>
        <svg id="link" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
      -->
    </h4>

    <div class="flex-1" />

    <div class="flex gap-2 justify-end">
      {#each header as image}
        <div class="flex justify-center bg-gradient-to-b rounded-xl transition-all ease-out bg-transparent">
          <a class="h-5" href={ image.link } target="_blank">
            {@html image.logo }
          </a>
        </div>
      {/each}
    </div>
  </section>
</page>

<style>
  /*
  #link {
    opacity: 0;
  }
  #see-resume {
    @apply inline-flex gap-0.5;
  }
  #see-resume:hover {
    @apply gap-2 text-lucy-secondary;
  }
  #see-resume:hover #link {
    opacity: 1;
  }
  */

  span#special {
    @apply hover:text-lucy-tertiary transition-colors ease-out;
    /* TODO: WORK IN PROGRESS! */
  }
</style>