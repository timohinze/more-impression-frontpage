<script>
import syncHeight from "$lib/syncHeight";
import { spring } from "svelte/motion";

let el;
//   let shown = false;
let shown = false;

const getConfig = val => {
let active = typeof val === "number";
let immediate = !shown && active;
//once we've had a proper height registered, we can animate in the future
shown = shown || active;
return immediate ? { hard: true } : {};
};


let open = false;

const heightSpring = spring(0, { stiffness: 0.1, damping: 0.3 });
$: heightStore = syncHeight(el);
$: {
heightSpring.set(open ? $heightStore || 0 : 200, getConfig($heightStore));
Object.assign(
  heightSpring,
  open ? { stiffness: 0.1, damping: 0.3 } : { stiffness: 0.1, damping: 0.5 }
);
}
const toggleOpen = () => (open = !open);

</script>

<button on:click={ toggleOpen }>test</button>
<div class="test" style="overflow: hidden; height: { $heightSpring }px">
  <div bind:this={el}>
    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae magnam adipisci numquam accusamus repellat aspernatur consectetur eum aliquam tempora architecto eligendi aut nisi, quasi quos est quo laborum vel tempore!
	</div>
  </div>
</div>

<style>
	.test{
		font-size: 20px;
		width: 200px;
		background: darkcyan;
	}
</style>