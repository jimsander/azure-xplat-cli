// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Storage/storageAccounts/armclibatch2714\",\"lastKeySync\":\"2016-10-04T21:46:53.5669002Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 21:47:01 GMT',
  etag: '0x8D3EC9FF9663511',
  'request-id': 'b7802ea4-fcb1-4672-aa4e-9cb0fe912848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'e3b21674-e61e-445a-af39-6b5773933a98',
  'x-ms-correlation-request-id': 'e3b21674-e61e-445a-af39-6b5773933a98',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214703Z:e3b21674-e61e-445a-af39-6b5773933a98',
  date: 'Tue, 04 Oct 2016 21:47:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Storage/storageAccounts/armclibatch2714\",\"lastKeySync\":\"2016-10-04T21:46:53.5669002Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 21:47:01 GMT',
  etag: '0x8D3EC9FF9663511',
  'request-id': 'b7802ea4-fcb1-4672-aa4e-9cb0fe912848',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-request-id': 'e3b21674-e61e-445a-af39-6b5773933a98',
  'x-ms-correlation-request-id': 'e3b21674-e61e-445a-af39-6b5773933a98',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214703Z:e3b21674-e61e-445a-af39-6b5773933a98',
  date: 'Tue, 04 Oct 2016 21:47:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191/syncAutoStorageKeys?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '49c4d56e-636e-48d8-9465-da6f309b7cf5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  'x-ms-correlation-request-id': '7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214704Z:7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  date: 'Tue, 04 Oct 2016 21:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191/syncAutoStorageKeys?api-version=2015-12-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'request-id': '49c4d56e-636e-48d8-9465-da6f309b7cf5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  'x-ms-correlation-request-id': '7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214704Z:7c3b7d06-7f8f-4f36-8bf7-ec493c077b93',
  date: 'Tue, 04 Oct 2016 21:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Storage/storageAccounts/armclibatch2714\",\"lastKeySync\":\"2016-10-04T21:47:06.4871674Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 21:47:07 GMT',
  etag: '0x8D3EC9FFCC62EF3',
  'request-id': 'e7c50175-b9c0-4c06-b76f-9d9ccda2b2ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '66582697-dcec-4e07-93d8-b8e2f48c88c9',
  'x-ms-correlation-request-id': '66582697-dcec-4e07-93d8-b8e2f48c88c9',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214705Z:66582697-dcec-4e07-93d8-b8e2f48c88c9',
  date: 'Tue, 04 Oct 2016 21:47:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Storage/storageAccounts/armclibatch2714\",\"lastKeySync\":\"2016-10-04T21:47:06.4871674Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 21:47:07 GMT',
  etag: '0x8D3EC9FFCC62EF3',
  'request-id': 'e7c50175-b9c0-4c06-b76f-9d9ccda2b2ed',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '66582697-dcec-4e07-93d8-b8e2f48c88c9',
  'x-ms-correlation-request-id': '66582697-dcec-4e07-93d8-b8e2f48c88c9',
  'x-ms-routing-request-id': 'CENTRALUS:20161004T214705Z:66582697-dcec-4e07-93d8-b8e2f48c88c9',
  date: 'Tue, 04 Oct 2016 21:47:05 GMT',
  connection: 'close' });
 return result; }]];