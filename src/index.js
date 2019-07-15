import sinon from 'sinon';
import * as test from './test';
import { add } from './test';

console.log(test);
console.log(add);
console.log('toString: ', Object.prototype.toString.call(test));
console.log('toString: ', Object.prototype.toString.call(add));

const s1 = sinon.stub(test, 'add').returns('pass');
console.log(s1);
console.log(test.add());
