import type { Actions } from './$types';
import type { Event } from '$lib/userstate/userstate.svelte';

export const actions = {
    default: async ({ request, locals: { supabase } }) => {
        try {
            const formData = await request.formData();
            
             const requiredFields = ['name', 'start_date', 'end_date', 'time', 'location', 'department'];
            for (const field of requiredFields) {
                if (!formData.get(field)) {
                    return {
                        success: false,
                        error: `Missing required field: ${field}`
                    };
                }
            }

             const eventData: Event = {
                name: formData.get("name")?.toString().trim() || '',
                start_date: formData.get("start_date")?.toString() || '',
                end_date: formData.get("end_date")?.toString() || '',
                time: formData.get("time")?.toString() || '',
                location: formData.get("location")?.toString().trim() || '',
                department: formData.get("department")?.toString().trim() || '',
                color: formData.get("color")?.toString() || '#000000', // default color
                price: Number(formData.get("price")) || 0,
                max_slots: Number(formData.get("max_slots")) || 0,
                description: formData.get("description")?.toString().trim() || '',
                food_provided: formData.get("food_provided") === 'on' || formData.get("food_provided") === 'true',
                od_provided: formData.get("od_provided") === 'on' || formData.get("od_provided") === 'true',
            };

             const startDate = new Date(eventData.start_date);
            const endDate = new Date(eventData.end_date);
            
            if (startDate >= endDate) {
                return {
                    success: false,
                    error: 'End date must be after start date'
                };
            }

             const { error } = await supabase.from('events').insert(eventData);

            if (error) {
                console.error('Database error:', error.message);
                return {
                    success: false,
                    error: 'Failed to create event. Please try again.'
                };
            }

            return {
                success: true,
                message: 'Event created successfully!'
            };

        } catch (err) {
            console.error('Unexpected error:', err);
            return {
                success: false,
                error: 'An unexpected error occurred. Please try again.'
            };
        }
    }
} satisfies Actions;