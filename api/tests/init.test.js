import supertest from 'supertest';
import { expect, assert } from 'chai';
import app from '../server.js';

global.app = app;
global.request = supertest(app);
global.expect = expect;
global.assert = assert;
