import { Component } from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './date-range.component.html',
  styleUrls: ['./common.component.css']
})
export class DateRangeComponent {
  today: any;
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  today1: any;
  currentYear1: number;
  currentMonth1: number;
  currentDay1: number;
  dtValue1: any;
  dtValue2: any;
  minDate1: any;
  minDate2: any;
  maxDate1: any;
  maxDate2: any;
  width: string;
  constructor() {
      this.width = '100%';
      this.today = new Date();
      this.currentYear = this.today.getFullYear();
      this.currentMonth = this.today.getMonth();
      this.currentDay = this.today.getDate();
      this.dtValue1 = this.today;
      this.minDate1 = new Date(this.currentYear, this.currentMonth, this.currentDay - 7);
      this.maxDate1 = new Date(this.currentYear, this.currentMonth + 3, this.currentDay);
      this.dtValue2 = new Date(this.currentYear, this.currentMonth, this.currentDay + 7);
      this.minDate2 = this.today;
      this.maxDate2 = new Date(this.currentYear, this.currentMonth + 3, this.currentDay);
  }
  onSelectDate1(args) {
      let curDate = new Date(args.value);
      this.minDate2 =  curDate;
      this.dtValue2 =  new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 7);
  }
  onSelectDate2(args) {
      this.maxDate1 = args.value;
  }
}
