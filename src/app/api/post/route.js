// app/api/post/route.js
import { supabase } from '@/app/utils/supabase';

export async function POST(req) {
  try {
    const { title } = await req.json(); // Extract the title from the request body

    const { data, error } = await supabase
      .from('post')   // Specify your table name
      .insert([{ title }]);  // Insert data into the table

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ data }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
    });
  }
}
