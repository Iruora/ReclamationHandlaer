import { ProjectManager } from './../models/project-manager.model';
import { ProjectManagerRepository } from './../repositories/project-manager.repository';
import { repository, Filter } from '@loopback/repository';
import { get } from '@loopback/rest';
import { param, getFilterSchemaFor } from '@loopback/rest';

export class ProjectManagerController {
  constructor(
    @repository(ProjectManagerRepository)
    public projecManagerRepository: ProjectManagerRepository
  ) { }

  @get('/project-managers', {
    responses: {
      '200': {
        description: 'Array of ProjectManagers model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': ProjectManager } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(ProjectManager)) filter?: Filter,
  ): Promise<ProjectManager[]> {
    return await this.projecManagerRepository.find(filter);
  }
}
