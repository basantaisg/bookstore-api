import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [BooksResolver, BooksService, PrismaService],
})
export class BooksModule {}
