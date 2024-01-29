
<script>
  import { onMount } from 'svelte';
  export let filePath;

  let projects = [];

  onMount(async () => {
    if (filePath) {
      try {
        const response = await fetch(filePath);
        if (response.ok) {
          const data = await response.json();
          // Filter projects with 'on-going' progress
          projects = data.filter(project => project.progress === 'on-going');
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
</script>

<div class="block">
  <h2>active music projects.</h2>
  {#each projects as project}
    <p>{project.artist} - {project.title}  ({project['project-type']})</p>
  {/each}
</div>
