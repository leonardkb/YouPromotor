export interface Env {
	AI: Ai;
  }
  
  export default {
	async fetch(request: Request, env: Env) {
	  const data: any = await request.json(); // Parse the request body as JSON
  
	  if (!data.audioUrl) {
		return new Response('Missing audioUrl in request body.', { status: 400 });
	  }
  
	  const audioUrl = data.audioUrl; // Extract the audio URL
  
	  try {
		const res = await fetch(audioUrl); // Fetch audio from the provided URL
  
		if (!res.ok) {
		  throw new Error(`Failed to fetch audio: ${res.statusText}`);
		}
  
		const blob = await res.arrayBuffer();
		const input = { audio: [...new Uint8Array(blob)] };
  
		const response = await env.AI.run("@cf/openai/whisper", input);
  
		return Response.json({ input: { audio: [] }, response });
	  } catch (error: any) {
		return new Response(error.message, { status: 500 });
	  }
	},
  };
  