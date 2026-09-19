import { spawn } from 'node:child_process';

const SERVER_TIMEOUT_MS = 10_000;
const POLL_MS = 200;

async function waitForServer(url) {
  const deadline = Date.now() + SERVER_TIMEOUT_MS;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Connection refused until python's server binds the port; keep polling.
    }
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
  }
  throw new Error(`Static server did not start at ${url}`);
}

export async function startStaticServer(port) {
  const baseUrl = `http://127.0.0.1:${port}`;
  const child = spawn('python3', ['-m', 'http.server', String(port), '--bind', '127.0.0.1'], { stdio: 'ignore' });
  try {
    await waitForServer(`${baseUrl}/index.html`);
  } catch (error) {
    child.kill();
    throw error;
  }
  return { baseUrl, stop: () => child.kill() };
}
