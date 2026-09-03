/**
 * Deterministic pseudo-random bar heights for the waveform, derived from a
 * seed string (e.g. the generation id). Using a seeded generator instead of
 * `Math.random()` keeps the output identical between server and client
 * renders, avoiding hydration mismatches, while still looking random.
 */
export function generateHeights(seed: string, count: number): number[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  let state = hash === 0 ? 1 : hash >>> 0;
  const next = () => {
    // mulberry32
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  return Array.from({ length: count }, () => Math.round(20 + next() * 80));
}
