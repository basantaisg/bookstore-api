import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field(() => Float)
  price: number;
}
