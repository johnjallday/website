
<script>
    import Portfolio from '$lib/components/blocks/Portfolio/Portfolio.svelte';
    import Service from '$lib/components/blocks/Service.svelte';
    import About from '$lib/components/blocks/About.svelte';
    import Blogs from '$lib/components/blocks/Blogs.svelte';
    import Updates from '$lib/components/blocks/Updates.svelte';
</script>


<style>
    main {
        display: grid;
        gap: 20px;
        height: 100vh;
    }

    /* Define a global font */
    body, * {
        font-family: 'Raleway', sans-serif;
    }

    .row1 {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr; /* 3/4 for Portfolio, 1/4 for Service */
        gap: 20px;
    }

    .row1-last {
        display: grid;
        gap: 20px;
        grid-template-rows: 1fr 3fr;
    }

    .row1-last > div {
  	    border: 2px solid #ddd; 
    }

    .service, .about, .portfolio, .blogs, .updates {
        composes: global;
    }
</style>

	
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Raleway:wght@100;200;400&display=swap" rel="stylesheet">


	<main>
    <div class="row1">
        <div class="portfolio">
            <Portfolio/>
        </div>
        <div class="service">
            <Service/>
					</div>

				<div class="row1-last">
        	<div class="about">
            <About/>
					</div>
					<div class="updates">
						<Updates/>
					</div>
				</div>
    </div>
    <div class="row2">
        <div class="blogs">
					<Blogs/>

        </div>
    </div>
</main>
