import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class ProjectManager extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  CIN: string;

  @property({
    type: 'date',
  })
  birthday?: string;

  @property({
    type: 'date',
    required: true,
  })
  recruitmentDay: string;

  @property({
    type: 'number',
    required: true,
    default: 1000,
  })
  salary: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<ProjectManager>) {
    super(data);
  }
}
