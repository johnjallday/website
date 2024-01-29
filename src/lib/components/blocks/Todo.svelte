<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let filePath;

  let todo_list = {};
  let filter = writable(new Set()); // Store a set of active filters

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const response = await fetch(filePath);
      todo_list = await response.json();
    }
  });

  // Function to toggle the filter
  function toggleFilter(category) {
    filter.update(currentFilters => {
      const newFilters = new Set(currentFilters);
      if (newFilters.has(category)) {
        newFilters.delete(category); // Remove the filter if it's already set
      } else {
        newFilters.add(category); // Add the filter if it's not set
      }
      return newFilters;
    });
  }

  // Function to clear all filters
  function clearAllFilters() {
    filter.set(new Set());
  }
</script>

<div class="block todo">
  <h2>To-do list.</h2>

  <!-- Toggle Buttons for Each Category -->
  {#each Object.keys(todo_list) as category}
    <button on:click={() => toggleFilter(category)}>
      {category} {$filter.has(category) ? '✓' : ''}
    </button>
  {/each}

  <!-- Button to Clear All Filters -->
  <button on:click={clearAllFilters}>
    Clear All Filters
  </button>

  {#each Object.keys(todo_list) as category}
    {#if !$filter.size || $filter.has(category)}
      <div class="category-section">
        <h3>{category}</h3>
        {#each todo_list[category]?.todo as item}
          <p>{item}</p>
        {/each}
      </div>
    {/if}
  {/each}
</div>
