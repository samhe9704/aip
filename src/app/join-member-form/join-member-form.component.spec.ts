import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMemberFormComponent } from './join-member-form.component';

describe('JoinMemberFormComponent', () => {
  let component: JoinMemberFormComponent;
  let fixture: ComponentFixture<JoinMemberFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinMemberFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
