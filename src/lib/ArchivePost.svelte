<script>
    // import Swiper JS
    import Swiper from 'swiper';
    import { Navigation } from 'swiper/modules';

    // import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';


    const swiper = new Swiper('.swiper', {
        modules: [Navigation],

  // Optional parameters
//   direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});



import '../styles/app.css'

    export let title = ""
    export let bilder = []
    export let info = {}
    export let infoListe = []
</script>


<section>



<div class="spalte">
<div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      {#each bilder as bild, i}
        {#if bild.src }
        <div class="swiper-slide">
            <img src ="{bild.src}" alt ="{bild.alt}"/>
        </div> 
        {/if}
     {/each}
    </div>
  
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
  </div>

 
</div> 

<div class="spalte">

    <div class="info">
        <h2 class="linie-unten">{title}</h2>
    
        <ul class="linie-unten">
            {#each infoListe as info, i}
            <li><div>{@html info.name}</div> <div>{@html info.eingabe}</div></li>
            {/each}
        </ul>
    
    </div>  

    <div class="info-text">
        {@html info}
    </div>

  </div>

</section>



<style>



.swiper{
    margin-left: 0;
}
  
section{
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    font-size: 13.4px;
    line-height: 1.12;
}

img{
    max-width: 100%;
    height: auto;
}

    .swiper {
  width: 350px;
  height: auto;

}


.linie-unten {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
}

ul {
    padding-top: 7px;
    padding-bottom: 7px;
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    display: flex;
    margin-bottom: 5px;
}

li div:first-of-type{
    min-width: 35%;


}

.spalte{
    width: 100%;
}


:global(li p){
    margin: 0;
}

:global(h2){
    margin-top: 0;
    font-size: inherit;
    font-weight: bold;
}

:global(.swiper-button-prev, .swiper-button-next){
    color: white;
}


section{
    display: flex;
    gap: 2rem;

    
}

</style>