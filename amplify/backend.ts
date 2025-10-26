import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data
});

// 👇 Force a new AppSync API key resource for one deploy
backend.data.resources.cfnResources.cfnApiKey?.overrideLogicalId(
  `recoverApiKey${Date.now()}`
);
