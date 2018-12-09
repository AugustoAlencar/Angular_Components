import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterControllerComponent } from './router-controller.component';

describe('RouterControllerComponent', () => {
  let component: RouterControllerComponent;
  let fixture: ComponentFixture<RouterControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
