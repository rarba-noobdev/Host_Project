<script>
let randomHexColor = $state("#"+ Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
let {form} = $props()
console.log(form?.success);

</script>
<section class="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 font-sans text-gray-200">
    <!-- Main Container with depth effect -->
    <div class="w-full max-w-5xl">
      <!-- Card with glass morphism effect - no JS needed -->
      <div class="bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/20 border border-gray-700/30 overflow-hidden" role="region" aria-label="Event creation form">
        <!-- Premium Header with pure CSS gradient animation -->
        <div class="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-5 flex items-center space-x-4 animate-gradient-x">
          <div class="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-white tracking-tight">Create New Event</h1>
        </div>
  
        <!-- Actual Form - All functionality without JS -->
        <form method="POST" class="p-8" novalidate>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <!-- Essential Info Section -->
              <fieldset class="space-y-6 border border-gray-700/50 rounded-xl p-6">
                <legend class="px-3 text-indigo-300 font-medium text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Essential Information</span>
                </legend>
  
                <!-- Event Name with focus effects -->
                <div class="space-y-2">
                  <label for="event-name" class="text-sm font-medium text-gray-300 flex items-center">
                    Event Name <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                    <span class="sr-only">(required)</span>
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="event-name"
                      name="name"
                      placeholder="Tech Conference 2025"
                      required
                      aria-required="true"
                      aria-describedby="event-name-error"
                      class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                    />
                    <div id="event-name-error" class="hidden text-red-400 text-xs mt-1">Please enter an event name</div>
                  </div>
                </div>
  
                <!-- Department (Added as required by schema) -->
                <div class="space-y-2">
                  <label for="department" class="text-sm font-medium text-gray-300 flex items-center">
                    Department <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                    <span class="sr-only">(required)</span>
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      placeholder="IT Department"
                      required
                      aria-required="true"
                      aria-describedby="department-error"
                      class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                    />
                    <div id="department-error" class="hidden text-red-400 text-xs mt-1">Please enter a department</div>
                  </div>
                </div>
  
                <!-- Date Range -->
                <div class="space-y-2">
                  <span id="date-range-label" class="text-sm font-medium text-gray-300 flex items-center">
                    Event Duration <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                    <span class="sr-only">(required)</span>
                  </span>
                  <div class="grid grid-cols-2 gap-4" aria-labelledby="date-range-label">
                    <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        id="start-date"
                        name="start_date"
                        required
                        aria-required="true"
                        aria-label="Start date"
                        aria-describedby="start-date-error"
                        class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <span class="block text-xs text-gray-400 mt-1 ml-1">Start Date</span>
                      <div id="start-date-error" class="hidden text-red-400 text-xs mt-1">Please select a start date</div>
                    </div>
                    <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="date"
                        id="end-date"
                        name="end_date"
                        required
                        aria-required="true"
                        aria-label="End date"
                        aria-describedby="end-date-error"
                        class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <span class="block text-xs text-gray-400 mt-1 ml-1">End Date</span>
                      <div id="end-date-error" class="hidden text-red-400 text-xs mt-1">Please select an end date</div>
                    </div>
                  </div>
                </div>
  
                <!-- Time & Location -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="event-time" class="text-sm font-medium text-gray-300 flex items-center">
                      Time <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                      <span class="sr-only">(required)</span>
                    </label>
                    <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <input
                        type="time"
                        id="event-time"
                        name="time"
                        required
                        aria-required="true"
                        aria-describedby="event-time-error"
                        class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <div id="event-time-error" class="hidden text-red-400 text-xs mt-1">Please select a time</div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label for="event-location" class="text-sm font-medium text-gray-300 flex items-center">
                      Location <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                      <span class="sr-only">(required)</span>
                    </label>
                    <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="event-location"
                        name="location"
                        placeholder="Convention Center"
                        required
                        aria-required="true"
                        aria-describedby="event-location-error"
                        class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <div id="event-location-error" class="hidden text-red-400 text-xs mt-1">Please enter a location</div>
                    </div>
                  </div>
                </div>
  
                <!-- Description Field (Added as required by schema) -->
                <div class="space-y-2">
                  <label for="event-description" class="text-sm font-medium text-gray-300 flex items-center">
                    Description <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                    <span class="sr-only">(required)</span>
                  </label>
                  <div class="relative group">
                    <div class="absolute top-3 left-3 flex items-start pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                      </svg>
                    </div>
                    <textarea
                      id="event-description"
                      name="description"
                      placeholder="Describe your event..."
                      required
                      aria-required="true"
                      aria-describedby="event-description-error"
                      rows="4"
                      class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                    ></textarea>
                    <div id="event-description-error" class="hidden text-red-400 text-xs mt-1">Please provide a description</div>
                  </div>
                </div>
              </fieldset>
            </div>
  
            <!-- Right Column -->
            <div class="space-y-6">
              <!-- Additional Settings -->
              <fieldset class="space-y-6 border border-gray-700/50 rounded-xl p-6">
                <legend class="px-3 text-indigo-300 font-medium text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Additional Settings</span>
                </legend>
  
                <!-- Price & Color -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="event-price" class="text-sm font-medium text-gray-300 flex items-center">
                      Price (€) <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                      <span class="sr-only">(required)</span>
                    </label>
                    <div class="relative group">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-400 text-sm group-focus-within:text-indigo-400 transition-colors" aria-hidden="true">€</span>
                      </div>
                      <input
                        type="number"
                        id="event-price"
                        name="price"
                        step="0.01"
                        min="0"
                        required
                        aria-required="true"
                        aria-describedby="event-price-error"
                        class="w-full pl-8 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <div id="event-price-error" class="hidden text-red-400 text-xs mt-1">Please enter a valid price</div>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label for="event-color" class="text-sm font-medium text-gray-300 flex items-center">
                      Color <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                      <span class="sr-only">(required)</span>
                    </label>
                    <div class="flex space-x-3">
                      <input
                        type="text"
                        id="event-color"
                        name="color"
                        bind:value={randomHexColor}
                        required
                        aria-required="true"
                        aria-describedby="event-color-error"
                        class="w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                      />
                      <label for="color-picker" class="cursor-pointer">
                        <div class="h-12 w-12 rounded-lg border border-gray-600 hover:border-indigo-400 transition duration-200 overflow-hidden shadow-lg">
                          <div class="h-full w-full" style="background-color: {randomHexColor}"></div>
                        </div>
                        <input
                          type="color"
                          id="color-picker"
                          bind:value={randomHexColor}
                          class="sr-only"
                          aria-label="Color picker"
                        />
                      </label>
                      <div id="event-color-error" class="hidden text-red-400 text-xs mt-1">Please select a color</div>
                    </div>
                  </div>
                </div>
  
                <!-- Capacity -->
                <div class="space-y-2">
                  <label for="max-capacity" class="text-sm font-medium text-gray-300 flex items-center">
                    Capacity <span class="text-red-400 ml-1" aria-hidden="true">*</span>
                    <span class="sr-only">(required)</span>
                  </label>
                  <div class="relative group">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 group-focus-within:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <input
                      type="number"
                      id="max-capacity"
                      name="max_slots"
                      min="1"
                      required
                      aria-required="true"
                      aria-describedby="max-capacity-error"
                      class="w-full pl-10 pr-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition duration-200"
                    />
                    <span class="block text-xs text-gray-400 mt-1 ml-1">Max Capacity</span>
                    <div id="max-capacity-error" class="hidden text-red-400 text-xs mt-1">Please enter a capacity value</div>
                  </div>
                </div>
  
                <!-- Features -->
                <div class="space-y-3">
                  <span id="features-label" class="block text-sm font-medium text-gray-300">Event Features</span>
                  <div class="grid grid-cols-1 gap-2" role="group" aria-labelledby="features-label">
                    <!-- Food Provided -->
                    <div class="flex items-center p-3 bg-gray-700/60 hover:bg-gray-600/80 border border-gray-600 rounded-lg transition-all duration-200">
                      <input 
                        type="checkbox" 
                        id="food-provided" 
                        name="food_provided" 
                        class="h-5 w-5 rounded border border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-400 focus:ring-offset-gray-800"
                      />
                      <label for="food-provided" class="ml-3 flex flex-col cursor-pointer">
                        <span class="text-sm font-medium text-white">Food Provided</span>
                        <span class="text-xs text-gray-400">Refreshments and meals available</span>
                      </label>
                    </div>
  
                    <!-- OD Provided -->
                    <div class="flex items-center p-3 bg-gray-700/60 hover:bg-gray-600/80 border border-gray-600 rounded-lg transition-all duration-200">
                      <input 
                        type="checkbox" 
                        id="od-provided" 
                        name="od_provided" 
                        class="h-5 w-5 rounded border border-gray-500 bg-gray-700 text-indigo-500 focus:ring-indigo-400 focus:ring-offset-gray-800"
                      />
                      <label for="od-provided" class="ml-3 flex flex-col cursor-pointer">
                        <span class="text-sm font-medium text-white">OD Provided</span>
                        <span class="text-xs text-gray-400">Official documentation issued</span>
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
  
          <!-- Form Actions -->
          <div class="mt-8 flex justify-end space-x-4">
            <button 
              type="reset" 
              class="px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Reset Form
            </button>
            <button 
              type="submit" 
              class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  
  <!-- Pure CSS Animations -->
  <style>
    /* Gradient animation */
    .animate-gradient-x {
      background-size: 300% 300%;
      animation: gradient-x 8s ease infinite;
    }
    
    @keyframes gradient-x {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* Focus transitions */
    input:focus, textarea:focus {
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    
    /* Button hover effects */
    button[type="submit"] {
      position: relative;
      overflow: hidden;
    }
    
    button[type="submit"]:hover::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: rgba(255, 255, 255, 0.1);
      transform: rotate(30deg);
      transition: transform 0.6s ease;
    }
  
    /* High contrast focus styling for accessibility */
    :focus-visible {
      outline: 3px solid #ffffff;
      outline-offset: 2px;
    }
  
    /* Make checkbox more accessible */
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
  
    /* Ensure adequate color contrast */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  </style>