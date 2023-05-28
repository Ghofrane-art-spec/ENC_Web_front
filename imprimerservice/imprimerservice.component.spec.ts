import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerserviceComponent } from './imprimerservice.component';

describe('ImprimerserviceComponent', () => {
  let component: ImprimerserviceComponent;
  let fixture: ComponentFixture<ImprimerserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimerserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprimerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
