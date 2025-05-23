import type { PageLoad } from './$types';
import type { Event } from '$lib/userstate/userstate.svelte';

export const load: PageLoad = async ({ params, parent , data }) => {    
    
    let { supabase } = await parent();
    const { event_id } = params;
     const { data: event, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', event_id)
        .single<Event>();

    if (error) {
        
        return {
            event: null as Event | null,
            error: error
        };
    }   

    return {
        event: event as Event,
    };
};