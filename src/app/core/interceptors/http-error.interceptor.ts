// src/app/core/interceptors/http-error.interceptor.ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe({
    error: (err: HttpErrorResponse) => {
      console.error('HTTP error:', err.status, err.message);
      throw err;
    }
  } as any);
};
