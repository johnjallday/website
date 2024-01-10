<script>
	const posts = [
		{
			title: 'Test 1',
			slug: 'test1'
		},
		{
			title: 'Test 2',
			slug: 'test2'
		}

	];
	
</script>

<ul class = "flex flex-col gap-12 text-blue-300">
	{#each posts as post}
		<li>
			<a 
				class="outline outline-1 outline-white p-2 rounded-xl hover:text-red-300 hover:bg-[#b8b8b856]"
				href = {'/blog/' + post.slug}
			>
				{post.title}
			</a>
		</li>
	{/each}
</ul>
