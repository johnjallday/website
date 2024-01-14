
<script>
	import { onMount } from 'svelte';

	import '$lib/css/playlist.css';
	let portfolio =[];
	let selectedTrack = null;
	let youtube_url = '';
	export let portfolio_path;
	onMount(async () => {
		const response = await fetch(portfolio_path);
		portfolio = await response.json();
		youtube_url = portfolio[0].youtube;
	});

	function selectTrack(item) {
    selectedTrack = item;
    youtube_url = item.youtube;
  }
</script>


<table class="playlist-table">
	<thead>
		<tr>
			<th></th>
			<th>Artist</th>
			<th>Track</th>
		</tr>
	</thead>
	<tbody>
		{#each portfolio as item (item.track)}
			<tr
				on:click={() =>selectTrack(item)}
				class:active={selectedTrack === item}
			>
					<td><img src={`/album_arts/${item.album_arts}`} alt={`Album Art for ${item.track}`} class="album-art"></td>
        	<td>{item.artist}</td>
          <td>{item.track}</td>
			</tr>
		{/each}
	</tbody>
</table>

<div class="grid-item-youtube">
  <iframe width="100%" height="315" src={youtube_url}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  </iframe>
</div> 
  
