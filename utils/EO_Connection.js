import { OpenEO } from '@openeo/js-client';

export default async function initializeConnection () {
  try {
    var connection = await OpenEO.connect("https://openeo.dataspace.copernicus.eu");
    // Success
  } catch (error) {
    // Error
  }


  var info = connection.capabilities();
  console.log(info.description)
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
