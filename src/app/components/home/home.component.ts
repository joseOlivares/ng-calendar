import { Component, signal } from '@angular/core';
import { DateRangePickerComponent } from '../../core/components/date-range-picker/date-range-picker.component';
import { DateRangePicker } from '../../types/date-range-picker';

@Component({
  selector: 'app-home',
  imports: [DateRangePickerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  rangeDate=signal<DateRangePicker>({fromDate: null, toDate: null});

  rangeDateSelected(datesSelected: DateRangePicker) {
    console.log("Tickets Main - Range Date Selected: ", datesSelected);
    this.rangeDate.set(datesSelected);
  }
}
