<script>
  import { onMount } from 'svelte';
	import '$lib/css/buttons.css'; 
  let isOpen = false;

  onMount(() => {
    const dialogContainer = document.getElementById('dialogContainer');
    const openDialogButton = document.getElementById('contactButton');
    const closeDialogButton = document.getElementById('closeDialogButton');
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

    document.addEventListener('mousedown', handleMouseDown);

    // Initialize the dialog state to closed
    updateDialogState();

    function handleMouseDown(event) {
      if (!dialogContent.contains(event.target)) {
        isOpen = false;
        updateDialogState();
      }
    }

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
  <div id="overlay"></div>
  <div id="dialogContent">
    <p id="dialogDescription">johnj.alldayok@gmail.com</p>
    <button id="closeDialogButton">Close Dialog</button>
  </div>
</div>



<style>

  #dialogContainer {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 8px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
		color: brown;
		align-items: center;
  }

  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
	}


</style>
