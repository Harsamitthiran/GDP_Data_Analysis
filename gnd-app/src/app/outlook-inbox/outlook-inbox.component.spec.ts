import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookInboxComponent } from './outlook-inbox.component';

describe('OutlookInboxComponent', () => {
  let component: OutlookInboxComponent;
  let fixture: ComponentFixture<OutlookInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutlookInboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
