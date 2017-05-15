import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UIChart } from 'primeng/primeng';

@Component({
  selector: 'app-octagon-girl-detail',
  templateUrl: './octagon-girl-detail.component.html',
  styleUrls: ['./octagon-girl-detail.component.scss']
})
export class OctagonGirlDetailComponent implements OnInit {

  @ViewChild('chart') chart: UIChart;
  @Input() octagonGirl: OctagonGirl;

  display = false;
  data: any;
  images: any[];

  constructor() {
    this.data = {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: []
        }]
    };
  }

  ngOnInit() {
  }

  openDialog(octagonGirl: OctagonGirl) {
    this.display = true;
    this.octagonGirl = octagonGirl;

    this.images = [];
    this.images.push({ source: this.octagonGirl.banner_background_image, alt: 'Belt thumbnail', title: '1' });
    this.images.push({ source: this.octagonGirl.large_body_picture, alt: 'Profile image', title: '2' });
    this.images.push({ source: this.octagonGirl.large_profile_picture, alt: 'Left image', title: '3' });
    this.images.push({ source: this.octagonGirl.medium_profile_picture, alt: 'Right image', title: '4' });
    this.octagonGirl.gallery.forEach(element => {
      this.images.push({ source: element.path, alt: element.caption, title: '11' });
    });
  }

}
