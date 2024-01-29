
<script>
	import Playlist from '$lib/components/parts/Playlist.svelte';
	import { onMount } from 'svelte';
	import '$lib/css/portfolio.css';

  let items = [
    { label: "Prod/Writing", value: 1, component: Playlist, portfolio_path: "./prod_portfolio.json" },
		{ label: "Mix", value: 2, component: Playlist, portfolio_path: "./mix_portfolio.json" }
  ];

  export let activeTabValue = 1;
  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>


<div class="block prtfolio">
	<h2>Portfolio.</h2>
	<ul>
  	{#each items as item}
    	<li class={activeTabValue === item.value ? 'active' : ''}>
      	<span on:click={handleClick(item.value)}>{item.label}</span>
    	</li>
  	{/each}
	</ul>

	{#each items as item}
  	{#if activeTabValue === item.value}
    	{#if item.component}
      	  <svelte:component this={item.component} portfolio_path={item.portfolio_path}/>
      {/if}
 	 {/if}
	{/each}
</div>


