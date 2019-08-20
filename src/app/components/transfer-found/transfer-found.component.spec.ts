import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFoundComponent } from './transfer-found.component';

describe('TransferFoundComponent', () => {
  let component: TransferFoundComponent;
  let fixture: ComponentFixture<TransferFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
