import { goto } from '$app/navigation'
import type { Session, SupabaseClient, User } from '@supabase/supabase-js'
 import { getContext, setContext } from 'svelte'

interface userStateObject {
    session: Session | null
    user: User | null
    supabase: SupabaseClient | null
}

export interface Event {
    statusText?: string
    booked_slots?: number
    color: string
    created_at?: string | null
    department: string
    description: string 
    end_date: string
    food_provided?: boolean
    id?: string
    is_sold_out?: boolean
    location: string
    managed_by?: string | null
    max_slots: number
    name: string
    od_provided?: boolean
    price: number
    start_date: string
    time: string
    updated_at?: string | null
  }

export class UserState {
    private _session = $state<Session | null>(null)
    private _user = $state<User | null>(null)    
    private _supabase = $state<SupabaseClient | null>(null)
    private _events = $state<Event[]>([])

    constructor(userState: userStateObject) {
        this.updateState(userState)
    }

    updateState(userState: userStateObject) {
        this._session = userState.session
        this._user = userState.user
        this._supabase = userState.supabase
    }

    get session(): Session | null {
        return this._session
    }

    get user(): User | null {
        return this._user
    }

    get supabase(): SupabaseClient | null {
        return this._supabase
    }

    async getEvents() {
        if (!this._supabase) {throw new Error('Supabase client is not initialized.');}
        // if (!this._user) {throw new Error('User is not initialized.');}
        const { data, error } = await this._supabase.from('events').select('*');
        if (error) {
            console.error('Error fetching events:', error)
            return []
        }
        this._events = data || []
        return this._events
     }

     async registerEvent(eventId : string) {
                if (!this._supabase) {throw new Error('Supabase client is not initialized.');}
                if (!this._user) {throw new Error('User is not initialized.');}
                const {error} = await this._supabase.from("registrations").insert({event_id:eventId,user_id:this._user.id})
                if (error) {
                                console.error('Error fetching events:', error)
            return null
                
        }
     }
     
    async logOut() {
        await this._supabase?.auth.signOut()
       goto('/auth')
    }
}

const UUIK = Symbol('userStateKey');

export const setUserState = (userState: userStateObject) => {
    return setContext(UUIK, new UserState(userState));
};

export const getUserState = (): UserState => {
    const userState = getContext(UUIK);
    if (!(userState instanceof UserState)) {
        throw new Error('UserState context not found or invalid.');
    }
    return userState;
};