import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function GET() {
  try {
    const { data, error } = await supabase
      .from('employees')
      .select('*')

    if (error) {
      console.log('error:',error)
      throw error;
    }

    console.log('data:',data)

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from('employees')
      .insert([
        {
          Name: body.name,
          salary: body.salary,
          Department: body.department,
          status: body.status,
          joiningDate: body.joiningDate || null,
        },
      ]);

    if (error) {
      throw error;
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
