import {DefaultCrudRepository} from '@loopback/repository';
import {Project} from '../models';
import {OracleDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProjectRepository extends DefaultCrudRepository<
  Project,
  typeof Project.prototype.id
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(Project, dataSource);
  }
}
