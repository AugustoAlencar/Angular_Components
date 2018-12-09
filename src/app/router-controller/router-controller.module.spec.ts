import { RouterControllerModule } from './router-controller.module';

describe('RouterControllerModule', () => {
  let RouterControllerModule: RouterControllerModule;

  beforeEach(() => {
    RouterControllerModule = new RouterControllerModule();
  });

  it('should create an instance', () => {
    expect(RouterControllerModule).toBeTruthy();
  });
});
