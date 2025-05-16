import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateBookInput {
  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  author?: string;

  @Field(() => Float, { nullable: true })
  @IsNotEmpty()
  @IsOptional()
  price?: number;
}
