import { TestBed, inject } from '@angular/core/testing';

import { ProductoServicioService } from './producto-servicio.service';

describe('ProductoServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductoServicioService]
    });
  });

  it('should ...', inject([ProductoServicioService], (service: ProductoServicioService) => {
    expect(service).toBeTruthy();
  }));
});
