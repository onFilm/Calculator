import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() number: number | string | undefined;
  @Input() btnStyle: any;
  @Input() disable: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  onBtnClick(btn: any): void {
    this.onClick.emit(btn);
  }

}
