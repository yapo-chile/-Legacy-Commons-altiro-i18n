/* global describe, it, before */

import chai from 'chai';
import altiroI18N from '../lib/@Yapo/altiro-i18n';

chai.expect();

const expect = chai.expect;

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
