<script>
  import { createToggleGroup, melt } from '@melt-ui/svelte';
  import { AlignCenter, AlignLeft, AlignRight } from 'lucide-svelte';
 
</script>
 
<div
  use:melt={$root}
  class="flex items-center data-[orientation='vertical']:flex-col"
  aria-label="Text alignment"
>
  <button
    class="toggle-item"
    use:melt={$item('left')}
    aria-label="Left aligned"
  >
    <AlignLeft class="square-4" />
  </button>
  <button
    class="toggle-item"
    use:melt={$item('center')}
    aria-label="Center aligned"
  >
    <AlignCenter class="square-4" />
  </button>
  <button
    class="toggle-item"
    use:melt={$item('right')}
    aria-label="Right aligned"
  >
    <AlignRight class="square-4" />
  </button>
</div>
 
<style lang="postcss">
  .toggle-item {
    display: grid;
    place-items: center;
    align-items: center;
 
    background-color: theme('colors.white');
    color: theme('colors.magnum.800');
    font-size: theme('fontSize.base');
    line-height: theme('lineHeight.4');
    outline: none;
 
    height: theme('height.9');
    width: theme('width.9');
 
    &:hover {
      background-color: theme('colors.magnum.100');
    }
 
    &:focus {
      z-index: 10;
    }
  }
 
  .toggle-item[data-disabled] {
    @apply cursor-not-allowed;
  }
 
  .toggle-item[data-orientation='horizontal'] {
    @apply border-x border-l-transparent border-r-magnum-200;
 
    &:first-child {
      @apply rounded-l-md;
    }
 
    &:last-child {
      @apply rounded-r-md border-r-transparent;
    }
  }
 
  .toggle-item[data-orientation='horizontal']:dir(rtl) {
    @apply border-x border-l-magnum-200 border-r-transparent;
 
    &:first-child {
      @apply rounded-r-md;
    }
 
    &:last-child {
      @apply rounded-l-md border-l-transparent;
    }
  }
 
  .toggle-item[data-orientation='vertical'] {
    @apply border-y border-b-magnum-200 border-t-transparent;
 
    &:first-child {
      @apply rounded-t-md;
    }
 
    &:last-child {
      @apply rounded-b-md border-b-transparent;
    }
  }
 
  .toggle-item[data-state='on'] {
    @apply bg-magnum-200 text-magnum-900;
  }
</style>





<script>
  import { onMount, writable } from 'svelte';
  import { createToggle } from '@melt-ui/svelte'; // Assuming createToggle comes from '@melt-ui/svelte'

  let todoList = writable({});

  onMount(async () => {
    const response = await fetch('/todo_list.json');
    todoList.set(await response.json());
  });

  // Define a toggle for each tab
  const toggleMusic = createToggle({ value: false });
  const toggleWebsite = createToggle({ value: false });
  const toggleProgramming = createToggle({ value: false });
  const toggleEverything = createToggle({ value: false });

  // Array of toggles for easy access
  const toggles = [toggleMusic, toggleWebsite, toggleProgramming, toggleEverything];

  // Function to activate a specific toggle and deactivate others
  function activateToggle(index) {
    toggles.forEach((toggle, i) => {
      toggle.set(i === index);
    });
  }

  const triggers = [
    { title: 'Music', toggle: toggleMusic },
    { title: 'Website', toggle: toggleWebsite },
    { title: 'Programming', toggle: toggleProgramming },
    { title: 'Everything', toggle: toggleEverything }
  ];
</script>

<div class="block todo">
  <h2>To-do list.</h2>
  <div>
    {#each triggers as triggerItem, index}
      <button class="trigger relative" on:click={() => activateToggle(index)}>
        {triggerItem.title}
      </button>
    {/each}
  </div>

  {#each triggers as triggerItem}
    <div class="{triggerItem.toggle.value ? 'visible' : 'hidden'}">
      {#each $todoList[triggerItem.title]?.todo ?? [] as item}
        <p>{item}</p>
      {/each}
    </div>
  {/each}
</div>
<Music size={20} strokeWidth={1.5} />
