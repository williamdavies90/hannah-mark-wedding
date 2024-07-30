<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
	import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

</script>
<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact/RSVP" />
</svelte:head>

<div style="margin-top: 85px;" class="container">
	<div class="text-column text-center">
		<h3 class="text-center">RSVP by 17th May 2024</h3>
		<p class="text-center">To RSVP or for any other queries please contact the bride or groom using the below details:</p>
			<FontAwesomeIcon style="color: #344235;" class="icon" icon="{faWhatsapp}" size="1x" />&nbsp;<a href="https://wa.me/+447446015895">WhatsApp</a><br><br>
			<FontAwesomeIcon style="color: #344235;" class="icon" icon="{faPhone}" size="1x" />&nbsp;<a href="tel:07446015895">07446015895</a><br><br>
			<FontAwesomeIcon style="color: #344235;" class="icon" icon="{faEnvelope}" size="1x" />&nbsp;<a href="mailto:joeandmegwedding@outlook.com?subject=Meg%20%26%20Joe%20Wedding">joeandmegwedding@outlook.com</a><br><br>
	</div>
</div>

<style>
.icon {
    width: 16px; /* Adjust based on your preference */
    height: 16px; /* Ensure this matches the width for square aspect ratio */
}
</style>