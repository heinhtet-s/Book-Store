// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor() {}

  use(req: any, res: any, next: () => void) {
    // Check if the user has the necessary role to access this route
    if (req.user && req.user.roles.some((role) => role.name === 'admin')) {
      return next();
    }
    // Unauthorized
    return res.status(403).json({ message: 'Forbidden' });
  }
}
