import { expect, assert } from 'chai'
import supertest from 'supertest';
import app from '../server.js';

global.expect = expect
global.app = app;
global.request = supertest(app);
global.assert = assert;
