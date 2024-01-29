
<script>
  export let isActive = false;
  export let onClick; // Export an onClick function to handle the click event
</script>

<button class="{isActive ? 'active' : ''}" on:click={onClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music">
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
  Music {isActive ? '✓' : ''}
</button>

<style>
  /* Style for active state */
  .active {
    /* Active state styles */
    background-color: blue; /* Example style */
    color: white;
  }

  button {
    /* General button styles */
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  /* Styles for the SVG icon */
  .lucide-music {
    fill: currentColor; /* SVG fill color */
  }
</style>
