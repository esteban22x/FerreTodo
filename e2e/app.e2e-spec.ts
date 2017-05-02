import { FerreTodoPage } from './app.po';

describe('ferre-todo App', () => {
  let page: FerreTodoPage;

  beforeEach(() => {
    page = new FerreTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
