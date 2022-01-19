export interface TodoModel {
  id: number;
  fields: TodoFields;
}

interface TodoFields {
  Status: string;
  Tags: string;
  Text: string;
}
