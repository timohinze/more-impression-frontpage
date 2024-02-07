<script>
    import { onMount } from 'svelte';
	import ArchivePost from '../../lib/ArchivePost.svelte';
	import Header from '../../lib/Header.svelte';

    let projects = [];

    onMount(async () => {
		const res = await fetch(`https://more-impression.com/wp-json/api/archiv`);
		projects = await res.json();
	});
</script>

<Header />

<header>
    <h1 class="islingtion">Archiv</h1>
</header>

<div class="archiv-posts">

    {#each projects as project}
        <ArchivePost title="{project.title}" bilder="{project.bilder}" infoListe="{project.info_liste}" info="{project.info}"/>
    {/each}
</div>


<style>

    header{
        border-bottom: 1px solid;
    border-top: 1px solid;
    padding-top: 2rem;
    padding-bottom: 1.75rem;
    padding-left: 3.5rem;
    margin-bottom: 2rem;
    }

h1{
    font-size: 4.5rem;
    margin: 0;
    margin-top: 1.75rem;
}

    .archiv-posts{
        gap: 3rem;
        display: grid;
  grid-template-columns: auto auto;

    }
</style>


