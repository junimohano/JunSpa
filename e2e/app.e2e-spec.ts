import { JunSpaPage } from './app.po';

describe('jun-spa App', () => {
  let page: JunSpaPage;

  beforeEach(() => {
    page = new JunSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
