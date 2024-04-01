import supertest from 'supertest';
import { expect, assert } from 'chai';
import app from '../server.js';
import mongoose from '../utils/db.js'

global.app = app;
global.request = supertest(app);
global.expect = expect;
global.assert = assert;
