import jsdom from 'jsdom'
const html = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = html
global.window = document.defaultView
