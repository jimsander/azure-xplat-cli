// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"e87c205f-e478-4d3b-be91-dd2f7722b3a6\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"15.10.201602040\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clia7d598a36ed45030-os-1471270822790\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage14341.blob.core.windows.net/xplatsshstoragecnt19434/clia7d598a36ed45030-os-1471270822790.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNjA4MTUxNDEwMjJa\\r\\nGA8yMDI2MDgxNTE0MTAyMlowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCBzJZRDeLXsWiWPvep+Vk7ABgD\\r\\n3LqZg+6tR4msmaKPJ6yPobBV/+ZYQyi5vDvPql1vYZVt9kVsHu+KtyaSdlzM3Kec\\r\\nR6CdCTTrIBhFgJi41aJVYLvauOyzK9gto+cYNOq+pSDdjwjDiEtuVO5hkiWaPVvc\\r\\na6NC5j/ukhGVJgLDRJD1OlfPA7U0LBB9JzNHB5YehdB2c66jLST0VbbLPHQOVVir\\r\\nNeMd0ftsz9RcX+Jun8qRS64xFO/OMxlMdE9veA77Xa5phGRJaF/1M+iWEtlPHJqx\\r\\nolA+u9ebCByiRD6Gp60hd4iX/2JjqAbbnrX9/1zoeiaKe5z1Q5I5Og1x73EzAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAQmod21SQwicjgsVUIhkaHdrPnT4vsiUz7WUQvycw\\r\\n1S7jWptmpDwDx87I93f6W9xqFnXpPv342+UbA0s5DMPyQ5+G6fNS4e1zQzBMfRX4\\r\\nsDQUfE9pG1hQGuvnPwWXDxv6fh1LZyANpL09pcwyvSx49orQU1FFd6YBGTeJvJLB\\r\\nCBf14HJT5N8mH8Ahf0+I6M1Ee9VNCrF90aRiZe7UI+6TwxnJqdNwPa3FuBz04f7U\\r\\n5hqvKd8/WvmeH7lvar3UicylpnmBTDrtAwbYXQJXylL0ZxIbCmrprPVQwjZMhYsZ\\r\\n0v9RsbMgkka8GBYYljgXktj/gsDJP/RLEXlNQOXG2El6Ng==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatsshstorage14341.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2750',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'f32602ba-780f-49e6-b60d-c7ed309b60e0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': 'f508e51e-7a54-4741-ab3f-1663289ac05d',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T142348Z:f508e51e-7a54-4741-ab3f-1663289ac05d',
  date: 'Mon, 15 Aug 2016 14:23:48 GMT' });
 return result; }]];
