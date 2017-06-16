import { MyCoolAppPage } from './app.po';

describe('my-cool-app App', () => {
  let page: MyCoolAppPage;

  beforeEach(() => {
    page = new MyCoolAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
