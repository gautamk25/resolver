import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverDataComponent } from './resolver-data.component';

describe('ResolverDataComponent', () => {
  let component: ResolverDataComponent;
  let fixture: ComponentFixture<ResolverDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolverDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
