import { AngularAssignmentDeletePage } from './app.po';

describe('angular-assignment-delete App', function() {
  let page: AngularAssignmentDeletePage;

  beforeEach(() => {
    page = new AngularAssignmentDeletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
