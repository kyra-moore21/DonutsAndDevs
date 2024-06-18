import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorRowComponent } from './inventor-row.component';

describe('InventorRowComponent', () => {
  let component: InventorRowComponent;
  let fixture: ComponentFixture<InventorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
