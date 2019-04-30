import { Entity, model, property } from '@loopback/repository';

@model({ settings: { "strict": false } })
export class Project extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    required: false,
  })
  id: number;

  @property({
    type: 'date',
  })
  startDate?: string;

  @property({
    type: 'date',
  })
  endDate?: string;

  @property({
    type: 'number',
    default: 0,
  })
  budget?: number;

  @property({
    type: 'number',
    default: 0,
  })
  cost?: number;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'string',
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Project>) {
    super(data);
  }
}
