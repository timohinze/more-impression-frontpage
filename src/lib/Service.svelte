<script>
let lang ="de"

export let titel = ""
export let bilder = []
export let content = {}


let btnText ="Mehr erfahren"

import syncHeight from "$lib/syncHeight";
import { tweened } from "svelte/motion";


let bildOrdner = "./src/lib/assets/img/";


import '../styles/app.css'
	import Sticker from "./Sticker.svelte";

let el;
// let shown = false;

let open = false;
$: open = open;



// nicht nötig?
// const getConfig = val => {
//     let active = typeof val === "number";
//     let immediate = !shown && active;
//     //once we've had a proper height registered, we can animate in the future
//     shown = shown || active;
//     return immediate ? { hard: true } : {};
// };




const heightSpring = tweened(0, { duration: 900});
$: heightStore = syncHeight(el);
$: {
heightSpring.set(open ? $heightStore || 0 : 600);
// Object.assign(
//   heightSpring,
//   open ? { stiffness: 0.02, damping: 0.86 } : { stiffness: 0.04, damping: 0.8 }
// );

// if(el){
//     console.log("test")
// el.scrollIntoView({
//       behavior: 'smooth'
//     });
// }
}


// const toggleOpen = () => (open = !open);

function toggleOpen(){

    if(open){
        btnText="Mehr erfahren";

        el.scrollIntoView({
      behavior: 'smooth',
      
    });

    }else{
        btnText="Weniger erfahren"

        el.scrollIntoView({
      behavior: 'smooth',
      
    });
    }
    open = !open

}


// const groesse = tweened(0,{
//     duration: 500,
// })



</script>


<section>
<header>
    
    <dic class="topline">{content.topline}</dic>
    <h2 class="islingtion">{content.titel}</h2>

</header>


<div class="outerwrapper {open ? 'open' :'' }" style="position: relative; height: { $heightSpring }px">



    <div class="wrapper" bind:this={el}>
    <div class="reiter islingtion" style="">{content.titel}</div>



    <div class="toggle-content">
    <div class="intro">{content.intro}
    </div>


    <Sticker text="{content.sticker}"/>



    <div class="bilder">

        {#each bilder as bild, i}
            <div class="bild">

                {#if bild.src }
                 <img src ="{bildOrdner+bild.src}" alt ="{bild.alt}"/>
                 {/if}

                {#if i% 2 !=0}
                <div class="caption">
                        {i}  {bilder[i-1].caption}<br>
                        {i+1} {bild.caption}
                </div>
                 {/if}
            </div>
        {/each}


    </div>

    <div class="text">
    {content.text}
  
      </div>


    </div>
    
    </div>


</div>
<div class="toggle-btn">
    <button class="islingtion" on:click={ toggleOpen }>{btnText}</button>
</div>

</section>





<style>


.wrapper{
    display: flex;
    flex-direction: row;
}

    .bilder{
        display: flex;
        flex-wrap: wrap;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .bild{
        width: 50%;
        padding: 1rem;
    }

    .bild:nth-of-type(2n){
        padding-right: 3rem;
    }

    .bild:nth-of-type(3n){
        padding-left: 3rem;
        padding-top: 3rem;
    }
header{
    border-bottom: 1px solid;
    border-top: 1px solid;
    padding-top: 2rem;
    padding-bottom: 1.75rem;
    padding-left: 3.5rem;


}
.topline{
    font-size: 0.9rem;
}

h2{
    font-size: 4.5rem;
    margin: 0;
    margin-top: 1.75rem;
}

    .intro{
        padding-top: 1.5rem;
        font-size: 1.2rem;
        max-width: 70ch;
    }



.toggle-btn{
    padding: 1rem;
    border-top: 1px solid;
    border-bottom: 1px solid;

    /* position: sticky;
    bottom: 0;
    background: white; */
}


.reiter{

top: 0;

padding: 0.75rem;

font-size: 1.5rem;

height: 600px;
text-align: right;
    writing-mode: vertical-lr;

    transition: height 1s;


}

.toggle-content{
    position: relative;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.toggle-content::before{
    content: "";
    position: absolute;
    border-right: 1px solid;
    height: 100%;
    left: 0;
    height: 100%;
    bottom: 0;
    z-index: 9;
}

.open .reiter{
    position: sticky;
    height: 100%;
}

.outerwrapper{
    overflow: hidden;
}

.outerwrapper.open{
    overflow: unset;
}


.toggle-btn button{
    all:unset;
    margin-left: 3rem;
    font-size: 1.35rem;


}



.caption::before{
    position: absolute;
    top: -0.5em;
    width: 200px;
    content: " ";
    border-top: 1px solid;
}
.caption{
    position: relative;
}

.caption ol{
    padding: 1rem;
}
.caption li{
    padding-left: 1rem;
}
.text{
    margin-bottom: 1rem;
}
</style>