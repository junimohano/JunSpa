import { Component, OnInit, ViewChild } from '@angular/core';
import { OctagonGirlService } from './shared/octagon-girl.service';
import { OctagonGirlFilterPipe } from './shared/octagon-girl-filter.pipe';
import { OctagonGirlDetailComponent } from './octagon-girl-detail/octagon-girl-detail.component';

@Component({
  selector: 'app-octagon-girl',
  templateUrl: './octagon-girls.component.html',
  styleUrls: ['./octagon-girls.component.scss']
})
export class OctagonGirlsComponent implements OnInit {

  @ViewChild('octagonGirlDetail') octagonGirlDetail: OctagonGirlDetailComponent;

  pagingRows = 6;
  term: any;
  octagonGirlsOriginalSource: OctagonGirl[] = [];
  octagonGirlsFiltered: OctagonGirl[] = [];
  octagonGirls: OctagonGirl[] = [];
  display = false;

  constructor(private octagonGirlService: OctagonGirlService) { }

  ngOnInit() {
    this.octagonGirlService.getOctagonGirls()
      .subscribe(result => {
        this.octagonGirlsOriginalSource = result;
        this.setFilter('');
      }, error => alert(error));
  }

  setFilter(value) {
    this.octagonGirlsFiltered = this.octagonGirlsOriginalSource.filter(function (octagonGirl: OctagonGirl) {
      return (octagonGirl.first_name + ' ' + octagonGirl.last_name).toLowerCase().includes(value.toLowerCase());
    });
    this.paginate({
      first: 0,
      rows: this.pagingRows
    });
  }

  onChange(newValue) {
    this.setFilter(newValue);
  }

  openDetail(index: number) {
    this.octagonGirlDetail.openDialog(this.octagonGirls[index]);
  }

  paginate(event) {
    let length = this.octagonGirlsFiltered.length - event.first;
    if (length > event.rows) {
      length = event.rows;
    }
    this.octagonGirls = this.octagonGirlsFiltered.slice(event.first, event.first + length);
    if (event.first === 0) {
      event.page = 1;
    }
    // event.first = Index of the first record
    // event.rows = Number of rows to display in new page
    // event.page = Index of the new page
    // event.pageCount = Total number of pages
  }

}
