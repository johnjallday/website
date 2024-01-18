

<script>
  import { onMount } from 'svelte';
  import '$lib/css/buttons.css'; 
  let isOpen = false;

  onMount(() => {
    const dialogContainer = document.getElementById('dialogContainer');
    const openDialogButton = document.getElementById('contactButton');
    const closeDialogButton = document.getElementById('closeDialogButton');
    const copyEmailButton = document.getElementById('copyEmailButton'); // New button for copying email
    const overlay = document.getElementById('overlay');
    const dialogContent = document.getElementById('dialogContent');

    openDialogButton.addEventListener('click', () => {
      isOpen = true;
      updateDialogState();
    });

    closeDialogButton.addEventListener('click', () => {
      isOpen = false;
      updateDialogState();
    });

    copyEmailButton.addEventListener('click', () => {
      const email = document.getElementById('dialogDescription').innerText;
      navigator.clipboard.writeText(email)
        .then(() => alert('Email copied to clipboard!'))
        .catch(err => console.error('Error copying email: ', err));
    });

    function updateDialogState() {
      if (isOpen) {
        dialogContainer.style.display = 'block';
        overlay.style.display = 'block';
      } else {
        dialogContainer.style.display = 'none';
        overlay.style.display = 'none';
      }
    }
  });
</script>

<button id="contactButton">Contact</button>



<div id="dialogContainer">
  <button id="closeDialogButton" class="close-button">
    <img src="./close-button.svg" width="24" height="24" alt="Close Icon">
  </button>
  <div id="dialogTitleBar">Contact Information</div>

	<div id="dialogContent">
  	<div class="email-group">
    	<p id="dialogDescription">johnj.alldayok@gmail.com</p>
    	<button id="copyEmailButton">
      	<img src="./copy-button.svg" width="24" height="24" alt="Copy Icon">
    	</button>
  	</div>
	</div>

</div>

<style>
  #dialogContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px; /* Set a minimum width */
    min-height: 100px; /* Set a minimum height */
    background-color: #ffbd13;
		padding: 0px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    z-index: 1000; /* Ensure it's above other content */
    display: none;
    flex-direction: column;
		align-items: center;
		opacity: 100;
		overflow: hidden;
		/*	position: relative; */
  }

	#dialogTitleBar {
  	width: 100%;
  	padding: 10px 0; /* Increased padding for larger height */
  	background-color: #130e00;
  	text-align: center;
  	font-weight: bold;
  	color: #ffcd4e;
	}


.close-button {
  position: absolute;
  top: 6px; /* Adjust this value so the button aligns with the title bar */
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}


	#dialogContent {
		padding: 10px;
		display: flex; /* Enable Flexbox */
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.email-group {
  display: flex; /* Enable Flexbox */
  align-items: center; /* Align items vertically in the center */
  gap: 10px; /* Add space between the text and the button */
	}


	.close-button img {
  filter: brightness(0) invert(1); /* Adjusts the color to white */
	}

	#copyEmailButton {
  	color: #130e00;
		background-color:  #ffbd13;
		border: none;
		transition: background-color 0.3s ease, color 0.3s ease; 
  	/* Other styling properties */
	}

	#copyEmailButton:hover {
  	background-color: #e6a600; /* Slightly darker shade for hover */
  	color: #fff; /* Optional: change text color on hover for contrast */
	}
</style>
