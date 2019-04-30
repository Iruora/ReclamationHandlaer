import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './oracle.datasource.json';

export class OracleDataSource extends juggler.DataSource {
  static dataSourceName = 'oracle';

  constructor(
    @inject('datasources.config.oracle', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
