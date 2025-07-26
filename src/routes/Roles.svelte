<script lang='ts'>
  import Article from "$lib/components/Article.svelte";
  import { fly } from "svelte/transition";
  import { link } from "$lib";
</script>

<span class="jumpable" id="roles" />
<div class="page h-auto" transition:fly={{ delay: 100, duration: 1000 }}>
  <section class="flex flex-col gap-3">
    <h2>What have I been up to?</h2>
    
    <div class="projects-roles">
      <Article 
						id="role-195"
						title="Software Engineer Intern"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						subtitle="Pointwest Innovations Corporation"
						date="JUN 2025 - JUL 2025"
						other="
								Completed a 200-hour internship as part of a 10-member team developing an HR-focused application for a partner company.
								Contributed to the backend team by building API services and controllers using Spring Boot.
								Developed and maintained automated testing suites to ensure code quality during development, refactoring, and maintenance phases.
								Gained hands-on experience in collaborative software development within a real-world engineering workflow."
						techInvolved={ ["simple-icons:Spring", "simple-icons:Git", "simple-icons:Jira"] }
					/>
      <Article 
						id="role-cursor1"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						title="Tackle Junior Head"
						subtitle="UP Association of Computer Science Majors (UP CURSOR)"
						date="SEP 2023 - MAR 2024"
						other="
								Co-led a team of 20 in organizing and executing a 4-day hybrid-format technology career fair.
								Directed the Branding & Creatives team to design and promote event visuals and marketing materials.
								Led the Human Resources team to manage internal communications and volunteer coordination.
								Utilized Notion for task delegation, resource tracking, and cross-team project management"
						techInvolved={ ["simple-icons:Notion", "simple-icons:Asana", "simple-icons:GoogleSheets", "simple-icons:Canva"] }
					/>
      <Article 
						id="role-csi"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						title="Dev Training Program Contributor"
						subtitle="UP Center for Student Innovations (UP CSI)"
						date="SEP 2023 - NOV 2023"
						other="
								Authored learning modules and exercises in web development for 50+ UP CSI applicants.
								Utilized Typst markdown to automate content structure, layout, and formatting.
								Collaborated with team members via Git to streamline workflow and integrate contributions efficiently."
						techInvolved={ ["simple-icons:Typst", "simple-icons:Git"] }
					/>
      <Article 
						id="role-cursor2"
						href="https://www.linkedin.com/in/jedtomanan/details/experience/"
						title="Member Relations Head"
						subtitle="UP CURSOR"
						date="FEB 2023 - MAY 2023"
						other="
								Headed a team of 6 in assuring and maintaining member involvement & motivation of an organization with 100+ active members.
								Created publication material for CURSOR Cares, to encourage organization interaction.
								Published material for Humans of CURSOR to share the experience of members in their respective fields.
								Used Notion workspace to efficiently implement task delegation, resource management, and team oversight."
						techInvolved={ ["simple-icons:Notion"] }
					/>
    </div>
    
    <h6 class="footnote">
      // See more of what I've done at
      <a href={link.li}>LinkedIn</a>.
    </h6>
  </section>
</div>