const supabaseUrl = 'https://muvnudvlthhwctryofoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11dm51ZHZsdGhod2N0cnlvZm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczODkwOTUsImV4cCI6MjA4Mjk2NTA5NX0.OllyqdtqwNluR2QHVD5FENxD_Njj2DmwJwYQfIiEsO0';

// Inicializamos el cliente
window._supabase = supabase.createClient(supabaseUrl, supabaseKey);