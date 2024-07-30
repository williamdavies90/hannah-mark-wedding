<script>
  	import InfoCard from '$lib/InfoCard.svelte';
	import { faTshirt, faUtensils, faBaby, faGift, faTaxi, faHotel, faMobile, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';  
	import paypal from '$lib/images/paypal-qr.png';
</script>

<svelte:head>
	<title>Helpful Information</title>
	<meta name="description" content="General Information" />
</svelte:head>


<div style="margin-top: 55px;">
	<div class="embed-responsive embed-responsive-16by9">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78642.21719799664!2d-2.61662255564669!3d52.643051259652374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487078f347e489f5%3A0x7c73d812e066dec5!2sMorrells%20Wood%20Farm!5e0!3m2!1sen!2suk!4v1610961600630!5m2!1sen!2suk"></iframe>
	</div>
</div>

<div style="margin-top: 20px; margin-bottom: 100px;" class="container">

	<div class="info-container">
		<h3 class="mb-0 text-center">Ceremony&nbsp;at&nbsp;1pm, <br>guests&nbsp;to&nbsp;arrive&nbsp;from&nbsp;12.30pm</h3>
		<p class="mb-3 text-center"><i>(Music ends at 12am, bar closes 12.30am)</i></p>
		<InfoCard title="Wedding Venue" icon={faMapMarkerAlt}>
		<h4><a target="_blank" href="https://morrellswoodfarm.co.uk/weddings-and-civil-ceremonies-venue-hire/">Morrells Wood Farm</a></h4>
		<p>Email: <a href="mailto:contact@morrellswoodfarm.co.uk">contact@morrellswoodfarm.co.uk</a></p> 
		<p>Phone: <a href="tel:01952510273">01952 510273</a></p> 
		<p>Address: Morrells Wood Farm, Leighton, Shrewsbury, Shropshire, SY5 6RU</p>
		<p><a target="_blank" href="https://www.google.com/maps/dir//Morrells+Wood+Farm+Leighton+Shrewsbury+SY5+6RU/@52.6542332,-2.5892419,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x487078f347e489f5:0x7c73d812e066dec5!2m2!1d-2.5480426!2d52.6541883!3e0?entry=ttu">Get Directions</a></p>
		</InfoCard>

		<InfoCard title="Dress Code" icon={faTshirt}>
		<p>Whatever you feel comfortable in, but we will be dressing up! Although bear in mind it is a working farm, no expensive shoes!</p>
		</InfoCard>

		<InfoCard title="Food" icon={faUtensils}>
		<strong>Buffet consisting of:</strong>
		<ul>
			<li>Sal's Famous Cheese and Spinach Lasagne</li>
			<li>Beef Lasagne</li>
			<li>Chicken Curry</li>
			<li>Rice</li>
			<li>Assorted Salads</li>
			<li>Desserts</li>
		</ul>

		<p>Pizza will be served in the evening.</p>

		<p>All dietary requirements will be catered for, but can you <a href="mailto:joeandmegwedding@outlook.com?subject=Dietary%20Requirements">please let us know what your requirements are asap</a>. For allergies, the venue may ask you to fill in a form.</p>

		</InfoCard>

		<InfoCard title="Children" icon={faBaby}>
		<p>We love you and we love your children, but between the two of us we have nearly 50 gorgeous munchkins in our lives. With this in mind, and the guest limit imposed by the venue, we would really appreciate it if you could leave your children at home. There are of course exceptional circumstances, so get in touch if you feel this is impossible for you.</p>
		</InfoCard>

		<InfoCard title="Gifts" icon={faGift}>
		<p>Your presence is our greatest gift. However, if you wish to give something, <strong>contributions towards our honeymoon</strong> (we have provided a PayPal QR code below) or donations to <a target="_blank" href="https://www.shropshirecatrescue.org.uk/donate">Shropshire Cat Rescue</a> or <a target="_blank" href="https://www.pancreaticcancer.org.uk/donate/">Pancreatic Cancer UK</a> would be greatly appreciated.</p>
		<img width="150px" src={paypal} alt="paypal" />
		</InfoCard>

		<InfoCard title="Transport" icon={faTaxi}>
		<strong>Parking:</strong>
		<p>Ample parking is available for those driving.</p>
		<strong>Local Taxi Numbers:</strong>
		<ul>
			<li>Veezu: <a href="tel:01743441144">01743 441144</a></li>
			<li>Shropshire Cars: <a href="tel:07379338526">07379 338 526</a></li>
			<li>Star Cars: <a href="tel:01743353535">01743 353535</a></li>
			<li>Taxi Now: <a href="tel:01743818283">01743 818283</a></li>
		</ul>
		</InfoCard>

		<InfoCard title="Accommodation" icon={faHotel}>
			<p>There are numerous excellent local accommodation options. We recommend booking early to ensure availability.</p>
			<strong>Within 5 minutes of the venue:</strong>
			<ul>
				<li><a target="_blank" href="https://www.thewroxeterhotel.co.uk/">The Wroxeter Hotel</a></li>
			</ul>

			<strong>Within 10 minutes:</strong>
			<ul>
				<li><a target="_blank" href="https://www.brunningandprice.co.uk/myttonandmermaid/">Mytton and Mermaid</a></li>
				<li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214435727115335?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=534d0518-4ec3-4eac-b7b0-91fd2faccd60">Airbnb - Shrewsbury</a></li>
				<li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214323096529822?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=3ebbb628-dd4a-433f-9844-f28cadd66b36">Airbnb - Shrewsbury</a></li>
				<li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214656263721124?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=6cbb3da3-64f5-4678-8efc-e7d35fc0ab59">Airbnb - Shrewsbury</a></li>
				<li><a target="_blank" href="https://www.airbnb.co.uk/rooms/567214542132186926?check_in=2024-08-17&check_out=2024-08-18&guests=1&adults=2&viralityEntryPoint=1&s=76&unique_share_id=4d457d3b-15dd-4af6-a69e-3ed058479561">Airbnb - Shrewsbury</a></li>
			</ul>

			<strong>Within 15 minutes:</strong>
			<ul>
				<li><a target="_blank" href="https://www.oldhallcressage.co.uk/">Old Hall Cressage</a></li>
				<li><a target="_blank" href="https://www.chefandbrewer.com/pubs/shropshire/riverside-inn">Riverside Inn</a></li>
			</ul>

			<!-- <strong>Shrewsbury, 20 minutes, but will offer a coach for £2 each to and from Shrewsbury if enough people are interested:</strong> -->
			<ul>
				<li><a target="_blank" href="https://www.princeruperthotel.co.uk/">Prince Rupert Hotel</a></li>
				<li><a target="_blank" href="https://www.oldpostofficepub.co.uk/en-GB">Old Post Office Pub</a></li>
				<li><a target="_blank" href="https://www.premierinn.com/gb/en/hotels/england/shropshire/shrewsbury/shrewsbury-town-centre.html?cid=GLBC_SHRSMI">Premier Inn Shrewsbury Town Centre</a></li>
			</ul>
		</InfoCard>
		<InfoCard title="Install App" icon={faMobile}>
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
	ul {
		padding-top: 10px;
		padding-left: 15px;
	}
  	.icon {
		width: 16px;
		height: 16px;
	}
</style>
