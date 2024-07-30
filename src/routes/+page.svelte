<script>
	import { onMount, onDestroy } from 'svelte';
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let interval;

  const calculateCountdown = () => {
    const countToDate = new Date('2024-08-17T00:00:00+01:00').getTime(); // UK time zone
    const now = new Date().getTime();
    const difference = countToDate - now;

    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60)) / 1000);
  };

  onMount(() => {
    calculateCountdown();
    interval = setInterval(calculateCountdown, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<svelte:head>
	<title>Meg & Joe</title>
	<meta name="description" content="17th August 2024 | Morrells Wood Farm" />
</svelte:head>

<!-- Hero -->
<div class="text-center bg-image home-bg">
  <div class="mask position-relative">
	<div style="left:0;right:0;margin:auto;position:fixed;top:80px;">
		<h1 class="mb-2">17th August 2024</h1>

		<h2 class="mb-2"><a target="_blank" href="https://morrellswoodfarm.co.uk/weddings-and-civil-ceremonies-venue-hire/">Morrells Wood Farm</a></h2>
      
    </div>
    <div class="hp-bottom">
      <div class="text-white">
        
        
		<ul class="text-center mb-1">
			<li><span>{days}</span> days</li>
			<li><span>{hours}</span> Hours</li>
			<li><span>{minutes}</span> Minutes</li>
			<li><span>{seconds}</span> Seconds</li>
		</ul>
      </div>
    </div>
  </div>
</div>


<!-- Hero -->

<style>
:global(header) {
background: transparent !important; /* Light grey background */
/* border-bottom: none !important; */
}



  .hp-bottom {
    bottom: calc(env(safe-area-inset-bottom) + 80px);
    left:0;right:0;margin:auto;position: fixed;
  }

  .home-bg {
    position: relative;
  }

  .home-bg:before {
    content: '';
    position: fixed; /* Use fixed positioning for the pseudo-element */
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    background-image: url('$lib/images/family.webp');
    background-size: cover;
    background-position: center;
    z-index: -1; /* Ensure the pseudo-element is behind the content */
  }

  ul {
	padding-left: 0px;
}

li {
    display: inline-block;
    font-size: 0.9em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
    text-align: center;


}

li span {
    display: block;
    font-size: 1.4rem;
		font-family: 'Parisienne', cursive;
}
</style>