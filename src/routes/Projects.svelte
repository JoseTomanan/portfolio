<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
</script>

<span class="jumpable" id="projects"></span>
<div class="page" data-section="projects" transition:fly={{ delay: 400, duration: 1000 }}>
  <section class="section-body">
    <h2>What projects have I made?</h2>
    <div class="projects-roles">
      <Article title="SIPAT.MATH: AI-powered grading tool for early-level Mathematics"
						id="proj-199"
						href="https://github.com/JoseTomanan/S3LAB-ai-grading"
						subtitle="Filipino recipes database web app"
						date="SEP 2025 - PRESENT"
						other="
								Leading a 2-man capstone project developing a VLM-based tool that automates assessment of early-level Mathematics questions using rubrics and answer keys.
                Designed a Figma wireframe to demonstrate the proposed application's user flow.
                Constructed a prototype using Google Gemini API and Python.
                Leading frontend development using Svelte, Shadcn, and Iconify."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:FastAPI", "simple-icons:SQLite"] }
					/>
      <Article title="Svelte-based Pokédex"
						id="proj-svelte-pokedex"
						href="https://oaks-assistant.vercel.app"
						subtitle="Svelte-based Pokédex frontend interface"
						date="MAR 2026"
						other="
								Built a production-ready, responsive Pokédex SPA using Svelte 5 and Tailwind v4.
                Integrates the official PokéAPI to lazy-load all 1025 Pokémon species; uses SvelteKit 2 for data management.
                Implements sorting and filtering via TypeScript and the Svelte 5 runes system.
                Utilized skeleton animations, lazy hydration, and auto-fill grid for cross-device responsiveness."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TypeScript", "simple-icons:TailwindCSS"] }
					/>
          <Article title="Potterdex"
						id="proj-potterdex"
						href="https://potterdex.vercel.app"
						subtitle="React-based Harry Potter database UI"
						date="DEC 2024 - JAN 2025"
						other="
								Built a responsive React and Tailwind CSS frontend interfacing with the unofficial PotterDB API for Harry Potter lore.
								Integrated Axios for data fetching and React Router for dynamic slug-based routing with persistent context.
								Used Shadcn for consistent UI components and custom CSS for mobile responsiveness and animations.
								Added JavaScript logic for enhanced interactivity beyond library capabilities."
						techInvolved={ ["simple-icons:React", "simple-icons:Axios", "simple-icons:TailwindCSS"] }
					/>
      <Article title="JoseTomanan.io"
						id="proj-portfolio"
						href="https://github.com/JoseTomanan/portfolio"
						subtitle="Personal portfolio-resume (i.e., this webpage!)"
						date="JUL 2024 - PRESENT"
						other="
								Developed a static SPA portfolio showcasing skills and experiences while demonstrating frontend proficiency and design sensibility.
								Built with Svelte and Tailwind CSS; applied UI/UX design principles and integrated Iconify and Shadcn for icons and components."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:PostCSS"] }
					/>
      <Article title="Shogimon"
						id="proj-150"
						href="https://github.com/JoseTomanan/shogi-pygame"
						subtitle="Python-based multiplayer video game (MVC Architecture)"
						date="DEC 2024 - JAN 2025"
						other="
								Designed and developed a video game in Python and Pygame following the MVC design pattern.
								Applied SOLID principles and design patterns for maintainable, collaboration-ready code.
								Supported online multiplayer and offline pass-and-play modes; completed as the CS 150 final project."
						techInvolved={ ["simple-icons:Python", "simple-icons:Go"] }
					/>
      <Article title="Poverty and Parenting: A Data Science Study"
						id="proj-132"
						href="https://tes-birth-rate.vercel.app"
						subtitle="Economic analysis of birth rates in the Philippines"
						date="FEB 2024 - JUN 2024"
						other="
								Conducted a data-driven study using Pandas, Seaborn, and GeoPandas to explore correlations between live births and poverty incidence across municipalities.
								Applied data cleaning, analysis, and visualization to generate and present insights clearly; completed as the CS 132: Data Science final project."
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
    </div>
    
    <h6 class="footnote">
      // See my public repositories, in full detail, at 
      <a href={link.gh} target="_blank" rel="noopener noreferrer">GitHub</a>.
    </h6>
  </section>
</div>