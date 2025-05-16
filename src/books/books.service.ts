import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookInput } from './dtos/create-book.input';
import { UpdateBookInput } from './dtos/update-book.input';
import { Books } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: CreateBookInput) {
    await this.prisma.book.create({ data });
  }

  async getAllBooks() {
    await this.prisma.book.findMany({});
  }

  async getBookById(id: number) {
    await this.prisma.book.findUnique({
      where: { id },
    });
  }

  async updateBook(id: number, data: UpdateBookInput) {
    await this.prisma.book.update({ where: { id }, data });
  }

  async deleteBook(id: number) {
    await this.prisma.book.delete({ where: { id } });
  }
}
