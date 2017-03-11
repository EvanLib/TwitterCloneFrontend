import { UserAuthPage } from './app.po';

describe('user-auth App', function() {
  let page: UserAuthPage;

  beforeEach(() => {
    page = new UserAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
