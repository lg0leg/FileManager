import { cpus } from 'os';

export const cpusInfo = async () => {
  try {
    const info = cpus();

    const table = info.map((cpu) => ({
      Model: cpu.model.trim(),
      'Speed (GHz)': (cpu.speed / 1000).toFixed(2),
    }));

    console.log(`Total CPUs: ${info.length}`);
    console.table(table);
  } catch (err) {
    throw new Error('Operation failed');
  }
};
