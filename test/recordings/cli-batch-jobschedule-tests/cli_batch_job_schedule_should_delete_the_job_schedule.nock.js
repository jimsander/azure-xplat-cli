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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jsxplat';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jsxplat.centralus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .delete('/jobschedules/xplatJobSchedule?api-version=2015-12-01.2.2&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'de2ddebe-69c0-4b05-8cf4-5bd66db27999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a9b6012f-8737-4284-a91d-ca88643f4027',
  dataserviceversion: '3.0',
  date: 'Fri, 18 Mar 2016 16:43:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .delete('/jobschedules/xplatJobSchedule?api-version=2015-12-01.2.2&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'de2ddebe-69c0-4b05-8cf4-5bd66db27999',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'a9b6012f-8737-4284-a91d-ca88643f4027',
  dataserviceversion: '3.0',
  date: 'Fri, 18 Mar 2016 16:43:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jsxplat.centralus.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2015-12-01.2.2&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobScheduleNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job schedule does not exist.\\nRequestId:5e9803fe-383b-4c25-ad1f-ceb453795e3c\\nTime:2016-03-18T16:43:53.4927604Z\"\r\n  }\r\n}", { 'content-length': '346',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e9803fe-383b-4c25-ad1f-ceb453795e3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '556368af-55bb-43f2-a5dd-0bd2993c8385',
  dataserviceversion: '3.0',
  date: 'Fri, 18 Mar 2016 16:43:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jsxplat.centralus.batch.azure.com:443')
  .get('/jobschedules/xplatJobSchedule?api-version=2015-12-01.2.2&timeout=30')
  .reply(404, "{\r\n  \"odata.metadata\":\"https://jsxplat.centralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobScheduleNotFound\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job schedule does not exist.\\nRequestId:5e9803fe-383b-4c25-ad1f-ceb453795e3c\\nTime:2016-03-18T16:43:53.4927604Z\"\r\n  }\r\n}", { 'content-length': '346',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '5e9803fe-383b-4c25-ad1f-ceb453795e3c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '556368af-55bb-43f2-a5dd-0bd2993c8385',
  dataserviceversion: '3.0',
  date: 'Fri, 18 Mar 2016 16:43:53 GMT',
  connection: 'close' });
 return result; }]];