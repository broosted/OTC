import { ProjectBetaPage } from './app.po';

describe('project-beta App', () => {
  let page: ProjectBetaPage;

  beforeEach(() => {
    page = new ProjectBetaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
