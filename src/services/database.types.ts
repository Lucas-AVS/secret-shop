export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      backpack: {
        Row: {
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "backpack_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      items: {
        Row: {
          created_at: string
          id: number
          name: string
          price: number
          stock: number
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string
          price: number
          stock?: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          price?: number
          stock?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
