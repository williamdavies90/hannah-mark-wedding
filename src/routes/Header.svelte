<script>
	import { page } from '$app/stores';
	import img from '$lib/images/logo.svg';
</script>
<header>
	<h1 class="text-center mt-2 mb-2"><img width="48px" src={img} alt="Image" /></h1>
</header>
	<nav>
		
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/"><svg aria-hidden="true" class="fa-svelte test mx-auto d-block" role="img" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" fill="currentColor"></path></svg>Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/info' ? 'page' : undefined}>
				<a href="/info"><svg class="fa-svelte test mx-auto d-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119.1 8 256c0 137 111 248 248 248s248-111 248-248C504 119.1 393 8 256 8zm0 110c23.2 0 42 18.8 42 42s-18.8 42-42 42-42-18.8-42-42 18.8-42 42-42zm56 254c0 6.6-5.4 12-12 12h-88c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h12v-64h-12c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h64c6.6 0 12 5.4 12 12v100h12c6.6 0 12 5.4 12 12v24z" fill="currentColor"/></svg>Info</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact"><svg aria-hidden="true" class="fa-svelte test mx-auto d-block svelte-1gsdhct" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" fill="currentColor"></path></svg>RSVP</a>
			</li>
		</ul>
	</nav>

<style>
	header {
		border-top: 3px solid var(--primary-color);
		border-bottom: 1px solid var(--secondary-color);
		position: fixed;
		top: 0;
		width: 100%;
		background: #FFFFFF;	
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	nav {
		font-weight: 300;
		padding: 0 1em;
		text-align: center;
		
	}

	ul {
		display: inline-block;
		padding: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		padding: 5px 0;
		margin: 0px auto;
	}

	li[aria-current='page'] {
		position: relative;
		display: inline-block;
	}

	li[aria-current='page']::before { 
		position: absolute;
		content: '';
		width: 100%;
		height: 3px;
		background-color: var(--accent-color);
		display: block;
		top: -1px;
	}

	a {
		text-decoration: none;
		padding: 0.5em;
		display: block;
		text-transform: uppercase;
		flex-direction: column;
	}
	svg {
		width: 20px;
		margin-bottom: 5px;
	}
	nav {
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		z-index: 999999;
		width: 100%;
		border-top: 1px solid var(--secondary-color);
	}
	nav ul {
			width: 100%;
			margin-bottom: 0px !important;
			display: flex;
			justify-content: space-between;
	}
	li {
		width: 25%;
		color: var(--accent-color2) !important;
	}
	li a {
		font-size: 22px;
		line-height: 16px; 
		padding-bottom: 5px;
	}
	li a {
			font-size: 11px !important;
		}
	li a span.icon {
			font-size: 22px !important;
			line-height: 16px !important; 
		}
	li[aria-current='page'] a {
		
		color: var(--primary-color);
	}
	li[aria-current='page'] path {
		fill: var(--primary-color);
	}
	.selected:after {
		background-color: var(--primary-color);;
	}
	@media (min-width: 768px) {
		a:hover:after {
			background-color: var(--primary-color);
		}
		a:hover {
			
			color: var(--primary-color);
		}
		a:hover {
			color: var(--primary-color);
		}
	}
</style>
