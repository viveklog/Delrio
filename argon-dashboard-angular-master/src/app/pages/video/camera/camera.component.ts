import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {
    isCameraVisible: boolean = false;
    @ViewChild('videoElement', { static: false }) videoElement: ElementRef<HTMLVideoElement>;

  
    showCamera() {
      this.isCameraVisible = true;
      this.initializeCamera();
    }
  
    hideCamera() {
      this.isCameraVisible = false;
      this.stopCamera();
    }
  
    initializeCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          this.videoElement.nativeElement.srcObject = stream;
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    }
  
    stopCamera() {
        if (this.videoElement && this.videoElement.nativeElement) {
          const stream = this.videoElement.nativeElement.srcObject as MediaStream;
          if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
          }
        }
      }
  }