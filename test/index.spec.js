/* global describe, it, before */

import { expect } from 'chai';
import altiroI18N from '../lib/altiro-i18n';

let lib;

describe('Given an instance of my i18n library', () => {
  before(() => {
    lib = altiroI18N.es;
  });
  describe('when I need the site name', () => {
    it('should return the name', () => {
      expect(lib.YAPO_URL).to.be.equal('Yapo.cl');
    });
  });
});
