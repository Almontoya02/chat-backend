import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChatComponent } from './dashboard-chat.component';

describe('DashboardChatComponent', () => {
  let component: DashboardChatComponent;
  let fixture: ComponentFixture<DashboardChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
