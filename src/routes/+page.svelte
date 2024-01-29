<script>
  import Portfolio from '$lib/components/blocks/Portfolio.svelte';
  import Service from '$lib/components/blocks/Service.svelte';
  import About from '$lib/components/blocks/About.svelte';
  import LatestFeed from '$lib/components/blocks/LatestFeed.svelte';
	import '$lib/css/global.css';
 	import { page } from '$app/stores';

</script>

<style>
    .row1 {
        display: grid;
				grid-template-columns: 2fr 1fr;
				gap: 10px;
    }
		.row1-col2 {
    	display: grid;
    	grid-auto-rows: auto 1fr 1fr; /* This makes each row the same height */
    	gap: 10px; /* Adjust the gap between grid items as needed */
		}

</style>

<div>
	<h1>johnj.</h1>
</div>

<div class="row1">
  <Portfolio/>
		<div class="row1-col2">
      <Service/>
			<LatestFeed/>
      <About/>
    </div>
</div>

