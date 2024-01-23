<script>
    export let text = "";
</script>

<div class="sticker-wrapper">
    <a href="/">
            <div class="sticker">{@html text}</div>
        </a> 
    </div>



<style>

    /* Sticker Component*/

.sticker-wrapper a{
    text-decoration: none;
    color: black;
}

.sticker{
    margin-left: 125px;
    margin-top: 25px;
    margin-bottom: 25px;
    padding: 1rem;
    --b: 1px;  /* border */
    --s: 20px; /* size of the cut */
    
    width:300px;
    display:inline-block;
    aspect-ratio:3.1;
    position:relative;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    color: black;
    text-decoration: none;
}

.sticker::before{
        content:"";
        position:absolute;
        inset:0;
        z-index:-1;
        background: black;
        --g1:#000 var(--b),#0000 0 calc(100% - var(--b)),#000 0;
        --g2:#0000   calc(0.707*var(--s)), 
             #000  0 calc(0.707*var(--s) + var(--b)),
             #0000 0 calc(100% - 0.707*var(--s) - var(--b)),
             #000  0 calc(100% - 0.707*var(--s)),
             #0000 0;
        -webkit-mask:
          linear-gradient(45deg ,var(--g2)),
          linear-gradient(-45deg,var(--g2)),
          linear-gradient(90deg ,var(--g1)) 50%/100% calc(100% - 2*var(--s)) no-repeat,
          linear-gradient(180deg,var(--g1)) 50%/calc(100% - 2*var(--s)) 100% no-repeat;
          
}

.sticker:hover{

    color: red;
}
</style>