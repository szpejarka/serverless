import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFeatureComponent } from './client-feature.component';

describe('ClientFeatureComponent', () => {
  let component: ClientFeatureComponent;
  let fixture: ComponentFixture<ClientFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
