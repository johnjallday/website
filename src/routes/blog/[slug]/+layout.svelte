<script>
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>

	<aside>
		<h2>More posts</h2>
		{#if data && data.summaries}
			<ul>
				{#each data.summaries as { slug, title }}
					<li>
						<a href="/blog/{slug}">{title}</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No additional posts available.</p>
		{/if}
	</aside>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>

