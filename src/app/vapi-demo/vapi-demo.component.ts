import { Component } from '@angular/core';
import Vapi from "@vapi-ai/web";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vapi-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vapi-demo.component.html',
  styleUrl: './vapi-demo.component.css'
})
export class VapiDemoComponent {
  vapi: Vapi | undefined;
  isSpeaking = false;
  isInCall = false;
  volumeLevel = 0;
  pitchLevels = [0, 0, 0, 0, 0];
  isLoading = false;

  // useful methods
  // vapi.on("speech-start", () => {
  //   console.log("Assistant speech has started.");
  // });
  // vapi.on("speech-end", () => {
  //   console.log("Assistant speech has ended.");
  // });
  // vapi.on("volume-level", (volume) => {
  //   console.log(`Assistant volume level: ${volume}`);
  // });

  async startVapi() {
    this.isLoading = true;
    this.vapi = new Vapi('823d2036-344d-4d97-a147-f3c85209cbf9');
    this.vapi.start();

    this.vapi.on("speech-start", () => {
      this.isSpeaking = true;
    });

    this.vapi.on("speech-end", () => {
      this.isSpeaking = false;
      this.volumeLevel = 0;
      this.pitchLevels = [0, 0, 0, 0, 0];
    });

    this.vapi.on("volume-level", (volume) => {
      this.volumeLevel = volume;
      // Simulate different pitch levels based on the volume
      this.pitchLevels = [
        volume * (0.7 + Math.random() * 0.3), // Low pitch
        volume * (0.6 + Math.random() * 0.4), // Low-mid pitch
        volume * (0.5 + Math.random() * 0.5), // Mid pitch
        volume * (0.4 + Math.random() * 0.6), // Mid-high pitch
        volume * (0.3 + Math.random() * 0.7)  // High pitch
      ];
    });

    const call = await this.vapi.start('f20a0461-4a8e-4f9c-aa7f-abb06ebcdf0c');

    // let callDuration = 1; // minutes
    // setTimeout(() => {
    //   this.vapi?.send({
    //     type: "add-message",
    //     message: {
    //       role: "system",
    //       content: "The call will end soon. End any topic that you are talking about. End the conversation naturally, tell the user that the call will end soon, goodbye and end the conversation."
    //     }
    //   });

    // }, callDuration * 60 * 1000 - 1000 * 30); // 30 seconds before the call ends


    this.isInCall = true;
    this.isLoading = false;
  }

  async stopVapi() {
    this.vapi?.stop();
    this.isSpeaking = false;
    this.isInCall = false;
    this.volumeLevel = 0;
    this.pitchLevels = [0, 0, 0, 0, 0];
  }
}
