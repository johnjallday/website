
<script>
	import Tabs from "./Tabs.svelte";
	import TabProd from "./TabProd.svelte";
	import TabMix from "./TabMix.svelte";
	
	//Loads Tab Mix and TabProd.svelte
	let items = [
		{ label: "Prod/Writing",
		 value: 1,
		 component: TabProd
		},
    { label: "Mix",
		 value: 2,
		 component: TabMix
		}
  ];

</script>


<main>

  <Tabs {items} />
    
</main>
