import { OpenEO } from '@openeo/js-client';

export default async function initializeConnection () {
  try {
    var connection = await OpenEO.connect("https://earthengine.openeo.org");
    // Success
  } catch (error) {
    // Error
  }

  var info = connection.capabilities();
  return connection
//   console.log("API Version: ", info.apiVersion());
// console.log("Description: ", info.description());

// console.log("Billing plans:");
// info.listPlans().forEach(plan => {
//   console.log(`${plan.name}: ${plan.url}`);
// });

// console.log("Related links:");
// info.links().forEach(link => {
//   console.log(`${link.title}: ${link.href}`);
// });


}
