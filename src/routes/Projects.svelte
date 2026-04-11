<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import * as Accordion from "$lib/components/ui/accordion/index";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
  import { activeSection } from "$lib/utils";
</script>

<span class="jumpable" id="projects"></span>
<div class="page"
      data-section="projects"
      transition:fly={{ delay: 400, duration: 1000 }}
      class:section-active={$activeSection === 'projects'}>
  <section class="section-body">
    <h2>My projects</h2>
    <Accordion.Root type="single" class="projects-roles">
      <Article title="SIPAT.MATH: LLM grading tool for early Math"
						id="proj-199"
						href="https://github.com/JoseTomanan/S3LAB-ai-grading"
						subtitle="Filipino recipes database web app"
						date="SEP 2025 - PRESENT"
						other="
								2-man capstone: VLM-based tool automating assessment of early-level Math using rubrics and answer keys.
                Python + Gemini API prototype; leading frontend in Svelte and Shadcn.
                CS199 final project."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:FastAPI", "simple-icons:SQLite"] }
					/>
      <Article title="Svelte-based Pokédex"
						id="proj-svelte-pokedex"
						href="https://oaks-assistant.vercel.app"
						subtitle="Svelte-based Pokédex frontend interface"
						date="MAR 2026"
						other="
								Responsive Pokédex SPA in Svelte 5 + Tailwind v4; lazy-loads all 1025 Pokémon via PokéAPI.
                Sorting, filtering, skeleton animations, and lazy hydration for full cross-device responsiveness."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TypeScript", "simple-icons:TailwindCSS"] }
					/>
          <Article title="Potterdex"
						id="proj-potterdex"
						href="https://potterdex.vercel.app"
						subtitle="React-based Harry Potter database UI"
						date="DEC 2024 - JAN 2025"
						other="
								React + Tailwind frontend for the unofficial PotterDB API; Axios for fetching, React Router for slug-based routing.
								Shadcn components, custom CSS animations, and JS for interactivity beyond library defaults."
						techInvolved={ ["simple-icons:React", "simple-icons:Axios", "simple-icons:TailwindCSS"] }
					/>
      <Article title="JoseTomanan.io"
						id="proj-portfolio"
						href="https://github.com/JoseTomanan/portfolio"
						subtitle="Personal portfolio-resume"
						date="JUL 2024 - PRESENT"
						other="
								This webpage.
                Static SPA built with Svelte and Tailwind; designed for mobile-first responsiveness and accessibility.
                Features scroll-based section highlighting."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:PostCSS"] }
					/>
      <Article title="Shogimon"
						id="proj-150"
						href="https://github.com/JoseTomanan/shogi-pygame"
						subtitle="Python-based multiplayer video game"
						date="DEC 2024 - JAN 2025"
						other="
								Python + Pygame game built on MVC and SOLID principles; allows for online multiplayer and local pass-and-play. CS 150 final project."
						techInvolved={ ["simple-icons:Python", "simple-icons:Go"] }
					/>
      <Article title="Poverty and Parenting: A Data Science Study"
						id="proj-132"
						href="https://tes-birth-rate.vercel.app"
						subtitle="Economic analysis of birth rates in the Philippines"
						date="FEB 2024 - JUN 2024"
						other="
								Data study (Pandas, Seaborn, GeoPandas) correlating live births with poverty incidence across Philippine municipalities. CS 132 final project."
						techInvolved={ ["simple-icons:Python"] }
					/>
			<!-- <Article title="Finance Tracker Automator"
						id="proj-finances"
						href="https://github.com/JoseTomanan/finance-tracker-automator"
						subtitle="Automation scripts for Google Sheets using AppsScript"
						date="FEB 2023 - PRESENT"
						other="
								Built a custom Google Sheets automation script to manage daily income and expenses.
								Automates entry logging, weekly segmentation, and monthly sheet creation via the Sheets API.
								Written in TypeScript, transpiled to JavaScript using Clasp for deployment to Google Apps Script.
								Structured using SOLID principles and design patterns for long-term maintainability.
							"
						techInvolved={ ["simple-icons:GoogleAppsScript", "simple-icons:TypeScript"] }
					/> -->
    </Accordion.Root>
    
    <h6 class="footnote">
      // See my public repositories, in full detail, at 
      <a href={link.gh} target="_blank" rel="noopener noreferrer">GitHub</a>.
    </h6>
  </section>
</div>