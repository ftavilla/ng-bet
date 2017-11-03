import { NgBetPage } from './app.po';

describe('ng-bet App', () => {
  let page: NgBetPage;

  beforeEach(() => {
    page = new NgBetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
