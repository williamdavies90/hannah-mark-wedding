<script>
	import { onMount, onDestroy } from 'svelte';
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let interval;
  import mainImg from '$lib/images/family.webp';

  const calculateCountdown = () => {
    const countToDate = new Date('2024-11-02T00:00:00+01:00').getTime(); // UK time zone
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
	<title>Hannah & Mark</title>
	<meta name="description" content="2nd November 2024 | Netley Hall" />
</svelte:head>

<!-- Hero -->
<div class="text-center">
  
	<div class="home-bg">
		      <img width="100%" src={mainImg} alt="Image" />

          <ul class="text-center mb-1 counter">
			<li><span>{days}</span> days</li>
			<li><span>{hours}</span> Hours</li>
			<li><span>{minutes}</span> Minutes</li>
			<li><span>{seconds}</span> Seconds</li>
		</ul>
  </div>
<div>

    <h1 class="mt-4 mb-0">2nd November 2024<br> <a target="_blank" href="https://netleyhallweddings.com/">Netley Hall</a></h1>        

</div>	
</div>


<!-- Hero -->

<style>
:global(header) {
background: transparent !important; /* Light grey background */
border-bottom: none !important;
z-index: 2;
}

h1 a {
  color: var(--accent-color2);
}

.counter {
  margin-top: -84px;
  color: #FFF;
  position: relative;
  z-index: 2;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.7) 100%);
    z-index: 1; /* Ensure the pseudo-element is behind the content */
  }

  .home-bg img {
    position: relative;
    z-index: 0;
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