<script lang="ts">
	import { getUserState } from '$lib/userstate/userstate.svelte';
	let user_state = getUserState();
	let  user  = $derived(user_state.user);
	const logout = async () => {
		await user_state.logOut();
	};
</script>

<header
	class="sticky top-0 z-10 flex items-center justify-between border-b border-indigo-500/30 bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 px-4 py-3 text-white shadow-lg shadow-indigo-950/50 backdrop-blur-sm md:px-6 md:py-4"
>
	<div
		class="absolute top-1/2 left-4 h-8 w-8 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-md"
	></div>

	<h1 class="relative text-xl font-bold tracking-tight md:text-2xl">
		<a
			href="/"
			class="flex items-center gap-2 transition-all duration-200 hover:text-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-950 focus:outline-none"
		>
			<span class="relative text-2xl text-indigo-300 md:text-3xl">🌕</span>
			<span
				class="hidden bg-gradient-to-r from-indigo-300 to-teal-200 bg-clip-text font-extrabold text-transparent md:inline"
				>Crescent</span
			>
		</a>
	</h1>

	<div class="flex items-center gap-3 md:gap-6"> 
		<nav class="hidden items-center gap-3 md:flex md:gap-4">
			{#if user}
				<a
					href="/private/create event"
					class="group flex items-center rounded-full border border-emerald-500/30 bg-emerald-600/10 px-4 py-1.5 text-sm font-medium text-emerald-300 shadow-md transition-all duration-200 hover:bg-emerald-600/20 hover:text-emerald-100 hover:shadow-emerald-500/20 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
					</svg>
					<span class="whitespace-nowrap">Host Event</span>
				</a>
				<a
					href="/private/dashboard"
					class="group flex items-center rounded-full border border-indigo-500/30 bg-indigo-600/10 px-4 py-1.5 text-sm font-medium text-indigo-300 shadow-md transition-all duration-200 hover:bg-indigo-600/20 hover:text-indigo-100 hover:shadow-indigo-500/20 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
						/>
					</svg>
					<span class="whitespace-nowrap">Dashboard</span>
				</a>
			{/if}
		</nav>

		<div class="flex items-center gap-2 md:gap-3">
			{#if !user}
				<a
					href="/auth"
					class="flex items-center rounded-full border border-indigo-500/30 bg-indigo-700/30 px-4 py-1.5 text-sm font-medium text-indigo-200 shadow-md transition-all duration-200 hover:bg-indigo-600/40 hover:text-indigo-100 hover:shadow-indigo-500/20 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-1.5 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
						/>
					</svg>
					<span class="hidden whitespace-nowrap sm:inline">Sign In</span>
				</a>
			{:else}
				<div
					class="hidden items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-600/10 px-3 py-1.5 sm:flex"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-indigo-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
						/>
					</svg>
					<span class="max-w-[120px] truncate text-sm font-medium text-indigo-200">{user.email}</span>
				</div>
				<button onclick={() => logout()}
					class="flex items-center rounded-full border border-indigo-500/30 bg-indigo-700/20 px-3 py-1.5 text-sm font-medium text-indigo-200 shadow-md transition-all duration-200 hover:bg-indigo-600/40 hover:text-indigo-100 hover:shadow-indigo-500/20 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-1 h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="1.75"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
						/>
					</svg>
					<span class="hidden sm:inline"  >Logout</span>
				</button>
			{/if}
		</div>
	</div>
</header>

<style>


	/* Smooth transitions for all interactive elements */
	a,
	button {
		transition-property: color, background-color, border-color, transform, box-shadow;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	/* Better focus states */
	:focus-visible {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.5);
	}
</style>
