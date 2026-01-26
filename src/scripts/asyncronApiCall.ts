export async function getData(request: RequestInfo | URL) {
  try {
    const response = await fetch(request);
    
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Error: ",error);
  }
}