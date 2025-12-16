// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      assets: {
        Row: {
          acquisition_date: string | null
          acquisition_total_value: number
          acquisition_unit_price: number
          created_at: string
          id: string
          institution_id: string
          name: string
          quantity: number
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          acquisition_date?: string | null
          acquisition_total_value: number
          acquisition_unit_price?: number
          created_at?: string
          id?: string
          institution_id: string
          name: string
          quantity?: number
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          acquisition_date?: string | null
          acquisition_total_value?: number
          acquisition_unit_price?: number
          created_at?: string
          id?: string
          institution_id?: string
          name?: string
          quantity?: number
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assets_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "financial_institutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          created_at: string
          icon: string | null
          id: string
          name: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          name: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          name?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      dividends: {
        Row: {
          amount_per_share: number
          asset_id: string
          created_at: string
          id: string
          payment_date: string
          quantity_received_dividend: number
          type: string
          user_id: string
        }
        Insert: {
          amount_per_share: number
          asset_id: string
          created_at?: string
          id?: string
          payment_date: string
          quantity_received_dividend: number
          type?: string
          user_id: string
        }
        Update: {
          amount_per_share?: number
          asset_id?: string
          created_at?: string
          id?: string
          payment_date?: string
          quantity_received_dividend?: number
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dividends_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dividends_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_institutions: {
        Row: {
          color: string | null
          created_at: string
          id: string
          name: string
          payment_due_day: number | null
          statement_closing_day: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          id?: string
          name: string
          payment_due_day?: number | null
          statement_closing_day?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          id?: string
          name?: string
          payment_due_day?: number | null
          statement_closing_day?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "financial_institutions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          created_at: string
          current_amount: number
          icon: string | null
          id: string
          name: string
          notes: string | null
          recurring_amount: number | null
          recurring_frequency: string | null
          status: string | null
          sub_goals: Json | null
          target_amount: number
          target_date: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          current_amount?: number
          icon?: string | null
          id?: string
          name: string
          notes?: string | null
          recurring_amount?: number | null
          recurring_frequency?: string | null
          status?: string | null
          sub_goals?: Json | null
          target_amount: number
          target_date?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          current_amount?: number
          icon?: string | null
          id?: string
          name?: string
          notes?: string | null
          recurring_amount?: number | null
          recurring_frequency?: string | null
          status?: string | null
          sub_goals?: Json | null
          target_amount?: number
          target_date?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      market_prices: {
        Row: {
          asset_id: string
          fetched_at: string
          id: string
          price: number
          price_date: string
        }
        Insert: {
          asset_id: string
          fetched_at?: string
          id?: string
          price: number
          price_date: string
        }
        Update: {
          asset_id?: string
          fetched_at?: string
          id?: string
          price?: number
          price_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "market_prices_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
        ]
      }
      subcategories: {
        Row: {
          category_id: string
          created_at: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          category_id: string
          created_at?: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          created_at?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subcategories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          asset_id: string | null
          category_id: string | null
          cost_basis_per_share_at_sale: number | null
          created_at: string
          description: string | null
          dividend_id: string | null
          goal_id: string | null
          id: string
          installment_number: number | null
          institution_id: string
          is_installment: boolean
          original_transaction_id: string | null
          payment_method: string
          quantity_sold: number | null
          subcategory_id: string | null
          tags: string[] | null
          total_installments: number | null
          transaction_date: string
          type: string
          unit_sale_price: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          asset_id?: string | null
          category_id?: string | null
          cost_basis_per_share_at_sale?: number | null
          created_at?: string
          description?: string | null
          dividend_id?: string | null
          goal_id?: string | null
          id?: string
          installment_number?: number | null
          institution_id: string
          is_installment?: boolean
          original_transaction_id?: string | null
          payment_method?: string
          quantity_sold?: number | null
          subcategory_id?: string | null
          tags?: string[] | null
          total_installments?: number | null
          transaction_date: string
          type: string
          unit_sale_price?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          asset_id?: string | null
          category_id?: string | null
          cost_basis_per_share_at_sale?: number | null
          created_at?: string
          description?: string | null
          dividend_id?: string | null
          goal_id?: string | null
          id?: string
          installment_number?: number | null
          institution_id?: string
          is_installment?: boolean
          original_transaction_id?: string | null
          payment_method?: string
          quantity_sold?: number | null
          subcategory_id?: string | null
          tags?: string[] | null
          total_installments?: number | null
          transaction_date?: string
          type?: string
          unit_sale_price?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "assets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_dividend_id_fkey"
            columns: ["dividend_id"]
            isOneToOne: false
            referencedRelation: "dividends"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_institution_id_fkey"
            columns: ["institution_id"]
            isOneToOne: false
            referencedRelation: "financial_institutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_original_transaction_id_fkey"
            columns: ["original_transaction_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_subcategory_id_fkey"
            columns: ["subcategory_id"]
            isOneToOne: false
            referencedRelation: "subcategories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activities: {
        Row: {
          action_type: string
          created_at: string
          description: string
          details: Json | null
          id: string
          user_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          description: string
          details?: Json | null
          id?: string
          user_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          description?: string
          details?: Json | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_excluded_tags: {
        Row: {
          created_at: string
          id: string
          tag_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          tag_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          tag_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_excluded_tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notification_preferences: {
        Row: {
          created_at: string
          enabled: boolean
          id: string
          notification_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          id?: string
          notification_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          id?: string
          notification_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notification_preferences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auto_sync_dividends: boolean | null
          avatar_url: string | null
          created_at: string
          dashboard_layout: Json | null
          display_name: string | null
          email: string
          id: string
          theme_preference: string
          updated_at: string | null
        }
        Insert: {
          auto_sync_dividends?: boolean | null
          avatar_url?: string | null
          created_at?: string
          dashboard_layout?: Json | null
          display_name?: string | null
          email: string
          id: string
          theme_preference?: string
          updated_at?: string | null
        }
        Update: {
          auto_sync_dividends?: boolean | null
          avatar_url?: string | null
          created_at?: string
          dashboard_layout?: Json | null
          display_name?: string | null
          email?: string
          id?: string
          theme_preference?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_asset_variation: {
        Args: { end_date: string; start_date: string; user_id_param: string }
        Returns: {
          final_value: number
          initial_value: number
        }[]
      }
      get_monthly_portfolio_values: {
        Args: { end_date: string; start_date: string; user_id_param: string }
        Returns: {
          month: string
          total_value: number
        }[]
      }
      get_top_categories: {
        Args: {
          end_date: string
          start_date: string
          transaction_type: string
          user_id_param: string
        }
        Returns: {
          name: string
          total: number
        }[]
      }
      record_asset_sale: {
        Args: {
          p_asset_id: string
          p_institution_id: string
          p_quantity_sold: number
          p_transaction_date: string
          p_unit_sale_price: number
          p_user_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

