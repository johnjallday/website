<script>
	
	import { onMount, onDestroy } from 'svelte';

  let mix_portfolio = [];
  let youtube = '';
	
  onMount(() => {
    console.log('The component has mounted');

    async function getMixPortfolio() {
      const response = await fetch(`/mix_portfolio.json`);
      mix_portfolio = await response.json();
			youtube = mix_portfolio[0].youtube;
      console.log(mix_portfolio);
    }

    getMixPortfolio();
  });

  function playVideo(url) {
    youtube = url;
  }

  let x = 50;
	let y = 50;

  function handleMouseMove(event) {
    x = event.clientX / window.innerWidth * 100;
    y = event.clientY / window.innerHeight * 100;
  }
  
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles.css">
</svelte:head>
<main>

  <div class="grid">  
		<div class="grid-item">mix
      {#each mix_portfolio as item (item.track)}
        <button on:click={() => playVideo(item.youtube)} class="list-group-item">{item.track}</button>
      {/each}
    </div>
    <div class="grid-item-youtube">

      <iframe width="560" height="315" src={youtube}
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
    
  </div>
</main>
