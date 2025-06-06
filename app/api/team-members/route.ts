import { NextResponse } from 'next/server'
import { supabase } from '@/utils/supabaseClient'

export async function GET() {
  const { data, error } = await supabase
    .from('team_members')  // table name remains plural if your DB uses plural
    .select('*')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 200 })
}

export async function POST(request: Request) {
  const body = await request.json()

  const { name, role, profile_image, bio, linkedin, twitter, website } = body

  const { data, error } = await supabase
    .from('team_members')
    .insert([{ name, role, profile_image, bio, linkedin, twitter, website }])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
