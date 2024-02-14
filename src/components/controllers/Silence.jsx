// myProcessor.js
class SilenceDetectorProcessor extends AudioWorkletProcessor {
    constructor() {
      super();
      this.silentFrames = 0;
      this.threshold = 10; // Threshold for silence
      this.silenceDuration = 5 * sampleRate; // 5 seconds of silence
    }
  
    process(inputs) {
      const input = inputs[0];
      if (input.length > 0) {
        const sum = input[0].reduce((a, b) => a + Math.abs(b), 0);
        const average = sum / input[0].length;
        if (average < this.threshold) {
          this.silentFrames += 128; // Buffer size
          if (this.silentFrames >= this.silenceDuration) {
            this.port.postMessage('silent');
            this.silentFrames = 0;
          }
        } else {
          this.silentFrames = 0;
        }
      }
      return true;
    }
  }
  
  registerProcessor('silence-detector-processor', SilenceDetectorProcessor);
  