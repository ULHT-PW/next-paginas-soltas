export async function GET() {
    const resp = await fetch(`https://api.carrismetropolitana.pt/municipalities`, { cache: "no-cache" })
    const data = await resp.json()

    return Response.json({ data })
}