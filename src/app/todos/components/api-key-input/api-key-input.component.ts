import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-api-key-input',
  templateUrl: './api-key-input.component.html',
  styleUrls: ['./api-key-input.component.scss'],
})
export class ApiKeyInputComponent implements OnInit {
  @Input() apiKey: string;
  @Output() apiKeyChanged = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  apiKeyChange(textEvent) {
    const changedApiKey: string = textEvent.target.value;
    this.apiKeyChanged.emit(changedApiKey);
  }
}
