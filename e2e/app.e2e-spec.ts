import { UrbanoPage } from './app.po';

describe('urbano App', () => {
  let page: UrbanoPage;

  beforeEach(() => {
    page = new UrbanoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
