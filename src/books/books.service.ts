import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookInput } from './dtos/create-book.input';
import { UpdateBookInput } from './dtos/update-book.input';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookInput) {
    return await this.prisma.book.create({ data });
  }

  async getAllBooks() {
    return await this.prisma.book.findMany({});
  }

  async getBookById(id: number) {
    return await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async updateBook(id: number, data: UpdateBookInput) {
    return await this.prisma.book.update({ where: { id }, data });
  }

  async deleteBook(id: number) {
    return await this.prisma.book.delete({ where: { id } });
  }
}
