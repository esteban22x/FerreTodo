import { TestBed, inject } from '@angular/core/testing';

import { CategoriaServicio } from './Categoria.servicio';

describe('CategoriaServicio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriaServicio]
    });
  });

  it('should ...', inject([CategoriaServicio], (service: CategoriaServicio) => {
    expect(service).toBeTruthy();
  }));
});