import { JumboWebPage } from './app.po';

describe('jumbo-web App', function() {
  let page: JumboWebPage;

  beforeEach(() => {
    page = new JumboWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
