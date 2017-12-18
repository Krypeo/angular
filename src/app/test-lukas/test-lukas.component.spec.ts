import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLukasComponent } from './test-lukas.component';

describe('TestLukasComponent', () => {
  let component: TestLukasComponent;
  let fixture: ComponentFixture<TestLukasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLukasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLukasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
