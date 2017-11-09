import { RentACarAngular2ProjectPage } from './app.po';

describe('rent-acar-angular2-project App', function() {
  let page: RentACarAngular2ProjectPage;

  beforeEach(() => {
    page = new RentACarAngular2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
