import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authGuard } from './auth.guard';

      it('should be created', () => {
        const guard = TestBed.inject(authGuard);
        expect(guard).toBeTruthy();
      });
