import { Injectable } from '@angular/core';
import { localStorageApiKey } from '@core/consts/local-storage.consts';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getApiKeyFromLocalStorage() {
    const apiKeyFromLocalStorage = localStorage.getItem(localStorageApiKey);
    if (apiKeyFromLocalStorage) {
      localStorage.setItem(localStorageApiKey, apiKeyFromLocalStorage);
    }
  }

  apiKeyChange(apiKeyChanged: string) {
    localStorage.setItem(localStorageApiKey, apiKeyChanged);
  }
}
