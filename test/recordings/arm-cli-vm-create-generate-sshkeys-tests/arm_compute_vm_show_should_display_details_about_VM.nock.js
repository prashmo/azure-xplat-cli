// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
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
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli54be8195e0a4511f-os-1439814027127\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage11272.blob.core.windows.net/xplatsshstoragecnt17621/cli54be8195e0a4511f-os-1439814027127.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA4MTcxMjEwMjda\\r\\nGA8yMDI1MDgxNzEyMTAyN1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCK1vKYDz+Op7+Lcouo0b7+tr6s\\r\\n0C2o52O+L4O07SQwaNUPyTN0hkDS5uvUO1MsMChCTMx9rU22inq2dHKSnjhCbeSg\\r\\n8kdMcJB11q+fSNJeUuIgJito3CyuFoDrWOu2Kp/I9xYsTsV5iGHpNGYq0GXiIv39\\r\\nv5DCDfd6/LdVWOCv7NcD80UiQ4utgOMtyXMLN4t8/cyDcfZ4/vpiGG/ag6STZhDT\\r\\nGCGwlupcPblMN739OUpWMRuaY9uciH7eU+MkjwUpuRGYsm+fk7CGIASTIZE1pcX8\\r\\n78VJCH9kNeoUdUpuMscZPOLvIJJkR5m6wjZXHgwBG6KTcwUtpI/W4UXOlxgDAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAYcy7Z05VLfYCEUSRX8X2jCQP2PNxqWA2CV/jihoJ\\r\\nQjJkZrHH42v/OrmXnaeoTaC7Xlk2CsgPfX54rEx69e0jhXuoMN8rGDXN+8jOvODr\\r\\n32O5IR13/8X2INhP8ZG0/BJ2WYsmKOYZUiq2Eb5qwAysowze7qgWOjWlgpuyBNuC\\r\\n/Fj7QKKyqKvmTnhyyIYok63rznygcqosjbeNDP72EyqRwhZJWV2VOwNKvSVAxJpn\\r\\no9XRqNqYrbi654exQWy6oATftEgC4DzSw2RH8ymLU2AgjiLVGWOpVA5oRlC1weuC\\r\\n8bz4aSZqj0gwT24MQWyKGUIIUzCIldlG8/ZGZyydcBSjWw==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130833786464858178',
  'x-ms-request-id': '7c84ef9b-a669-4716-a0e0-e629ac724195',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '1f10949e-cd03-4af0-8d49-2e7b092b63ad',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150817T122343Z:1f10949e-cd03-4af0-8d49-2e7b092b63ad',
  date: 'Mon, 17 Aug 2015 12:23:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.04\",\r\n        \"version\": \"15.04.201507070\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli54be8195e0a4511f-os-1439814027127\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage11272.blob.core.windows.net/xplatsshstoragecnt17621/cli54be8195e0a4511f-os-1439814027127.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjjCCAXqgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNTA4MTcxMjEwMjda\\r\\nGA8yMDI1MDgxNzEyMTAyN1owGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEi\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCK1vKYDz+Op7+Lcouo0b7+tr6s\\r\\n0C2o52O+L4O07SQwaNUPyTN0hkDS5uvUO1MsMChCTMx9rU22inq2dHKSnjhCbeSg\\r\\n8kdMcJB11q+fSNJeUuIgJito3CyuFoDrWOu2Kp/I9xYsTsV5iGHpNGYq0GXiIv39\\r\\nv5DCDfd6/LdVWOCv7NcD80UiQ4utgOMtyXMLN4t8/cyDcfZ4/vpiGG/ag6STZhDT\\r\\nGCGwlupcPblMN739OUpWMRuaY9uciH7eU+MkjwUpuRGYsm+fk7CGIASTIZE1pcX8\\r\\n78VJCH9kNeoUdUpuMscZPOLvIJJkR5m6wjZXHgwBG6KTcwUtpI/W4UXOlxgDAgMB\\r\\nAAEwCQYHKoZIzj0EAQOCAQEAYcy7Z05VLfYCEUSRX8X2jCQP2PNxqWA2CV/jihoJ\\r\\nQjJkZrHH42v/OrmXnaeoTaC7Xlk2CsgPfX54rEx69e0jhXuoMN8rGDXN+8jOvODr\\r\\n32O5IR13/8X2INhP8ZG0/BJ2WYsmKOYZUiq2Eb5qwAysowze7qgWOjWlgpuyBNuC\\r\\n/Fj7QKKyqKvmTnhyyIYok63rznygcqosjbeNDP72EyqRwhZJWV2VOwNKvSVAxJpn\\r\\no9XRqNqYrbi654exQWy6oATftEgC4DzSw2RH8ymLU2AgjiLVGWOpVA5oRlC1weuC\\r\\n8bz4aSZqj0gwT24MQWyKGUIIUzCIldlG8/ZGZyydcBSjWw==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"properties\":{},\"id\":\"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2535',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'c37dca37-9c43-4151-b86b-477e6d65ea27_130833786464858178',
  'x-ms-request-id': '7c84ef9b-a669-4716-a0e0-e629ac724195',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '1f10949e-cd03-4af0-8d49-2e7b092b63ad',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150817T122343Z:1f10949e-cd03-4af0-8d49-2e7b092b63ad',
  date: 'Mon, 17 Aug 2015 12:23:43 GMT',
  connection: 'close' });
 return result; }]];