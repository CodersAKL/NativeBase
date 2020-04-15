// JEST setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = new JSDOM('', { url: 'http://localhost' }).window;

global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
