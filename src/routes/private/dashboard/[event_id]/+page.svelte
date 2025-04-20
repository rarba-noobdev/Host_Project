<script lang="ts">
    import type { Event } from '$lib/userstate/userstate.svelte';
    let { data } = $props();
    let { event } = $derived(data);
    let editMode = $state(false);
</script>

{#if event && !editMode}
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
                    <button onclick={() => {editMode = !editMode}} type="button" class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Edit Event
                    </button>
                </div>
            </div>
        </div>
    </section>
</section>
{/if}

{#if editMode && event}
<form method="post" class="bg-gray-900"> 
    <section class="event-details max-w-4xl mx-auto py-12 px-6 lg:px-8 bg-gray-900 text-gray-100">
        <div class="text-center mb-12">
            <h1 class="text-3xl font-extrabold text-gray-100 sm:text-4xl">Edit Event</h1>
            <p class="mt-4 text-xl text-gray-400">Modify the details of this event</p>
        </div>

        <div class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden border-t-4" style={`border-color: ${event.color}`}>
            <div class="p-8 sm:p-10">
                <div class="flex justify-between items-start">
                    <div>
                        <input name="name" bind:value={event.name} class="text-2xl font-bold bg-gray-700 text-gray-100 border-none rounded p-2" style={`color: ${event.color}`} />
                        <p class="mt-2 text-sm text-gray-400">Event ID: {event.id}</p>
                    </div>
                    <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${event.is_sold_out ? 'bg-red-900 text-red-200' : 'bg-green-900 text-green-200'}`}>
                        {event.is_sold_out ? 'Sold Out' : 'Available'}
                    </span>
                </div>

                <textarea name="description" bind:value={event.description} class="mt-6 text-lg bg-gray-700 text-gray-100 border-none rounded p-2 w-full" rows="4"></textarea>

                <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Date & Time</h3>
                            <div class="mt-3 space-y-2">
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                    </svg>
                                    <input type="date" name="start_date" bind:value={event.start_date} class="bg-gray-700 text-gray-100 border-none rounded p-2" />
                                </div>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                    </svg>
                                    <input type="date" name="end_date" bind:value={event.end_date} class="bg-gray-700 text-gray-100 border-none rounded p-2" />
                                </div>
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                                    </svg>
                                    <input type="time" name="time" bind:value={event.time} class="bg-gray-700 text-gray-100 border-none rounded p-2" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Location</h3>
                            <div class="mt-3 flex items-center">
                                <svg class="flex-shrink-0 mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <input name="location" bind:value={event.location} class="bg-gray-700 text-gray-100 border-none rounded p-2 w-full" />
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Department</h3>
                            <div class="mt-3 flex items-center">
                                <input name="department" bind:value={event.department} class="px-3 py-1.5 text-sm font-semibold rounded-full bg-gray-700 text-gray-100 border-none" style={`color: ${event.color}`} />
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Event Color</h3>
                            <div class="mt-3 flex items-center">
                                <input type="color" name="color" bind:value={event.color} class="bg-gray-700 border-none rounded p-1" />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Registration</h3>
                            <div class="mt-3 space-y-2">
                                <div class="flex justify-between text-sm text-gray-300 mb-2">
                                    <input type="number" name="price" bind:value={event.price} class="bg-gray-700 text-gray- skies-gray-100 border-none rounded p-2 w-24" step="0.01" /> per attendee
                                    <span>{event.booked_slots}/{event.max_slots} slots booked</span>
                                </div>
                                <div class="flex items-center">
                                    <span class="mr-2">Max Slots:</span>
                                    <input type="number" name="max_slots" bind:value={event.max_slots} class="bg-gray-700 text-gray-100 border-none rounded p-2 w-24" />
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-3">
                                    <div class="bg-emerald-500 h-3 rounded-full" style={`width: ${((event.booked_slots || 1) / event.max_slots) * 100}%`}></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-medium text-gray-200">Amenities</h3>
                            <div class="mt-3 flex flex-wrap gap-3">
                                <label class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                                    <input type="checkbox" name="food_provided" bind:checked={event.food_provided} class="mr-2" />
                                    Food Provided
                                </label>
                                <label class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gray-700 text-gray-300">
                                    <input type="checkbox" name="od_provided" bind:checked={event.od_provided} class="mr-2" />
                                    OD Provided
                                </label>
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

                <div class="mt-10 flex justify-end space-x-4">
                    <button onclick={() => {editMode = !editMode}} type="submit" class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Cancel
                    </button>
                    <button type="submit" class="px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </section>
</form>
{/if}