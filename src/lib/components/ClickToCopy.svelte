<script lang="ts">
  export let content: string = ""
  // export let src = "";
</script>

<div class="flex justify-between hover:bg-slate-100 p-2 rounded-xl transition ease-out">
  <div class="h-5 w-5"></div>
  <h5>{ content }</h5>
  <button type="button" on:click title="Copy contents">
    <svg  
      id="copybutton" height="1em" width="1em"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="none"  
      stroke="currentColor" stroke-linecap="round"  stroke-linejoin="round"  
      >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </svg>
  </button>
</div>

<style>
  #copybutton {
    --tw-text-opacity: 1;
    color: transparent;
    stroke-width: 1;
  }
  
  .flex:hover #copybutton {
    color: rgb(100 116 139 / var(--tw-text-opacity)) /* #64748b */;
  }
  
  #copybutton:hover {
    stroke-width: 2;
  }
</style>