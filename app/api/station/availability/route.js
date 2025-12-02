export async function GET() {
  try {
    const res = await fetch('https://opendata.emel.pt/cycling/gira/station/availability');
    if (!res.ok) {
       return new Response('Erro', { status: res.status });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
      // Captura erros de rede ou exceções
      return new Response('Erro', { status: 500 }); 
  }
}
