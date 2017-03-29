import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UIChart } from 'primeng/primeng';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.css']
})
export class FighterDetailComponent implements OnInit {

  @ViewChild('chart') private chart: UIChart;
  @Input() fighter: Fighter;

  private fighterDetail: FighterDetail;
  private display = false;
  private data: any;
  private images: any[];

  constructor(private apiService: ApiService) {
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

  openDialog(fighter: Fighter) {
    this.display = true;
    this.fighter = fighter;

    this.images = [];
    this.images.push({ source: this.fighter.belt_thumbnail, alt: 'Belt thumbnail', title: '1' });
    this.images.push({ source: this.fighter.profile_image, alt: 'Profile image', title: '2' });
    this.images.push({ source: this.fighter.left_full_body_image, alt: 'Left image', title: '3' });
    this.images.push({ source: this.fighter.right_full_body_image, alt: 'Right image', title: '4' });

    this.fighterDetail = null;
    this.apiService.getFighter(this.fighter.id)
      .subscribe(result => {
        this.fighterDetail = result;

        this.data = {
          labels: ['Striking', 'Submissions', 'Takedowns'],
          datasets: [
            {
              data: [this.fighterDetail.striking, this.fighterDetail.submissions, this.fighterDetail.takedowns],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ]
            }]
        };

        setTimeout(() => {
          this.chart.ngOnDestroy();
          this.chart.initChart();
        }, 50);

      });
  }

}