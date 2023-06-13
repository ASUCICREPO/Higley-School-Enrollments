// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LoginInfo } = initSchema(schema);

export {
  LoginInfo
};