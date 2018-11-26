import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContentComponent } from './list-of-content.component';

describe('ListOfContentComponent', () => {
  let component: ListOfContentComponent;
  let fixture: ComponentFixture<ListOfContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
