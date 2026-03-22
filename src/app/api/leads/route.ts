import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      industry,
      monthly_volume,
      phone,
      email,
      message,
      source,
    } = body;

    if (!name || !company || !phone || !email) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("axonz_leads").insert({
      name,
      company,
      industry: industry || null,
      monthly_volume: monthly_volume || null,
      phone,
      email,
      message: message || "",
      source: source || "website",
      status: "new",
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    if (process.env.WHATSAPP_NOTIFY_URL) {
      try {
        await fetch(process.env.WHATSAPP_NOTIFY_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            company,
            industry,
            volume: monthly_volume,
            phone,
            email,
            message: message || "No message",
            source,
            timestamp: new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            }),
          }),
        });
      } catch (e) {
        console.log("WhatsApp notify failed:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Leads API error:", e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
