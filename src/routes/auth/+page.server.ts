import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { goto } from '$app/navigation';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = (formData.get('rrn') + '@crescent.education') as string;
		const password = formData.get('password') as string;
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			if (error.message) {
				redirect(303, '/auth/error/' + error.message);
			} else {
				redirect(303, '/auth/error/');
			}
		} else {
			redirect(303, '/private/dashboard');
		}
	}
};
