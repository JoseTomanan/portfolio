<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
</script>

<span class="jumpable" id="projects" />
<div class="page" transition:fly={{ delay: 400, duration: 1000 }}>
  <section class="section-body">
    <h2>What projects have I made?</h2>
    <div class="projects-roles">
      <Article title="SIPAT.MATH: AI-powered grading tool for early-level Mathematics"
						id="proj-199"
						href="https://github.com/JoseTomanan/S3LAB-ai-grading"
						subtitle="Filipino recipes database web app"
						date="SEP 2025 - PRESENT"
						other="
								Leading a 2-man capstone project in designing, developing, and evaluating a VLM-based tool that automates the assessment early-level Mathematics questions based on rubrics and answer keys.
                Designed a wireframe using Figma to demonstrate basic user flow of the proposed application.
                Constructed a prototype using Google Gemini API and Python.
                Taking charge of frontend development using Svelte and component libraries Shadcn and Iconify."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:FastAPI", "simple-icons:SQLite"] }
					/>
      <Article title="Svelte-based Pokédex"
						id="proj-svelte-pokedex"
						href="https://oaks-assistant.vercel.app"
						subtitle="Svelte-based Pokédex frontend interface"
						date="MAR 2026"
						other="
								Built a production-ready, responsive Pokédex-style single-page application using Svelte 5 and Tailwind v4.
                Integrates the official PokéAPI to fetch name-ID pairs of all 1025 Pokémon species for lazy-loading.
                Uses SvelteKit 2 to handle request handling and data management.
                Implements sorting and filtering functionality using TypeScript and the Svelte 5 runes system.
                Utilized skeleton animations, lazy hydration, and auto-fill grid for responsiveness across all platforms & devices."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TypeScript", "simple-icons:TailwindCSS"] }
					/>
          <Article title="Potterdex"
						id="proj-potterdex"
						href="https://potterdex.vercel.app"
						subtitle="React-based Harry Potter database UI"
						date="DEC 2024 - JAN 2025"
						other="
								Built a responsive frontend in React and Tailwind CSS that interfaces with the unofficial PotterDB API to display detailed Harry Potter lore.
								Integrated Axios for efficient data fetching and request handling.
								Used React Router for dynamic slug-based routing and persistent context.
								Uses component library Shadcn for fast, consistent UI component styling.
								Applied custom CSS for mobile responsiveness and smooth animations.
								Added JavaScript logic for enhanced interactivity beyond library capabilities."
						techInvolved={ ["simple-icons:React", "simple-icons:Axios", "simple-icons:TailwindCSS"] }
					/>
      <Article title="JoseTomanan.io"
						id="proj-portfolio"
						href="https://github.com/JoseTomanan/portfolio"
						subtitle="Personal portfolio-resume (i.e., this webpage!)"
						date="JUL 2024 - PRESENT"
						other="
								Developed a static single-page portfolio to showcase relevant skills and experiences while demonstrating frontend proficiency and design sense.
								Built with Svelte and Tailwind CSS for a responsive and intuitive UI.
								Applied UI/UX design principles to highlight content clearly and effectively.
								Integrated Iconify for scalable icons and Shadcn for reusable components."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:PostCSS"] }
					/>
      <Article title="Shogimon"
						id="proj-150"
						href="https://github.com/JoseTomanan/shogi-pygame"
						subtitle="Python-based multiplayer video game (MVC Architecture)"
						date="DEC 2024 - JAN 2025"
						other="
								Designed and developed a simple video game using Python and Pygame, following the Model-View-Controller (MVC) design pattern.
								Applied SOLID principles, design patterns, and message passing for maintainable, collaboration-ready code.
								Supported both online multiplayer (networked) and offline pass-and-play modes.
								Completed as a final project for CS 150: Programming Languages."
						techInvolved={ ["simple-icons:Python", "simple-icons:Go"] }
					/>
      <Article title="Poverty and Parenting: A Data Science Study"
						id="proj-132"
						href="https://tes-birth-rate.vercel.app"
						subtitle="Economic analysis of birth rates in the Philippines"
						date="FEB 2024 - JUN 2024"
						other="
								Conducted a data-driven study using Pandas, Seaborn, and GeoPandas to explore correlations between registered live births and poverty incidence across municipalities.
								Applied core data science concepts for data cleaning, analysis, and insight generation.
								Used data visualization techniques to present findings in a clear, intuitive format.
								Completed as a final project for CS 132: Data Science"
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