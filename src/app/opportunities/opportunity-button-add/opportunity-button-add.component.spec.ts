import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityButtonAddComponent } from './opportunity-button-add.component';

describe('OpportunityButtonAddComponent', () => {
  let component: OpportunityButtonAddComponent;
  let fixture: ComponentFixture<OpportunityButtonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityButtonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
