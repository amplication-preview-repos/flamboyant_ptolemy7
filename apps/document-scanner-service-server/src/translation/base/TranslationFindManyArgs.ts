/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TranslationWhereInput } from "./TranslationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TranslationOrderByInput } from "./TranslationOrderByInput";

@ArgsType()
class TranslationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TranslationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TranslationWhereInput, { nullable: true })
  @Type(() => TranslationWhereInput)
  where?: TranslationWhereInput;

  @ApiProperty({
    required: false,
    type: [TranslationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TranslationOrderByInput], { nullable: true })
  @Type(() => TranslationOrderByInput)
  orderBy?: Array<TranslationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TranslationFindManyArgs as TranslationFindManyArgs };
