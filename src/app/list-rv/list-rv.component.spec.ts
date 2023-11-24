import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRVComponent } from './list-rv.component';

describe('ListRVComponent', () => {
  let component: ListRVComponent;
  let fixture: ComponentFixture<ListRVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
