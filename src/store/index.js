import { createStoreon } from "storeon";
import { storeonDevtools } from 'storeon/devtools';

import inputStore from "./inputStore";

export const store = createStoreon([
    inputStore,
    process.env.NODE_ENV !== 'production' && storeonDevtools
]);