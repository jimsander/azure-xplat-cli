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
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809/versions/1.0/activate?api-version=2015-12-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 22:34:55 GMT',
  etag: '0x8D3ECA6AA34A045',
  'request-id': 'b66c6e99-2f83-40a6-9bb7-139f3a58ed4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '2ceaac3f-616b-4581-925b-58d0f4bba30e',
  'x-ms-correlation-request-id': '2ceaac3f-616b-4581-925b-58d0f4bba30e',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223456Z:2ceaac3f-616b-4581-925b-58d0f4bba30e',
  date: 'Tue, 04 Oct 2016 22:34:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809/versions/1.0/activate?api-version=2015-12-01', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 22:34:55 GMT',
  etag: '0x8D3ECA6AA34A045',
  'request-id': 'b66c6e99-2f83-40a6-9bb7-139f3a58ed4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': '2ceaac3f-616b-4581-925b-58d0f4bba30e',
  'x-ms-correlation-request-id': '2ceaac3f-616b-4581-925b-58d0f4bba30e',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223456Z:2ceaac3f-616b-4581-925b-58d0f4bba30e',
  date: 'Tue, 04 Oct 2016 22:34:55 GMT',
  connection: 'close' });
 return result; }]];