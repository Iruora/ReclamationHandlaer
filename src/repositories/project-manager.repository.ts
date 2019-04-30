import { ProjectManager } from './../models/project-manager.model';
import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { OracleDataSource } from '../datasources';

export class ProjectManagerRepository extends DefaultCrudRepository<
  ProjectManager,
  typeof ProjectManager.prototype.id
  > {
  constructor(
    @inject('datasources.oracle') datasource: OracleDataSource,
  ) {
    super(ProjectManager, datasource);
  }
}
