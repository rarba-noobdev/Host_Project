<script lang="ts">
	import { navigating , page } from '$app/state';
	import { invalidate } from '$app/navigation';
	let { data, children } = $props();
	let { session, supabase } = $derived(data);
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import { setUserState } from '$lib/userstate/userstate.svelte';
	const userState = setUserState({
		session: data.session,
		supabase: data.supabase,
		user: data.user
	});

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			userState.updateState({
				session: newSession,
				supabase: supabase,
				user: newSession?.user || null
			});
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

{#if navigating.to || navigating.from}
	<div
		class="h-1.5 w-full [animation:gradient_2s_linear_infinite] rounded-full bg-gradient-to-r from-blue-500
              bg-[length:400%_100%]"
	></div>
{/if}
<Header></Header>
{@render children()}

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
</style>
