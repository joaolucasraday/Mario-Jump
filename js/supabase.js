const supabaseUrl = 'https://xokzaqdrnddplsczdhjs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhva3phcWRybmRkcGxzY3pkaGpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4OTcxMzQsImV4cCI6MjA5MDQ3MzEzNH0.lMmxYmnrLrj-0_-I_8iprOGNr81364JZuQGTe7b7L2k'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)

// Exporta para ser usado nos outros arquivos
window.supabase = _supabase;