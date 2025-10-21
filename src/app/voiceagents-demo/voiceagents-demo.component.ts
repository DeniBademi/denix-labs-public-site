import { Component, OnInit, OnDestroy } from '@angular/core';
import Vapi from "@vapi-ai/web";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voiceagents-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voiceagents-demo.component.html',
  styleUrl: './voiceagents-demo.component.css'
})
export class VoiceagentsDemoComponent implements OnInit, OnDestroy {
  voiceagents: Vapi | undefined;
  isSpeaking = false;
  isInCall = false;
  volumeLevel = 0;
  pitchLevels = [0, 0, 0, 0, 0];
  isLoading = false;
  errorMessage: string | null = null;
  private loadingTimeout: any;

  ngOnInit() {
    // Initialize component
  }

  // useful methods
  // voiceagents.on("speech-start", () => {
  //   console.log("Assistant speech has started.");
  // });
  // voiceagents.on("speech-end", () => {
  //   console.log("Assistant speech has ended.");
  // });
  // voiceagents.on("volume-level", (volume) => {
  //   console.log(`Assistant volume level: ${volume}`);
  // });

  async startVoiceagents() {
    this.isLoading = true;
    this.errorMessage = null;
    this.loadingTimeout = setTimeout(() => {
      if (this.isLoading) {
        this.isLoading = false;
        this.errorMessage = 'Нещо се обърка. Опитайте отново.';

        if (this.voiceagents) {
          this.voiceagents.stop();
          return;
        }
      }
    }, 10000);

    // await new Promise(resolve => setTimeout(resolve, 30000));

    this.voiceagents = new Vapi('823d2036-344d-4d97-a147-f3c85209cbf9');

    this.voiceagents.on("speech-start", () => {
      this.isSpeaking = true;
    });

    this.voiceagents.on("speech-end", () => {
      this.isSpeaking = false;
      this.volumeLevel = 0;
      this.pitchLevels = [0, 0, 0, 0, 0];
    });

    this.voiceagents.on("volume-level", (volume) => {
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

    this.voiceagents.on("call-end", () => {
      this.isInCall = false;
      this.isLoading = false;
      this.errorMessage = null;
    });

    this.voiceagents.on("call-start", () => {
      this.isInCall = true;
      this.isLoading = false;
      this.errorMessage = null;
    });

    const call = await this.voiceagents.start('f20a0461-4a8e-4f9c-aa7f-abb06ebcdf0c');

    this.voiceagents.on("error", () => {
      this.errorMessage = 'Нещо се обърка. Опитайте отново.';
      this.isLoading = false;
      this.isInCall = false;
      this.volumeLevel = 0;
      this.pitchLevels = [0, 0, 0, 0, 0];
    });



    // let callDuration = 1; // minutes
    // setTimeout(() => {
    //   this.voiceagents?.send({
    //     type: "add-message",
    //     message: {
    //       role: "system",
    //       content: "The call will end soon. End any topic that you are talking about. End the conversation naturally, tell the user that the call will end soon, goodbye and end the conversation."
    //     }
    //   });

    // }, callDuration * 60 * 1000 - 1000 * 30); // 30 seconds before the call ends


    this.isInCall = true;
    this.isLoading = false;
    this.errorMessage = null;
  }

  async stopVoiceagents() {
    this.voiceagents?.stop();
    this.isSpeaking = false;
    this.isInCall = false;
    this.volumeLevel = 0;
    this.pitchLevels = [0, 0, 0, 0, 0];
    this.errorMessage = null;
    clearTimeout(this.loadingTimeout);
  }

  ngOnDestroy() {
    clearTimeout(this.loadingTimeout);
  }
}
