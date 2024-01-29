
<script>
	import ServiceToast from '$lib/components/parts/ServiceToast.svelte';
</script>

<div class="block services">
  <h2>Services.</h2>
  <div class="center-container">
    <ServiceToast />
  </div>
</div>

<style>
  .center-container {
    display: flex;
		justify-content: left;
  }


  .ServiceToast {
    display: flex; /* Enables Flexbox */
    flex-direction: row; /* Aligns children (buttons) in a row */
    justify-content: center; /* Optionally center the buttons horizontally */
    align-items: center; /* Optionally align the buttons vertically */
    gap: 10px; /* Adds space between buttons */
		min-width: 200px;
    /* Add other styles as needed (e.g., padding, margin) */
  }

  /* Styles for the buttons inside .ServiceToast */
  .ServiceToast .trigger {
		font-size: 18px;
		min-width: 200px;
		
    background-color: #ffce4e; /* Sets the button background color */
    color: #3a2a00; /* Sets the text c
    padding: 0px 20px; /* Adjust as needed */
    border-radius: 5px; /* Optional: for rounded corners */
		border: 2px solid transparent;
    /* Add other styling as needed */
  }

	.ServiceToast .trigger.active {
		border: 2px solid #3a2a00;
    background-color: #ffce4e; /* Optional: different background for active tab */
  }

	.ServiceToast .trigger:hover {
		background-color: darken(#3a2a00, 100%); 
		border-color: #3a2a00 #3a2a00 #3a2a00;
  }

</style>
