import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRDVComponent } from './edit-rdv.component';

describe('EditRDVComponent', () => {
  let component: EditRDVComponent;
  let fixture: ComponentFixture<EditRDVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRDVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRDVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
