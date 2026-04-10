<script lang='ts'>
  import Article from "$lib/components/Article.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
</script>

<span class="jumpable" id="roles"></span>
<div class="page" data-section="roles" transition:fly={{ delay: 200, duration: 1000 }}>
  <section class="section-body">
    <h2>What have I been up to?</h2>
    <div class="projects-roles">
      <Article 
						id="role-195"
						title="Software Engineer Intern"
						subtitle="Pointwest Innovations Corporation"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="JUN 2025 - JUL 2025"
						other="
								Completed a 200-hour internship on a 10-member team building an HR-focused application for a partner company.
								Built API services and controllers using Spring Boot; developed and maintained automated testing suites to ensure code quality.
								Gained hands-on experience in collaborative software development within a real-world engineering workflow."
						techInvolved={ ["simple-icons:Spring", "simple-icons:Git", "simple-icons:Jira"] }
					/>
      <Article 
						id="role-cursor1"
						title="Event Co-Head"
						subtitle="UP Association of Computer Science Majors (UP CURSOR)"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="SEP 2023 - MAR 2024"
						other="
								Co-led a team of 20 in organizing Tackle 2024, a 4-day hybrid technology career fair.
								Directed Branding & Creatives to design event visuals and led HR to manage communications and volunteer coordination.
								Utilized Notion for task delegation, resource tracking, and cross-team project management."
						techInvolved={ ["simple-icons:Notion", "simple-icons:Asana", "simple-icons:GoogleSheets", "simple-icons:Canva"] }
					/>
      <Article 
						id="role-csi"
						title="Web development module writer"
						subtitle="UP Center for Student Innovations (UP CSI)"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="SEP 2023 - NOV 2023"
						other="
								Authored web development learning modules and exercises for 50+ UP CSI applicants.
								Used Typst to automate content structure and formatting; collaborated via Git to integrate contributions efficiently."
						techInvolved={ ["simple-icons:Typst", "simple-icons:Git"] }
					/>
      <Article 
						id="role-cursor2"
						title="Member Relations Head"
						subtitle="UP CURSOR"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="FEB 2023 - MAY 2023"
						other="
								Headed a team of 6 to maintain member involvement and motivation for an organization with 100+ active members.
								Created publication materials for CURSOR Cares and Humans of CURSOR to encourage interaction and share member experiences.
								Used Notion for task delegation, resource management, and team oversight."
						techInvolved={ ["simple-icons:Notion"] }
					/>
    </div>
    
    <h6 class="footnote">
      // See more of what I've done at
      <a href={link.li} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </h6>
  </section>
</div>