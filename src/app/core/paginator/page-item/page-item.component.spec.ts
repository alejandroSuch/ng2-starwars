/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageItemComponent } from './page-item.component';

describe('PageItemComponent', () => {
  let component: PageItemComponent;
  let fixture: ComponentFixture<PageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
