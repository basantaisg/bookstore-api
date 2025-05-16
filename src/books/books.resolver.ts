import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './models/book.model';
import { Books } from './interfaces/books.interface';
import { CreateBookInput } from './dtos/create-book.input';
import { UpdateBookInput } from './dtos/update-book.input';

@Resolver()
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query(() => [Book])
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Query(() => Book)
  getBookById(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.getBookById(id);
  }

  @Mutation(() => Book)
  createBook(@Args('input') input: CreateBookInput) {
    return this.bookService.createBook(input);
  }

  @Mutation(() => Book)
  updateBook(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateBookInput,
  ) {
    return this.bookService.updateBook(id, input);
  }

  @Mutation(() => Book)
  deleteBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.deleteBook(id);
  }
}
