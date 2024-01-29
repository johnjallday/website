<script>
	import { Instagram, Home, Mail, Github } from 'lucide-svelte';

</script>

<nav class="container">
	<a href="/">
		<Home size={25} color="#ffe9b0" />
	</a>
	<a href="/contact">
		<Mail size={25} color="#ffe9b0"/>
	</a>
	<a href="https://instagram.com/johnj.alldayok">
		<Instagram size={25} color="#ffe9b0"/>
	</a>
  <a href="https://github.com/johnjallday/">
		<Github size={25} color="#ffe9b0"/>
  </a>
</nav>

<style>
	.container {
		padding: 5px;
	}

</style>

