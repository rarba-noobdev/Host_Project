import type { Actions , PageServerLoad} from './$types';

export const actions : Actions = {
	default: async ({request , locals : {supabase} , params} ) => {
     
		let formData = await request.formData();
        let updateData = {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            start_date: formData.get("start_date") as string,
            end_date: formData.get("end_date") as string,
            time: formData.get("time") as string,
            location: formData.get("location") as string,
            department: formData.get("department") as string,
            color: formData.get("color") as string,
            price:Number(formData.get("price")) as number,
            max_slots: Number(formData.get("max_slots")) as number,
            food_provided: formData.get("food_provided") === 'on' || formData.get("food_provided") === 'true',
            od_provided: formData.get("od_provided") === 'on' || formData.get("od_provided") === 'true',

        }
        let { event_id } = params;
        let { error } = await supabase.from('events').update(updateData).eq('id', event_id);
        if (error) {
            console.error('Error updating event:', error.message);
            return {
                success: false,
                error: 'Failed to update event. Please try again.'
            };
        }
        return {
            success: true,
            message: 'Event updated successfully!'
        };
    }
  
    

} 

// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async () => {
// 	return {
// 		serverMessage: 'hello from server load function'
// 	};
// };

