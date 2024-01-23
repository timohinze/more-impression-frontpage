<script>
	import Service from "$lib/Service.svelte";
	import Header from "../lib/Header.svelte";
	import Intro from "../lib/Intro.svelte";

	import Toggle from "../lib/Toggle.svelte";



import {handsatzBilder } from '../data/handsatz';
import  {handsatzContent} from '../data/handsatz'
</script>



<Header/>

<Intro/>

<Service content={handsatzContent} bilder = {handsatzBilder}/>



