import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  @ViewChild('video', { static: false }) videoElement: ElementRef;
  video: any;

  constraints = {
    video: {
      facingMode: "user",
      width: { min: 1024, ideal: 1280, max: 1920 },
      height: { min: 576, ideal: 720, max: 1080 }
    }
  };
  

  ngAfterViewInit(): void {
    this.video = this.videoElement.nativeElement;
    this.start();
  }

  async start() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(this.constraints);
      this.handleSuccess(stream);
    } catch (e) {
      console.error(`navigator.getUserMedia error:${e.toString()}`);
    }
  }

  handleSuccess(stream) {
    //window.stream = stream;
    this.video.srcObject = stream;
  }

}