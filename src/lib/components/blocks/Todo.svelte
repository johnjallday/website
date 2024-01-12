
<script>
	//  import { cn } from '$docs/utils';
  import { createTabs, melt } from '@melt-ui/svelte';
  import { cubicInOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';

  const {
    elements: { root, list, content, trigger },
    states: { value },
  } = createTabs({
    defaultValue: 'tab-1',
  });

  let className = '';
  export { className as class };

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

<div use:melt={$root}>
  <div
    use:melt={$list}
    class="flex shrink-0 overflow-x-auto bg-neutral-100
    data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
    aria-label="Manage your account"
  >
    {#each triggers as triggerItem}
      <button use:melt={$trigger(triggerItem.id)} class="trigger relative">
        {triggerItem.title}
        {#if $value === triggerItem.id}
          <div
            in:send={{ key: 'trigger' }}
            out:receive={{ key: 'trigger' }}
            class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-magnum-400"
          />
        {/if}
      </button>
    {/each}
  </div>
	
	<div use:melt={$content('tab-1')} class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
			On-Going Demos
		</p>
		<p> Kelly</p>

  </div>
  <div use:melt={$content('tab-2')} class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
    	Load todo_list.json to here
		</p>

  </div>
  <div use:melt={$content('tab-3')} class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
			Reascript
    </p>


  </div>
</div>


