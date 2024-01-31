<script>
	import Service from "$lib/Service.svelte";
	import Header from "../lib/Header.svelte";
	import Intro from "../lib/Intro.svelte";

	import Toggle from "../lib/Toggle.svelte";



import {bilder as handsatzBilder} from '../data/handsatz';
import  {content as handsatzContent} from '../data/handsatz'


import {bilder as buchdruckBilder} from '../data/buchdruck';
import  {content as buchdruckContent} from '../data/buchdruck'

import {bilder as marmorBilder} from '../data/marmor';
import  {content as marmorContent} from '../data/marmor'

import {bilder as grafikBilder} from '../data/grafik';
import  {content as grafikContent} from '../data/grafik'

import {bilder as kollaborationBilder} from '../data/kollaboration';
import  {content as kollaborationContent} from '../data/kollaboration'
	import Footer from "../lib/Footer.svelte";


</script>



<Header/>

<Intro/>

<Service content={handsatzContent} bilder = {handsatzBilder}/>

<Service content={buchdruckContent} bilder = {buchdruckBilder}/>

<Service content={marmorContent} bilder = {marmorBilder}/>

<Service content={grafikContent} bilder = {grafikBilder}/>

<Service content={kollaborationContent} bilder = {kollaborationBilder}/>

<Footer/>