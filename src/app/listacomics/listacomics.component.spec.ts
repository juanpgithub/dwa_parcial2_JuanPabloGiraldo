import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomicsComponent } from './listacomics.component';

describe('ListacomicsComponent', () => {
  let component: ListacomicsComponent;
  let fixture: ComponentFixture<ListacomicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
