
<script>
	export let data;
</script>


<h1>blog.</h1>
{#each data.summaries as { slug, title}}
	<div class="block">
		<a href="/blog/{slug}">{title}</a>
	</div>
{/each}
