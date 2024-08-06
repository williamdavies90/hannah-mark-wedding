<script>
	import { page } from '$app/stores';
	import img from '$lib/images/logo.png';
</script>
<header>
	<h1 class="text-center mt-2 mb-2"><img width="105px" src={img} alt="Image" /></h1>
</header>
	<nav>
		
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/info' ? 'page' : undefined}>
				<a href="/info">Info</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
				<a href="/contact">RSVP</a>
			</li>
		</ul>
	</nav>

<style>
	
	header {
		border-bottom: 1px solid var(--secondary-color);
		width: 100%;
		background: #FFFFFF;	
		height: 100px;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: var(--color-text);
		font-weight: bold;
		font-size: 1.4rem !important;
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
		/* padding-bottom: env(safe-area-inset-bottom); */
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

	li[aria-current='page']::after { 
		position: absolute;
		content: '';
		width: 100%;
		height: 3px;
		background-color: var(--accent-color);
		display: block;
		bottom: -1px;
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
		z-index: 999999;
		width: 100%;
		border-bottom: 1px solid var(--secondary-color);
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
			font-size: 16px !important;
			line-height: 20px !important;
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
