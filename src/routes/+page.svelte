

<script>
    import Portfolio from '$lib/components/blocks/Portfolio.svelte';
    import Service from '$lib/components/blocks/Service.svelte';
    import About from '$lib/components/blocks/About.svelte';
    import Blog from '$lib/components/blocks/Blog.svelte';

    import Todo from '$lib/components/blocks/Todo.svelte';
    import Updates from '$lib/components/blocks/Updates.svelte';
</script>


<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">

<style>
    main {
        display: grid;
        gap: 10px;
				height: 100vh;
				padding: 20px;
    }

    /* Define a global font */
    body, * {
        font-family: 'Raleway', sans-serif;
				font-weight: 500;
    }

		h1 {
			padding: 30px;
			font-family: 'Poppins', sans-serif; /* Use the Poppins font for h1 */
			font-weight: 800;
			font-size: 50px;
        /* Add any other styling you need for h1 */
				}
		h2 {
			font-family: 'Poppins', sans-serif; /* Use the Poppins font for h1 */
			font-weight: 700;
			font-size: 40px;

		}


    .row1 {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr; /* 3/4 for Portfolio, 1/4 for Service */
        gap: 10px;
    }

    .row1-last {
        display: grid;
        gap: 10px;
        grid-template-rows: 1fr 1fr;
    }



    .service, .about, .portfolio, .blogs, .updates {
        border: 2px solid black;
				padding-left: 20px;
				padding-right: 20px;
				padding-bottom: 20px;
				border-radius: 10px; /* Adjust the value to control the roundness */
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
   			background-color: #ffe9b0;
				opacity: 95%;
    }
</style>

	

<h1>johnj.</h1>
	<main>
    <div class="row1">
			<div class="portfolio">
						<h2>Portfolio.</h2>
            <Portfolio/>
      </div>

			<div class="row1-col2">
				<div class="service">
						<h2>Services.</h2>
          	<Service/>
				</div>
				<div class="todo">
					<h2>To Do List</h2>
					<p>Don't mind me.</p>
					<p>Just Testing stuffs here</p>
					<p>Nothing to See Here</p>
					<p>Move Along</p>
					<Todo/>
				</div>
			</div>

				<div class="row1-last">
					<div class="about">
						<h2>About.</h2>
            <About/>
					</div>
					<div class="updates">
						<h2>Updates.</h2>
						<Updates/>
					</div>
				</div>
    </div>
    <div class="row2">
			<div class="blogs">
				<h2>Blog.</h2>
					<Blog/>
        </div>
    </div>
</main>
