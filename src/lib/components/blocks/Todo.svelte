
<script>
  import { createTabs, melt } from '@melt-ui/svelte';
  import { crossfade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let todo_list = {};

  onMount(async () => {
    const response = await fetch('/todo_list.json');
    todo_list = await response.json();
  });

  const {
    elements: { root, list, content, trigger },
    states: { value },
  } = createTabs({
    defaultValue: 'tab-1',
  });

  const triggers = [
    { id: 'tab-1', title: 'Music' },
    { id: 'tab-2', title: 'Website' },
    { id: 'tab-3', title: 'Programming' },
  ];

  const [send, receive] = crossfade({
    duration: 250,
    easing: cubicInOut,
  });
</script>

<div class="block todo" use:melt={$root}>
  <h2>To-do list.</h2>
  <div use:melt={$list}>
    {#each triggers as triggerItem}
      <button use:melt={$trigger(triggerItem.id)} class="trigger relative">
        {triggerItem.title}
        {#if $value === triggerItem.id}
          <div in:send={{ key: 'trigger' }} out:receive={{ key: 'trigger' }} />
        {/if}
      </button>
    {/each}
  </div>

  {#each triggers as triggerItem}
    <div use:melt={$content(triggerItem.id)} class="grow bg-white p-5">
      {#if todo_list[triggerItem.title]}
        {#each todo_list[triggerItem.title].todo as item}
          <p>{item}</p>
        {/each}
      {/if}
    </div>
  {/each}
</div>
