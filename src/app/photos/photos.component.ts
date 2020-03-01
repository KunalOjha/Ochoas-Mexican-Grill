import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos = Array(15).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

}
