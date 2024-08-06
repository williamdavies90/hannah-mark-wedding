<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faPhone, faMusic} from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

</script>
<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact/RSVP" />
</svelte:head>

<div class="container">
	<div class="text-column text-center">
		<h3 class="text-center mt-4">RSVP by 31st August 2024</h3>
		<p class="text-center">To RSVP or for any other queries please contact the bride or groom using the below details:</p>
			<FontAwesomeIcon style="color: #4b0082;" class="icon" icon="{faWhatsapp}" size="1x" />&nbsp;<a href="https://wa.me/+447951965479">WhatsApp</a><br><br>
			<FontAwesomeIcon style="color: #4b0082;" class="icon" icon="{faPhone}" size="1x" />&nbsp;<a href="tel:07951965479">07951965479</a><br><br>
			<FontAwesomeIcon style="color: #4b0082;" class="icon" icon="{faMusic}" size="1x" />&nbsp;<a href="https://wa.me/+447951965479">Contact Us For Song Requests</a>
	</div>
</div>

<style>
.icon {
    width: 16px; /* Adjust based on your preference */
    height: 16px; /* Ensure this matches the width for square aspect ratio */
}
</style>