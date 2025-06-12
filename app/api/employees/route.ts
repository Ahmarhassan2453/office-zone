import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function GET() {
  try {
    const { data, error } = await supabase.from('employees').select('*');
    if (error) throw error;
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, Department, Salary, status, created_at } = body;

    if (!name || !Department || !Salary || !status || !created_at) {
      return NextResponse.json({ error: 'Missing fields in request body' }, { status: 400 });
    }

    const { data, error } = await supabase.from('employees').insert([
      { name, Department, Salary, status, created_at }
    ]);

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get('id');

  if (!idParam) {
    return NextResponse.json({ error: 'Missing employee ID' }, { status: 400 });
  }

  const id = parseInt(idParam);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid employee ID' }, { status: 400 });
  }

  try {
    const { error } = await supabase.from('employees').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ message: 'Employee deleted successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, Department, Salary, status } = body;

    if (!id || !name || !Department || !Salary || !status) {
      return NextResponse.json({ error: 'Missing fields in request body' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('employees')
      .update({ name, Department, Salary, status })
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
