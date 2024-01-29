<script>
  import { createTabs, melt } from '@melt-ui/svelte';
  import { cubicInOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import EmailSubmitForm from '$lib/components/parts/EmailSubmitForm.svelte';

  const {
    elements: { root, list, content, trigger },
    states: { value },
  } = createTabs({
    defaultValue: 'tab-1',
  });

  let activeTabValue = 'tab-1'; // Initialize the active tab value

  const triggers = [
    { id: 'tab-1', title: '2Track-MixMaster' },
    { id: 'tab-2', title: 'Multi-track Mix' },
  ];

  // Function to handle tab click and update activeTabValue
  function handleTabClick(tabId) {
    activeTabValue = tabId;
  }
</script>
 
<div use:melt={$root}>
  <div use:melt={$list} class="ServiceToast">
    {#each triggers as triggerItem}
      <button 
        use:melt={$trigger(triggerItem.id)}
        class="trigger {activeTabValue === triggerItem.id ? 'active' : ''}"
        on:click={() => handleTabClick(triggerItem.id)}> <!-- Updated here -->
        {triggerItem.title}
      </button>
    {/each}
  </div>

  <div use:melt={$content('tab-1')} class="2trackTab">
    <p class="2trackContet">
      Instrumental Track + Voice Tracks   $80
    </p>
  </div>

  <div use:melt={$content('tab-2')} class="multiTrack">
    <p class="MultiTrackContent">
      MultiTrack Mix
    </p>
	</div>
	<div>
		<p>send me your email. I will get back to you soon. </p>
		<p>Let's talk about your project</p>
		
	</div>

	<EmailSubmitForm	/>

</div>




