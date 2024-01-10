<script>
	
	import { onMount, onDestroy } from 'svelte';

  let writing_portfolio = [];
  let mix_portfolio = [];
  let youtube = '';
	
  onMount(() => {
    console.log('The component has mounted');
    async function getWritingPortfolio() {
      const response = await fetch(`/prod_portfolio.json`);
      writing_portfolio = await response.json();
      console.log(writing_portfolio);
      youtube = writing_portfolio[0].youtube;
    }

    getWritingPortfolio();
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
    <div class="grid-item">Production/Writing
      {#each writing_portfolio as item (item.track)}
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
