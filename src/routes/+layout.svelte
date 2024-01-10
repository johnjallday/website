
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from  '$lib/components/Footer.svelte';
	
</script>
  
<Header />

<!-- Content of your individual +page.svelte files will be injected here -->
<slot />
<Footer />

<style>
  /* Global styles can also go here */
	    body, * {
			font-family: 'Raleway', sans-serif;
			}
</style>
