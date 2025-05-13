<script lang="ts">
    import { getUserState, type Event } from '$lib/userstate/userstate.svelte';
    let { data } = $props(); 
    let { event } = $derived(data);
    let userstate = $derived(getUserState())
    
</script>
{#if !event}
<div class="min-h-screen flex items-center justify-center bg-gray-900">
  <p class="text-2xl text-gray-400 font-semibold">Event Deleted or Not Found</p>
</div>
{/if}
{#if event}
 <section class="bg-gray-900"> 
    <section class="event-details max-w-4xl mx-auto py-12 px-6 lg:px-8 bg-gray-900 text-gray-100">
        <div class="text-center mb-12">
            <h1 class="text-3xl font-extrabold text-gray-100 sm:text-4xl">Event Details</h1>
            <p class="mt-4 text-xl text-gray-400">All the information about this event</p>
        </div>

        <div class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border-t-4" style={`border-color: ${event.color}`}>
            <div class="p-8 sm:p-10">
                <div class="flex justify-between items-start">
                    <div>
                        <h2 class="text-2xl font-bold" style={`color: ${event.color}`}>{event.name}</h2>
                        <p class="mt-2 text-sm text-gray-400">Event ID: {event.id}</p>
                    </div>
                    <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${event.is_sold_out ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'}`}>
                        {event.is_sold_out ? 'Sold Out' : 'Available'}
                    </span>
                </div>

                <p class="mt-6 text-gray-300 text-lg">{event.description}</p>

                <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Date & Time</h3>
                            <div class="mt-3 flex items-center text-gray-300">
                                <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                </svg>
                                {event.start_date} to {event.end_date} at {event.time.slice(0, 5)}
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Location</h3>
                            <div class="mt-3 flex items-center text-gray-300">
                                <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                {event.location}
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Department</h3>
                            <div class="mt-3 flex items-center">
                                <span class="px-3 py-1.5 text-sm font-semibold rounded-full" style={`background-color: ${event.color}30; color: ${event.color}`}>
                                    {event.department}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Registration</h3>
                            <div class="mt-3">
                                <div class="flex justify-between text-sm text-gray-300 mb-2">
                                    <span>${event.price} per attendee</span>
                                    <span>{event.booked_slots}/{event.max_slots} slots booked</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-3">
                                    <div class="bg-emerald-500 h-3 rounded-full" style={`width: ${((event.booked_slots || 1) / event.max_slots) * 100}%`}></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Amenities</h3>
                            <div class="mt-3 flex flex-wrap gap-3">
                                <span class={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${event.food_provided ? 'bg-purple-900 text-purple-200' : 'bg-gray-700 text-gray-300'}`}>
                                    {event.food_provided ? 'Food Provided' : 'No Food'}
                                </span>
                                <span class={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${event.od_provided ? 'bg-blue-900 text-blue-200' : 'bg-gray-700 text-gray-300'}`}>
                                    {event.od_provided ? 'OD Provided' : 'No OD'}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Administration</h3>
                            <div class="mt-3 text-sm text-gray-300 space-y-2">
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Created: {event.created_at ? new Date(event.created_at).toLocaleDateString() : 'Not available'}
                                </div>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Updated: {event.updated_at ? new Date(event.updated_at).toLocaleDateString() : 'Not available'}
                                </div>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Manager ID: {event.managed_by}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-10 flex justify-end">

                </div>
            </div>
        </div>
    </section>
</section>
 
{/if}
 
