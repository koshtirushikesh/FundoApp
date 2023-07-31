import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteToolIconComponent } from './note-tool-icon.component';

describe('NoteToolIconComponent', () => {
  let component: NoteToolIconComponent;
  let fixture: ComponentFixture<NoteToolIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteToolIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteToolIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
