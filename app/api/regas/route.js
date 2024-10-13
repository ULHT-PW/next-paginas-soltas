export async function GET() {
    const resp = await fetch(`https://apiregas.pythonanywhere.com/api/?format=json`, { cache: "no-cache" })
    const data = await resp.json()

    return Response.json({ data })
}