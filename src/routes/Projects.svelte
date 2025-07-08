<script lang="ts">
  import Article from "$lib/components/Article.svelte"
  import { fly } from "svelte/transition"
  import { link } from "$lib"
</script>

<span class="jumpable" id="projects" />
<div class="page h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-3">
    <h1>What projects have I made?</h1>
    
    <div class="flex flex-col gap-6">
      <Article 
        id="proj4"
        href="https://github.com/JoseTomanan/cs192-lutong-bahay"
        title="Lutong Bahay"
        subtitle="Full-stack app/database for Filipino recipes"
        date="AUG 2024 - MAY 2025"
        other="
            A database web app with fully functional search filters/sorting functions and user authentication system.
            Also includes an administrator mode for adding/editing recipes and suspending users.
            Written using Svelte and Tailwind (frontend), and Django-REST framework (backend), with the database hosted in Supabase.
            Part of a 5-man, year long project done in compliance for the requirements of course CS 191 and 192: Software Engineering I and II.
          "
        techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:Django", "simple-icons:Supabase"] }
      />
      <Article 
        id="proj3"
        href="https://github.com/HoweZae/portfolio"
        title="JoseTomanan.io"
        subtitle="Personal portfolio-resume (i.e., this webpage!)"
        date="JUL 2024 - PRESENT"
        other="
            A static single-page website that showcases the relevant skills and experiences I have earned throughout my learning journey.
            Also created to demonstrate frontend tech learned and to practice my UI/UX design choices.
            Written using Svelte and Tailwind to prioritize the webpage's responsiveness and intuitiveness.
            Utilizes icon library Iconify and component library Shadcn to enhance the UI.
            Uses supplementary JavaScript and CSS to add more complex functionality.
          "
        techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:PostCSS", "simple-icons:JavaScript"] }
      />
      <!-- <Article 
        id="proj4"
        href="_blank"
        title="Sugarcare"
        subtitle="Image classification model"
        date="DEC 2024 - JAN 2025"
        other="
            A 
          "
        techInvolved={ ["Tensorflow", "Keras"] }
      />  -->
      <Article 
        id="proj0"
        href="https://github.com/JoseTomanan/shogi-pygame"
        title="Shogimon"
        subtitle="A Pokemon-inspired Shogi-esque video game using Python"
        date="DEC 2024 - JAN 2025"
        other="
            A Model-View-Controller (MVC) structured simple video game created using Python video game package Pygame.
            Employs collaboration-ready programming practices such as the SOLID principles, design patterns, and message passing between components.
            Implements both online (networking) and offline (pass-and-play) mode.
            Made in compliance for the requirements of course CS 150: Programming Languages.
          "
        techInvolved={ ["simple-icons:Python", "simple-icons:Go"] }
      />
      <Article 
        id="proj2"
        href="https://tes-birth-rate.vercel.app"
        title="Poverty and Parenting: A Data Science Study"
        subtitle="Economic analysis of birth rates in the Philippines"
        date="FEB 2024 - JUN 2024"
        other="
            A visual exploration study, done using data science Python packages: Pandas, Seaborn, Geopandas.
            Uses data science concepts to find an association between registered live births and poverty incidence in each municipality, as well as data visualization techniques to make the results intuitive and easily digestible.
            Conducted in compliance for the requirements of course CS 132: Data Science.
          "
        techInvolved={ ["simple-icons:Python"] }
      />
      <Article 
        id="proj1"
        href="https://github.com/JoseTomanan/finance-tracker-automator"
        title="Finance Tracker Automator"
        subtitle="Automation script for Google Sheets using Google AppsScript API"
        date="FEB 2023 - PRESENT"
        other="
            A scripting project that I use for my personal spreadsheet to track my daily outgoing and incoming funds.
            Uses the API to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
            Written in TypeScript, later transpiled into JavaScript through Clasp (for Google AppsScript).
            Implements SOLID principles and design patterns for codebase sustainability and maintainability.
          "
        techInvolved={ ["simple-icons:GoogleAppsScript", "simple-icons:TypeScript"] }
      />
    </div>
    
    <h6 class="footnote">
      // See my public repositories, in full detail, at 
      <a href={link.gh}>GitHub</a>.
    </h6>
  </section>
</div>