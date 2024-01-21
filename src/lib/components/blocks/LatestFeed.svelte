
<script>
  import { onMount } from 'svelte';
  let latest_feed = [];

  onMount(async () => {
    try {
      const response = await fetch('/latest_feed.json'); // Correct the file name if necessary
      latest_feed = await response.json();
    } catch (error) {
      console.error('Failed to fetch latest feed:', error);
    }
  });
</script>

<div class="block latestFeed">
  <h2>Latest Feed.</h2>
  
  {#if latest_feed.length > 0}
    {#each latest_feed as { date, feed }}
			<div class="feed">
				<span>{date}</span>  
				<span>{feed}</span>
			</div>
    {/each}
  {:else}
    <p>No feed data available.</p>
  {/if}
</div>


<style>
  .latestFeed .feed {
    border-bottom: 1px solid #ccc; /* Adds a line at the bottom */
    padding: 10px 0; /* Adds some spacing around the content */
		border-color: #3a2a00;
  }

  .latestFeed .feed:last-child {
    border-bottom: none; /* Removes the border from the last item */
  }
</style>
