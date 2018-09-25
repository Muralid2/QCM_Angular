import { QcmAngularAppPage } from './app.po';

describe('qcm-angular-app App', () => {
  let page: QcmAngularAppPage;

  beforeEach(() => {
    page = new QcmAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
