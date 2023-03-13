import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() customPlaceholder: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  searchInput: string = '';

  search() {
    this.onEnter.emit(this.searchInput);
  }

  letterPressed() {
    this.debouncer.next(this.searchInput);
  }
}
