<!-- Header.svelte -->
<script>
  export let activePath = '';
</script>

<nav class="page_nav">
  <button id="buttonMain" class={activePath === '/' ? 'selected' : ''}>
    <a href="/">Main</a>
  </button>
  <button id="buttonProjects" class={activePath === '/dashboard' ? 'selected' : ''}>
    <a href="/dashboard">Dashboard</a>
  </button>
  <button id="buttonBlog" class={activePath === '/blog' ? 'selected' : ''}>
    <a href="/blog">Blog</a>
  </button>
</nav>


<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_nav {
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

	.selected {
  	background-color: #ffe9b0; /* Selected state background */
  	color: #3a2a00; /* Selected state text color */
	}


	button {
  	background-color: #3a2a00;
  	color: #ffe9b0;
  	font-size: 24px;
  	border-radius: 8px;
  	border: none; /* Removes the default button border */
  	padding: 5px 20px; /* Adjust padding as needed */
  	width: 150px; /* Sets a fixed width for all buttons */
  	height: 40px; /* Sets a fixed height for all buttons */
  	text-align: center; /* Centers text inside the button */
  	display: flex; /* Enables flexbox for centering content */
  	justify-content: center; /* Horizontally centers the link inside the button */
  	align-items: center; /* Vertically centers the link inside the button */
		outline: none;
		transition: background-color 0.1s, color 0.1s;
	}

	button:hover {
    /* Styles for when the button is hovered over */
  	background-color: #ffe9b0; /* Example: change background color on hover */
  	color: #3a2a00; /* Example: change text color on hover */
		border: 3px solid #3a2a00;
	}


	button a {
  	text-decoration: none;
  	color: inherit;
  	display: block; /* Makes the link fill the button for better clickability */
  	width: 100%; /* Ensures the link covers the entire area of the button */
	}
</style>
