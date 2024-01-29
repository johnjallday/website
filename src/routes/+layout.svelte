<!-- +layout.svelte -->
<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BackgroundWaves from '$lib/components/BackgroundWaves.svelte'; 
  import { page } from '$app/stores';

  $: activePath = $page.url.pathname;
</script>

<div class="layout-container">
  <Header {activePath}/>
  <BackgroundWaves />
  <slot />
  <Footer />
</div>

<style>
  .layout-container {
    display: flex;
    flex-direction: column;
  }

  .content {
	}

</style>
