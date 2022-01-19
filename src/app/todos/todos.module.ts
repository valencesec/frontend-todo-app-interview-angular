import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodosRoutingModule } from './todos-routing.module';
import { ApiKeyInputComponent } from './components/api-key-input/api-key-input.component';

@NgModule({
  declarations: [TodoItemComponent, TodosRoutingModule.components, ApiKeyInputComponent],
  imports: [SharedModule, TodosRoutingModule],
})
export class TodosModule {}
