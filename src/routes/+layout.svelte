<script>
	import Header from './Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<Header />

	<main>
		<div>
			<slot />
		</div>
	</main>

	<footer>
		<p></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: center;
		max-width: 1000px;
		margin: 0 auto;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		
		width: 100%;
		
		margin: 0 auto;
		box-sizing: border-box;
	}

	.inner-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
