import { Component, OnInit } from '@angular/core';
import { localStorageApiKey } from '@core/consts/local-storage.consts';
import { TodoModel } from '@shared/models/todo.interface';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  apiKey: string;
  todos: TodoModel[];

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.getApiKeyFromLocalStorage();
  }

  apiKeyChange(apiKeyChanged: string) {
    this.localStorageService.apiKeyChange(apiKeyChanged);
  }
}
