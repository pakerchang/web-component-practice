<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
	import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

		<div class="wrapper"><HelloWorld msg="Vue & Vite Web Component" /></div>
	</header>

	<main>
		<custom-element />
	</main>
</template>

<style lang="css">
	@import "./assets/base.css";

	h1 {
		color: #fff;
	}

	#app {
		max-width: 1280px;
		margin: 0 auto;
		padding: 2rem;

		font-weight: normal;
	}

	header {
		line-height: 1.5;
	}

	.logo {
		display: block;
		margin: 0 auto 2rem;
	}

	a,
	.green {
		text-decoration: none;
		color: hsla(160, 100%, 37%, 1);
		transition: 0.4s;
	}

	@media (hover: hover) {
		a:hover {
			background-color: hsla(160, 100%, 37%, 0.2);
		}
	}

	@media (min-width: 1024px) {
		body {
			display: flex;
			place-items: center;
		}

		#app {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 2rem;
		}

		header {
			display: flex;
			place-items: center;
			padding-right: calc(var(--section-gap) / 2);
		}

		header .wrapper {
			display: flex;
			place-items: flex-start;
			flex-wrap: wrap;
		}

		.logo {
			margin: 0 2rem 0 0;
		}
	}
</style>
