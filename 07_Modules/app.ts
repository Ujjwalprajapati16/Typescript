// Modules
// Exporting and importing modules
// Default exports

import { getDetails, addPayment } from "./payment";

addPayment(12);

// default export
import Paytm from "./payment";

const payment = new Paytm(12, 1234567890);
console.log(payment);