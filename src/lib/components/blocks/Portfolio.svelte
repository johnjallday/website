
<script>
	import Playlist from '$lib/components/parts/Playlist.svelte';
	import { onMount } from 'svelte';


  let items = [
    { label: "Prod/Writing", value: 1, component: Playlist, portfolio_path: "./prod_portfolio.json" },
		{ label: "Mix", value: 2, component: Playlist, portfolio_path: "./mix_portfolio.json" }
  ];

  export let activeTabValue = 1;
  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

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

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
	li {
		margin-bottom: -1px;
	}

  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

</style>
