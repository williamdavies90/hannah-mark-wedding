<script>
  	import InfoCard from '$lib/InfoCard.svelte';
</script>

<svelte:head>
	<title>Helpful Information</title>
	<meta name="description" content="General Information" />
</svelte:head>


<div>
	<div class="embed-responsive embed-responsive-16by9">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.6983434894128!2d-2.7819027230580216!3d52.61122322947126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487074ebd441d101%3A0xce6dad305fd3001a!2sNetley%20Hall%20Weddings!5e0!3m2!1sen!2suk!4v1722867771973!5m2!1sen!2suk"></iframe>
	</div>
</div>

<div style="margin-top: 20px; margin-bottom: 100px;" class="container">

	<div class="info-container">
		<div class="row">
			<div class="col-6">
				<h3 class="mb-0 text-center">Day Guests</h3>
				<p class="mb-0 text-center guest-text">Ceremony&nbsp;at&nbsp;1pm,<br>guests&nbsp;to&nbsp;arrive&nbsp;from&nbsp;12.30pm</p>
			</div>
			<div class="col-6">
				<h3 class="mb-0 text-center">Evening Guests</h3>
				<p class="mb-0 text-center guest-text">Guests to arrive<br>from 7pm</p>
			</div>
		</div>
		<p class="mb-3 text-center gold">Bar open until 12.30am, DJ playing until 1am.</p>
		<InfoCard title="<span>&#127977;</span> Wedding Venue">
		<h4><a target="_blank" href="https://netleyhallweddings.com/">Netley Hall Dorrington</a></h4>
		<p>Phone: <a href="tel:01743718339">01743 718339</a></p> 
		<p>Address: Netley Hall, Dorrington, Shrewsbury, SY5 7JZ</p>
		<p><a target="_blank" href="https://www.google.com/maps/dir//Netley+Hall+Weddings+Netley+Hall+Netley+Dorrington+SY5+7JZ/@52.6106491,-2.7814526,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487074ebd441d101:0xce6dad305fd3001a">Get Directions</a></p>
		</InfoCard>

		<InfoCard title="<span>&#127917;</span> Dress Code">
		<p>Don't forget your dancing shoes and dress to impress for our Halloween Masquerade Ball.</p>
		</InfoCard>

		<InfoCard title="<span>&#127869;</span> Food">
			<p>Wedding Breakfast: Chicken Liver Pate, Roast Pork and Sticky Toffee Pudding</p>

			<p>Evening Reception: North African Roasted Leg of Lamb with Pitta Bread and Harissa Mayo</p>

			<p>Please advise ASAP of any allergy and dietary requirements.</p>
		</InfoCard>

		

		<InfoCard title="<span>&#127873;</span> Gifts">
		<p>Many of you will travel long distances to share our wedding day with us, so please do not feel obliged to get us anything else. However, if you would like to buy us a gift, a contribution towards our honeymoon would be really appreciated.</p>
		</InfoCard>

		<InfoCard title="<span>&#128661;</span> Transport">
		<p>Netley Hall has plenty of parking for those driving, otherwise local taxis can be booked.</p>

		<strong>Local Taxi Numbers:</strong>
		<ul>
			<li>Veezu: <a href="tel:01743441144">01743 441144</a></li>
			<li>Shropshire Cars: <a href="tel:07379338526">07379 338 526</a></li>
			<li>Star Cars: <a href="tel:01743353535">01743 353535</a></li>
			<li>Taxi Now: <a href="tel:01743818283">01743 818283</a></li>
		</ul>
		</InfoCard>

		<InfoCard title="<span>&#127976;</span> Accommodation">
			<p>Netley Hall has a number of rooms that have been reserved for the Bride, Groom and their families. These have been allocated with payment to be made directly to Hannah and Mark.</p>

			<p>There are also a limited number of holiday cottages within the grounds available to book on a first come, first served basis. These can be booked by contacting Netley Hall directly and informing them that you are attending Hannah and Mark’s wedding on 2nd November 2024.</p>

			<p>Shrewsbury is located 10 minutes away with a variety of hotels and bookable accommodation.</p>
		</InfoCard>
		<InfoCard title="<span>&#128241;</span> Install App">
			<p>Install this website on your home screen for a seamless app-like experience, providing immediate access to essential information and directions.</p>
			<strong>Android:</strong>
			<p>Tap the menu icon (3 dots in the upper right corner).</p>
			<p>Tap "Install App"</p>
			<strong>iPhone:</strong>
			<p>Find and tap the Share icon (square with an arrow pointing out) at the top or bottom of your browser screen.</p>
			<p>Scroll down and tap "Add to Home Screen."</p><br>
			<p><strong>You should now be able to find the icon within your apps.</strong></p>
		</InfoCard>
	</div>
</div>


<style>
	.info-container {
		display: grid;
		gap: 15px;
		padding: 0px;
	}
	.gold {
		font-family: 'Dancing Script', cursive;
		color: var(--accent-color2);
		font-size: 20px !important;
	}
	.guest-text {
		font-size: 14px !important;
	}
	ul {
		padding-top: 10px;
		padding-left: 15px;
	}
  	.icon {
		width: 16px;
		height: 16px;
	}
	:global(.title-container h3 span) {
    margin-right: 20px;
    margin-top: 5px;
	    display: block;
    height: 21px;
    width: 30px;
    float: left;
   }
</style>
