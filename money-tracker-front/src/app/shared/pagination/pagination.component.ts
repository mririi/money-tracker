import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PaginationComponent,
      multi: true
    }
  ]
})
export class PaginationComponent implements ControlValueAccessor{
  @Input() pageSize: number = 0;
  @Input() size: number = 0;
  currentPage: number = 1;
  maxSize: number = 5;

  onChange: (page: number) => void = () => {};
  onTouched: () => void = () => {};


  goToPage(page: number) {
    this.currentPage = page;
    this.onChange(this.currentPage);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    if (obj !== undefined && obj !== null) {
      this.currentPage = obj;
    }
  }
}
