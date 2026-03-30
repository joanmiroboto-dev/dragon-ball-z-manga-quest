// Retro 8-bit sound effects using Web Audio API
let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(
  freq: number,
  duration: number,
  type: OscillatorType = "square",
  volume = 0.15,
  slide?: number
) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  if (slide) {
    osc.frequency.exponentialRampToValueAtTime(slide, ctx.currentTime + duration);
  }
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

/** Sound when hovering/selecting an answer option */
export function playSelect() {
  playTone(600, 0.08, "square", 0.1);
}

/** Sound when answer is correct — ascending arpeggio */
export function playCorrect() {
  const ctx = getCtx();
  const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
  notes.forEach((freq, i) => {
    setTimeout(() => {
      playTone(freq, 0.15, "square", 0.12);
    }, i * 80);
  });
  // Ki charge bass
  setTimeout(() => playTone(120, 0.5, "sawtooth", 0.08, 240), 300);
}

/** Sound when answer is wrong — descending buzz */
export function playWrong() {
  playTone(300, 0.15, "sawtooth", 0.12, 100);
  setTimeout(() => playTone(200, 0.2, "square", 0.1, 80), 120);
}

/** Sound for next question transition */
export function playNext() {
  playTone(440, 0.06, "square", 0.08);
  setTimeout(() => playTone(660, 0.08, "square", 0.08), 60);
}

/** Ki power-up charging sound */
export function playKiCharge() {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(100, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.6);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.setValueAtTime(0.12, ctx.currentTime + 0.3);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.8);
}
