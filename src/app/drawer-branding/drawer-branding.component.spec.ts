import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerBrandingComponent } from './drawer-branding.component';

describe('DrawerBrandingComponent', () => {
  let component: DrawerBrandingComponent;
  let fixture: ComponentFixture<DrawerBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerBrandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
