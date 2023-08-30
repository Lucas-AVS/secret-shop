// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)

import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types.ts'

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
  )
  
  // process.env.SUPABASE_URL as string,
  // process.env.SUPABASE_ANON_KEY as string