
<script>
  import { onMount } from 'svelte';

  let writing_portfolio = [];
  let youtube = '';
  let selectedTrack = null;

  onMount(async () => {
    console.log('The component has mounted');
    const response = await fetch(`/prod_portfolio.json`);
    writing_portfolio = await response.json();
    console.log(writing_portfolio);
    youtube = writing_portfolio[0].youtube;
  });

  function playVideo(url) {
    youtube = url;
  }

  function selectTrack(item) {
    selectedTrack = item;
    playVideo(item.youtube);
  }
</script>

<main>
  <div class="grid-item">
    <table class="playlist-table">
      <thead>
        <tr>
          <th>""</th>
          <th>Artist</th>
          <th>Track</th>
        </tr>
      </thead>
      <tbody>
        {#each writing_portfolio as item (item.track)}
          <tr
            on:click={() => selectTrack(item)}
            class:active={selectedTrack === item}
          >
            <td><img src={`/album_arts/${item.album_arts}`} alt={`Album Art for ${item.track}`} class="album-art"></td>
            <td>{item.artist}</td>
            <td>{item.track}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

<div class="grid-item-youtube">
  <iframe width="560" height="315" src={youtube}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
  </iframe>
</div> 
</main>




<style>
  .grid-item {
    height: 250px;
  }

  .playlist-table {
		align: left;
    width: 100%;
    margin-top: 0px;
		border-collapse: collapse;
		display: block;
		height: 250px;
		overflow-y: scroll;
	}
	.playlist-table th{
		text-align:left;
	}



  .album-art {
    width: 50px;
    height: 50px;
  }

  .active {
    background-color: #e0e0e0;
  }

  .scrollable-body {
    display: block;
    height: 250px;
    overflow-y: scroll;
  }
</style>
