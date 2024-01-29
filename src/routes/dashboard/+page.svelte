<script>
	import Todo from '$lib/components/blocks/Todo.svelte';
	//import ProjectListAccordion from '$lib/components/blocks/projects/ProjectsListAccordion.svelte';
	import ActiveMusicProjects from '$lib/components/blocks/projects/ActiveMusicProjects.svelte';
	import ProjectBlock from '$lib/components/blocks/projects/ProjectBlock.svelte';
	import '$lib/css/global.css';
</script>
<h1>projects.</h1>
<div class="row1">

	<ActiveMusicProjects filePath="projects/mix-master.json"/>
</div>

<div class="row2">
	<ProjectBlock filePath="projects/Studio.json"/>
	<ProjectBlock filePath="projects/neovim.json"/>
	<ProjectBlock filePath="projects/dashboard.json"/>

	<!-- <ProjectListAccordion filePath="projects/projects.json"/> -->
</div>
<div class="row2">
	<Todo filePath="todo_list.json"/>
</div>
<style>

</style>



