

<script>
    import Portfolio from '$lib/components/blocks/Portfolio.svelte';
    import Service from '$lib/components/blocks/Service.svelte';
    import About from '$lib/components/blocks/About.svelte';
    import Blog from '$lib/components/blocks/Blog.svelte';
    import Todo from '$lib/components/blocks/Todo.svelte';
    import Updates from '$lib/components/blocks/Updates.svelte';
		import '$lib/css/global.css';
</script>


<style>
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
</style>

	
<main>

<h1>johnj.</h1>

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
</main>
