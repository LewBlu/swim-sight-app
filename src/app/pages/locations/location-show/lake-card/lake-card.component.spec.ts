import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakeCardComponent } from './lake-card.component';

describe('LakeCardComponent', () => {
  let component: LakeCardComponent;
  let fixture: ComponentFixture<LakeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LakeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
