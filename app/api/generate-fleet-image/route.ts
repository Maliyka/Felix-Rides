import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const imageCache = new Map<string, string>();

export async function POST(request: NextRequest) {
  try {
    const { vehicleName } = await request.json();
    if (!vehicleName || typeof vehicleName !== "string") {
      return NextResponse.json({ error: "vehicleName is required" }, { status: 400 });
    }

    const cached = imageCache.get(vehicleName);
    if (cached) {
      return NextResponse.json({ imageUrl: cached, cached: true });
    }

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN
    });

    const prompt = `A photorealistic luxury ${vehicleName} parked in a modern city at dusk, cinematic lighting, high-end automotive photography, clean white studio feel, ultra detailed, 4K`;

    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input: {
        prompt
      }
    });

    const imageUrl = Array.isArray(output) ? String(output[0]) : String(output);
    imageCache.set(vehicleName, imageUrl);

    return NextResponse.json({ imageUrl, cached: false });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to generate image",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
