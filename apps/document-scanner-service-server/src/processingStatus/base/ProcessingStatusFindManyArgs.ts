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
import { ProcessingStatusWhereInput } from "./ProcessingStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProcessingStatusOrderByInput } from "./ProcessingStatusOrderByInput";

@ArgsType()
class ProcessingStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProcessingStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProcessingStatusWhereInput, { nullable: true })
  @Type(() => ProcessingStatusWhereInput)
  where?: ProcessingStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [ProcessingStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProcessingStatusOrderByInput], { nullable: true })
  @Type(() => ProcessingStatusOrderByInput)
  orderBy?: Array<ProcessingStatusOrderByInput>;

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

export { ProcessingStatusFindManyArgs as ProcessingStatusFindManyArgs };
