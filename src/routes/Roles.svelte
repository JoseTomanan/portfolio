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
								200-hour internship on a 10-member team building an HR application; contributed Spring Boot API services and maintained automated test suites."
						techInvolved={ ["simple-icons:Spring", "simple-icons:Git", "simple-icons:Jira"] }
					/>
      <Article 
						id="role-cursor1"
						title="Event Co-Head"
						subtitle="UP Association of Computer Science Majors (UP CURSOR)"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="SEP 2023 - MAR 2024"
						other="
								Co-led 20 people organizing Tackle 2024, a 4-day hybrid tech career fair.
								Headed Branding and HR sub-teams; used Notion for cross-team coordination."
						techInvolved={ ["simple-icons:Notion", "simple-icons:Asana", "simple-icons:GoogleSheets", "simple-icons:Canva"] }
					/>
      <Article 
						id="role-csi"
						title="Web development module writer"
						subtitle="UP Center for Student Innovations (UP CSI)"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="SEP 2023 - NOV 2023"
						other="
								Authored web dev learning modules for 50+ applicants using Typst; collaborated via Git."
						techInvolved={ ["simple-icons:Typst", "simple-icons:Git"] }
					/>
      <Article 
						id="role-cursor2"
						title="Member Relations Head"
						subtitle="UP CURSOR"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						date="FEB 2023 - MAY 2023"
						other="
								Led a team of 6 managing engagement for 100+ members; produced CURSOR Cares and Humans of CURSOR publications."
						techInvolved={ ["simple-icons:Notion"] }
					/>
    </div>
    
    <h6 class="footnote">
      // See more of what I've done at
      <a href={link.li} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
    </h6>
  </section>
</div>