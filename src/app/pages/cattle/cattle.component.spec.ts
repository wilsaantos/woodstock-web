import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleComponent } from './cattle.component';

describe('CattleComponent', () => {
  let component: CattleComponent;
  let fixture: ComponentFixture<CattleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CattleComponent]
    });
    fixture = TestBed.createComponent(CattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
