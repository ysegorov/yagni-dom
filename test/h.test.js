
const expect = require('chai').expect;
const dom = require('..');


describe('h()', function () {

  it('returns proper tag spec as object', function () {

    const attrs = {};
    const props = {};
    const children = [];
    const div = dom.h('div', attrs, props, children);

    expect(div).to.be.an('object');
    expect(div).to.have.property('tagName', 'div');
    expect(div).to.have.property('attrs', attrs);
    expect(div).to.have.property('props', props);
    expect(div).to.have.property('children');

  });

  it('flattens children', function () {

    const attrs = {};
    const props = {};
    const children = [
      ['foo', 'baz'],
      'bar',
      [
        [
          [42]
        ]
      ]
    ];

    const div = dom.h('div', attrs, props, children);

    expect(div).to.have.property('children');
    expect(div.children).to.deep.equal(['foo', 'baz', 'bar', 42]);

  });

});