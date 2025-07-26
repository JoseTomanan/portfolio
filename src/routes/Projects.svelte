<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
</script>

<span class="jumpable" id="projects" />
<div class="page h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-3">
    <h2>What projects have I made?</h2>
    
    <div class="projects-roles">
      <Article title="Lutong Bahay"
						id="proj-192"
						href="https://github.com/JoseTomanan/cs192-lutong-bahay"
						subtitle="Full-stack app/database for Filipino recipes"
						date="AUG 2024 - MAY 2025"
						other="
								Developed a full-stack web application with advanced filtering, sorting, and user authentication features.
								Built with Svelte and Tailwind CSS (frontend), Django REST Framework (backend), and Supabase (database).
								Implemented an admin dashboard for recipe management and user moderation.
								Collaborated in a 5-member team over a year-long capstone project for CS 191/192: Software Engineering I & II."
						techInvolved={ ["simple-icons:Svelte", "simple-icons:TailwindCSS", "simple-icons:Django", "simple-icons:Supabase"] }
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
						href="https://github.com/HoweZae/portfolio"
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
						subtitle="A Pokemon-inspired Shogi-esque video game using Python"
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
								A scripting project that I use for my personal spreadsheet to track my daily outgoing and incoming funds.
								Uses the API to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
								Written in TypeScript, later transpiled into JavaScript through Clasp (for Google AppsScript).
								Implements SOLID principles and design patterns for codebase sustainability and maintainability.
							"
						techInvolved={ ["simple-icons:GoogleAppsScript", "simple-icons:TypeScript"] }
					/> -->
    </div>
    
    <h6 class="footnote">
      // See my public repositories, in full detail, at 
      <a href={link.gh}>GitHub</a>.
    </h6>
  </section>
</div>