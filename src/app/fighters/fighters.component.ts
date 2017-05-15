import { Component, OnInit, ViewChild } from '@angular/core';
import { FighterDetailComponent } from './fighter-detail/fighter-detail.component';
import { SelectItem } from 'primeng/primeng';
import { FighterService } from 'app/fighters/shared/fighter.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss']
})
export class FightersComponent implements OnInit {

  @ViewChild('fighterDetail') fighterDetail: FighterDetailComponent;

  pagingRows = 12;
  term: any;

  fightersOriginalSource: Fighter[] = [];
  fightersWeightClassFiltered: Fighter[] = [];
  fightersNameFiltered: Fighter[] = [];
  fighters: Fighter[] = [];
  fighter: Fighter;

  weightClasses: SelectItem[] = [];
  selectedWeightClass = 'All';

  constructor(private fighterService: FighterService) {
    this.weightClasses.push({ label: 'All', value: null });
  }

  ngOnInit() {
    this.fighterService.getFighters()
      .subscribe(result => {
        this.fightersOriginalSource = result;
        this.fightersWeightClassFiltered = this.fightersOriginalSource;

        // this.weightClasses.push({ label: 'All', value: null });
        // this.weightClasses.push({ label: 'Women Strawweight', value: 'Women_Strawweight' });
        // this.weightClasses.push({ label: 'Women Bantamweight', value: 'Women_Bantamweight' });
        // this.weightClasses.push({ label: 'Women Featherweight', value: 'Women_Featherweight' });
        // this.weightClasses.push({ label: 'Flyweight', value: 'Flyweight' });
        // this.weightClasses.push({ label: 'Bantamweight', value: 'Bantamweight' });
        // this.weightClasses.push({ label: 'Featherweight', value: 'Featherweight' });
        // this.weightClasses.push({ label: 'Lightweight', value: 'Lightweight' });
        // this.weightClasses.push({ label: 'Welterweight', value: 'Welterweight' });
        // this.weightClasses.push({ label: 'Middleweight', value: 'Middleweight' });
        // this.weightClasses.push({ label: 'Lightheavyweight', value: 'Light_Heavyweight' });
        // this.weightClasses.push({ label: 'Heavyweight', value: 'Heavyweight' });

        this.fightersOriginalSource.forEach(element => {
          if (this.weightClasses.find(x => x.value === element.weight_class) == null) {
            this.weightClasses.push({ label: element.weight_class.replace('_', ' '), value: element.weight_class });
          }
        });

        this.setFilter('');

      }, error => alert(error));
  }

  setFilter(value) {
    this.fightersNameFiltered = this.fightersWeightClassFiltered.filter(function (fighter: Fighter) {
      return (fighter.first_name + ' ' + fighter.last_name).toLowerCase().includes(value.toLowerCase());
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
    this.fighterDetail.openDialog(this.fighters[index]);
  }

  paginate(event) {
    let length = this.fightersNameFiltered.length - event.first;
    if (length > event.rows) {
      length = event.rows;
    }
    this.fighters = this.fightersNameFiltered.slice(event.first, event.first + length);
    if (event.first === 0) {
      event.page = 1;
    }
  }

  onWeightClassesChange(event) {
    if (event.value == null) {
      this.fightersWeightClassFiltered = this.fightersOriginalSource;
    } else {
      this.fightersWeightClassFiltered = this.fightersOriginalSource.filter(
        book => book.weight_class === event.value);

      this.fightersWeightClassFiltered = this.fightersWeightClassFiltered.sort((a, b) => {
        if (a.rank === 'C') {
          a.rank = '0';
        } else if (a.rank == null) {
          a.rank = '99';
        }
        if (b.rank === 'C') {
          b.rank = '0';
        } else if (b.rank == null) {
          b.rank = '99';
        }
        let result = 0;

        if (Number(a.rank) < Number(b.rank)) {
          result = -1;
        }
        if (Number(a.rank) > Number(b.rank)) {
          result = 1;
        }

        if (a.rank === '0') {
          a.rank = 'C';
        } else if (a.rank === '99') {
          a.rank = null;
        }
        if (b.rank === '0') {
          b.rank = 'C';
        } else if (b.rank === '99') {
          b.rank = null;
        }

        return result;
      });

      //   // if (Number(a.rank) < Number(b.rank)) { return 1; }
      //   // if (Number(a.rank) > Number(b.rank)) { return -1; }
      //   // return 0;
      // });

    }
    this.setFilter('');
  }

}
