import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  storage: {
    bucket_name: 'magiccarpet-manual-tests-dev',
    aws_region: 'us-west-2'
  }
})
