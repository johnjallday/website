
import { promises as fs } from 'fs';
import path from 'path';

// Global variable to store the time of the last submission
let lastSubmissionTime = 0;
const RATE_LIMIT_MS = 30000; // 30 seconds for example

export async function POST({ request }) {
    const currentTime = Date.now();

    // Check if enough time has passed since the last submission
    if (currentTime - lastSubmissionTime < RATE_LIMIT_MS) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please wait before sending another.' }), {
            status: 429, // HTTP status code for Too Many Requests
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const { name, email } = await request.json();

    const dirPath = path.resolve('data');
    const filePath = path.join(dirPath, 'contacts.json');

    await fs.mkdir(dirPath, { recursive: true });

    let data;
    try {
        data = JSON.parse(await fs.readFile(filePath, 'utf-8'));
    } catch (error) {
        data = { contacts: [] };
    }

    data.contacts.push({ name, email });

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

    // Update the last submission time
    lastSubmissionTime = currentTime;

    return new Response(null, { status: 303, headers: { Location: '/' } });
}
