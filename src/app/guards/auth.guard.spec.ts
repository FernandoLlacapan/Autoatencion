import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';

      it('should be created', () => {
        const guard = TestBed.inject(AuthGuard);
        expect(guard).toBeTruthy();
      });
