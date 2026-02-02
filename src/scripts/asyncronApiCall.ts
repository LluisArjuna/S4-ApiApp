export async function getData<T>(request: RequestInfo | URL): Promise<T> {
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}