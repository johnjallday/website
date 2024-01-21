<script>
	export let data;
</script>

<div class="block">

	<h1>{data.post.title}</h1>
	{@html data.post.content}
</div>
