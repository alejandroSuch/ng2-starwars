import { Ng2StarwarsPage } from './app.po';

describe('ng2-starwars App', function() {
  let page: Ng2StarwarsPage;

  beforeEach(() => {
    page = new Ng2StarwarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
