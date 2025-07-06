<script lang='ts'>
  import Article from "$lib/components/Article.svelte"
  import { fly } from "svelte/transition"
  import { link } from "$lib"
</script>

<span class="jumpable" id="roles" />
<div class="page h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-3">
    <h1>What have I been up to?</h1>
    
    <div class="flex flex-col gap-6">
      <Article 
        id="role4"
        href="https://www.linkedin.com/in/jedtomanan/details/experience/"
        title="Software Engineer Intern"
        subtitle="Pointwest Innovations Corporation"
        date="JUN 2025 - PRESENT"
        other="
            Took part in a 200-hour software engineering internship program.
            Tasked in a 10-man case study for developing an HR-based application for the company.
            Part of the backend team: built the API endpoints using Spring Boot.
            Also developed testing suites to assure the quality of the application during the development, refactoring, and maintenance process.
          "
        techInvolved={ ["simple-icons:spring", "simple-icons:git", "simple-icons:jira"] }
      />
      <Article 
        id="role3"
        href="https://www.linkedin.com/in/jedtomanan/details/experience/"
        title="Tackle Junior Head"
        subtitle="UP Association of Computer Science Majors (UP CURSOR)"
        date="SEP 2023 - MAR 2024"
        other="
            Co-headed a team of 20 in planning, marketing, and promoting a 4-day hybrid setup tech career fair.
            Lead the Branding & Creatives team to effectively design and market the event.
            Lead the Human Resources to internally disseminate the event.
            Used Notion workspace to manage the project through task delegation, resource management, and team oversight.
          "
        techInvolved={ ["simple-icons:notion", "simple-icons:asana", "simple-icons:googlesheets", "simple-icons:canva"] }
      />
      <Article 
        id="role2"
        href="https://www.linkedin.com/in/jedtomanan/details/experience/"
        title="Dev Training Program Contributor"
        subtitle="UP Center for Student Innovations (UP CSI)"
        date="SEP 2023 - NOV 2023"
        other="
            Wrote web development modules and exercises designed for 50+ UP CSI applicants, for app process 2324B.
            Used Typst markdown to automate structure, layoutting, and organization of module content.
            Collaborated using Git to streamline team workflow and consolidate collective output.
          "
        techInvolved={ ["simple-icons:typst", "simple-icons:git"] }
      />
      <Article 
        id="role1"
        href="https://www.linkedin.com/in/jedtomanan/details/experience/"
        title="Member Relations Head"
        subtitle="UP CURSOR"
        date="FEB 2023 - MAY 2023"
        other="
            Headed a team of 6 in assuring and maintaining member involvement & motivation of an organization with 100+ active members.
            Created publication material for CURSOR Cares, to encourage organization interaction.
            Published material for Humans of CURSOR to share the experience of members in their respective fields.
            Used Notion workspace to efficiently implement task delegation, resource management, and team oversight.
          "
        techInvolved={ ["simple-icons:notion"] }
      />
    </div>
    
    <h6 class="footnote">
      // See more of what I've done at
      <a href={link.li}>LinkedIn</a>.
    </h6>
  </section>
</div>