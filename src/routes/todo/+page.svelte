<script>
  import { onMount, onDestroy } from 'svelte';
  let writing_portfolio = [];
  let mix_portfolio = [];
  let youtube = '';

  onMount(() => {
    console.log('The component has mounted');
    async function getTodoList() {
      const response = await fetch(`/todo.json`);
      todo_list = await response.json();
      youtube = todo_list;
    }

	getTodoList();

});

</script>

<h1>To-Do</h1>
<p>Blog Setup</p>
<p>To-do blocks setup</p>
<p>To-do json to html</p>
<p>SVG Page Setup</p>
<p>On-Going Projects</p>
<p>CSS/SVG for Contact</p>
<p>discord integration</p>
<p>easy-update-app</p>
<p>duckdb backend</p>
<p>github ssh-key setup</p>
