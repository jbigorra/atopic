export { };

declare global {
  interface ImportMeta {
    env: {
      MODE: string;
      SUPABASE_HOST: string;
      SUPABASE_PUBLIC_KEY: string;
      SUPABASE_PRIVATE_KEY: string;
      DATABASE_CONN: string;
      EMAIL_HOST: string;
    };
  }
}
