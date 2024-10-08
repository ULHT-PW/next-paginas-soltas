export async function GET() {
    const resp = await fetch(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/1010500.json`, { cache: "no-cache" })
    const data = await resp.json()

    return Response.json({ data })
}