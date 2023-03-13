import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  client: SupabaseClient;

  constructor() {
    this.client = createClient(environment.supabase.url, environment.supabase.anon_key);
  }
}
