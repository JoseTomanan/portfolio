<script lang="ts">
  import Icon from "@iconify/svelte"
  import { fly } from "svelte/transition"
  
  let name: string = ""
  let email: string = ""
  let message: string = ""
  
  function submitForm(name: string, email: string, message: string) {
    alert(`Submitted ${name}, ${email} with message: ${message}`);
  }
</script>

<span class="jumpable" id="contact" />
<div class="page h-auto flex flex-col" transition:fly={{ delay: 100, duration: 1000 }}>
  <section>
    <h2 class="mb-3">
      Reach out to me!
    </h2>
    <form class="flex flex-col gap-2">
      <div class="flex gap-2">
        <div class="basis-5/12 flex gap-2 justify-between items-baseline">
          <label for="name">Name:</label>
          <input
              name="name" type="text" class="input-sm" placeholder="Your Name"
              bind:value={ name }
            />
        </div>
        
        <div class="basis-7/12 flex gap-2 justify-between items-baseline">
          <label for="email">Email:</label>
          <input
              name="email" type="email" class="input-sm" placeholder="your.name@email.com"
              bind:value={ email }
            />
        </div>
      </div>
  
      <div class="flex pb-2 gap-2 items-baseline">
        <label for="message">Message:</label>
        <textarea 
            class="py-1 resize-none"
            rows=3 name="message" placeholder="Say something..."
            bind:value={ message }
          />
      </div>
  
      <div class="flex justify-end">
        <button class="
            rounded-md py-1 px-4 text-lucy-fg w-fit border
            bg-lucy-surface-alt border-lucy-border-alt
            hover:bg-lucy-hover hover:border-lucy-border
          " on:click={ ()=>{ submitForm(name, email, message) }}
          >
          <Icon icon="mdi:send" class="w-7 h-7"/>
        </button>
      </div>
    </form>
  </section>
</div>

<style>
  .input-sm, textarea {
    @apply block w-full font-sans rounded-sm border-0 ring-1 ring-inset px-2 focus:outline-none;
    @apply bg-lucy-surface-alt text-lucy-fg ring-lucy-border caret-lucy-primary;
  }
  .input-sm::placeholder, textarea::placeholder {
    @apply text-lucy-muted/80;
  }
</style>