import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '@syntaxly/prisma';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
