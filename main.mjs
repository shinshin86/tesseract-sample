import { createWorker } from 'tesseract.js';

const worker = await createWorker({
  logger: m => console.log(m)
});

await worker.loadLanguage('eng');
await worker.initialize('eng');

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Error: Required target image file path');
  process.exit(1);
}

const filepath = args[0];

// TODO: Add file path validation and checks, such as verifying the file exists and the path is valid
const { data: { text } } = await worker.recognize(filepath);
console.log('===Success!!===');
console.log(text);
await worker.terminate();