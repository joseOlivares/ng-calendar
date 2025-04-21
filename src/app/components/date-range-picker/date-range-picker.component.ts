import { Component, input, output } from '@angular/core';
import { inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbInputDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DateRangePicker } from '../../types/date-range-picker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-range-picker',
  imports: [NgbDatepickerModule, CommonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {
  calendar = inject(NgbCalendar);
  formatter = inject(NgbDateParserFormatter);



	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getToday();
	toDate: NgbDate | null = null //this.calendar.getNext(this.fromDate, 'd', 10);
  rangeDate: string = '';

  minDate: NgbDate = this.calendar.getPrev(this.calendar.getToday(),'y', 2); // 2 years ago
  maxDate: NgbDate = this.calendar.getNext(this.calendar.getToday(), 'y', 1); // 1 year in the future

  inputPlaceholder=input('Desde / Hasta');
  inputRangeSeparator=input('/');
  inputReadOnly=input(false);
  selectedRangeDate = output<DateRangePicker>();
  selectedFromDate= output<NgbDate>(); //Salida emitida al padre
  selectedToDate= output<NgbDate>(); //Salida emitida al padre

	onDateSelection(date: NgbDate, dp: NgbInputDatepicker) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
      dp.close();
		} else {
			this.toDate = null;
			this.fromDate = date;
		}

    this.rangeDate = `${this.formatter.format(this.fromDate)} ${ this.inputRangeSeparator() } ${ this.formatter.format(this.toDate) }`;

    this.selectedFromDate.emit(this.fromDate);
    this.selectedToDate.emit(this.toDate??this.fromDate);
    this.selectedRangeDate.emit({fromDate: this.fromDate, toDate: this.toDate??this.fromDate});

    console.log("From:", this.fromDate);
    console.log("To:", this.toDate);
    console.log("Range:", this.rangeDate);
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}

  /*
  get formattedStartDate() {
    if (!this.fromDate) {
      return { year: 0, month: 0 };
    }
    return {
      year: this.fromDate.year,
      month: this.fromDate.month,
      day: this.fromDate.day
    };
  }
  */
}
