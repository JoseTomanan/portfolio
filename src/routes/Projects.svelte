<script>
    import Article from "$lib/components/Article.svelte";
    import { fly } from "svelte/transition";
    import { link } from "$lib";
</script>

<page class="h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
    <jumpable id="projects" />
    <section class="basis-1/2 flex flex-col gap-2">
        <div class="gap-1">
            <h2>What projects have I made?</h2>
        </div>
        
        <div class="flex flex-col gap-2 mx-2">
            <!-- 
            <Article 
                id="proj0"
                href="_blank"
                title="Food"
                subtitle="Food app"
                date="AUG 2024 - PRESENT"
                other="
                    ,,,
                    Made in compliance for the requirements of course CS 191 and 192: Software Engineering I and II.
                "
                techInvolved={ ["Svelte", "PHP"] }
                on:click|once={ () => linkClicked("proj0") }
            /> 
            -->
            <Article 
                id="proj1"
                href="https://github.com/HoweZae/portfolio"
                color="sky-500"
                title="JoseTomanan.io"
                subtitle="Personal portfolio-resume (i.e., this webpage!)"
                date="JUL 2024 - PRESENT"
                other="
                    A static single-page website that showcases the relevant skills I have developed throughout my learning journey.
                    Also created to demonstrate front-end tech learned and to practice my UI/UX design choices.
                    Written using Svelte and Tailwind, to prioritize the webpage's responsiveness and intuitiveness.
                    Used supplementary JavaScript and CSS to add more complex functionality.
                "
                techInvolved={ ["Svelte", "Tailwind", "JavaScript", "CSS"] }
            />
            <Article 
                id="proj0"
                href="_blank"
                color="stone-400"
                title="Shogimon"
                subtitle="A Pokemon-inspired Shogi game using Python"
                date="DEC 2024 - JAN 2025"
                other="
                    A Model-View-Controller (MVC) structured simple video game created using Python video game package Pygame.
                    Utilizes industry-ready and collaboration-ready software development practices such as the SOLID principles, the observer pattern, and networking using message passing.
                    Implements both online (networking using Go as the server connector) and offline (pass-and-play) mode.
                    Made in compliance for the requirements of course CS 150: Programming Languages.
                "
                techInvolved={ ["Python", "Go"] }
            /> 
            <Article 
                id="proj2"
                href="https://tes-birth-rate.vercel.app"
                color={"orange-500"}
                title="Poverty and Parenting: A Data Science Study"
                subtitle="Economic analysis of birth rates in the Philippines"
                date="FEB 2024 - JUN 2024"
                other="
                    A visual exploration study, done using data science Python packages: Pandas, Seaborn, Geopandas.
                    Uses data science concepts to find an association between registered live births and poverty incidence in each municipality, as well as data visualization techniques to make the results intuitive and easily digestible.
                    Conducted in compliance for the requirements of course CS 132: Data Science.
                "
                techInvolved={ ["Python"] }
            />
            <Article 
                id="proj3"
                href="https://docs.google.com/spreadsheets/d/1Gl8ZSLqoZOfrErq09FKBjBx0lInlYxXj3dCs48e-T_Q/edit?usp=sharing"
                color="green-600"
                title="Finances Tracker"
                subtitle="Personal spreadsheet with Apps Script-powered macros"
                date="FEB 2023 - PRESENT"
                other="
                    A Google Docs spreadsheet created for the purpose of tracking college life-related expenses.
                    Uses separate sheets for incoming and outgoing funds, and summarizes all history of expenses and savings in a master sheet.
                    Utilizes JavaScript (via Google Apps Script) to automate the addition of new entries, separation of each week, and creation of a new sheet for each new month.
                "
                techInvolved={ ["Google Sheets", "JavaScript"] }
            />
        </div>

        <h6 class="text-slate-400 text-right">
            // See my public repositories, in full detail, at 
            <a class="underline hover:text-sky-500" href={link.gh}>GitHub</a>.
        </h6>
    </section>
</page>