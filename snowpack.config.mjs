import base from './snowpack.base.config.mjs'

export default {
  ...base,
  env: {
    SUPABASE_PUBLIC_KEY: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoiYW5vbiJ9.36fUebxgx1mcBo4s19v0SzqmzunP--hm_hep0uLX0ew",
    SUPABASE_HOST: "http://localhost:8000",
    SUPABASE_PRIVATE_KEY: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTYwMzk2ODgzNCwiZXhwIjoyNTUwNjUzNjM0LCJyb2xlIjoic2VydmljZV9yb2xlIn0.necIJaiP7X2T2QjGeV-FhpkizcNTX8HjDDBAxpgQTEI",
    DATABASE_CONN: "postgres://postgres:postgres@localhost:5432/postgres",
    EMAIL_HOST: "http://localhost:9000",
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    }
  ]
}
