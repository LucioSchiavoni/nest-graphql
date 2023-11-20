import { CreateWinInput } from './create-win.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWinInput extends PartialType(CreateWinInput) {
  @Field(() => Int)
  id: number;
}
