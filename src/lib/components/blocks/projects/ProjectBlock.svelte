
<script>
  import { onMount } from 'svelte';
  export let filePath;

  let projects = [];

  onMount(async () => {
    if (filePath) {
      try {
        const response = await fetch(filePath);
        if (response.ok) {
          projects = await response.json();
        } else {
          console.error('Error fetching project data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  });
</script>

{#each projects as project}
  <div class="block">
    <h2>{project.title}</h2>
    <p>{project.content}</p>
  </div>
{/each}
