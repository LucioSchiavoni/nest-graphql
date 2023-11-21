import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { WinsService } from './wins.service';
import { Win } from './entities/win.entity';
import { CreateWinInput } from './dto/create-win.input';
import { UpdateWinInput } from './dto/update-win.input';
import { User } from 'src/user/user.entity';

@Resolver(() => Win)
export class WinsResolver {
  constructor(private readonly winsService: WinsService) {}

  @Mutation(() => Win)
  createWin(@Args('createWinInput') createWinInput: CreateWinInput) {
    return this.winsService.create(createWinInput);
  }

  @Query(() => [Win], { name: 'wins' })
  findAll() {
    return this.winsService.findAll();
  }

  @ResolveField( (returns) => User)
  user(@Parent() win: Win): Promise<User>{
    return this.winsService.getUser(win.userId)
  }

  @Query(() => Win, { name: 'win' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.winsService.findOne(id);
  }

  @Mutation(() => Win)
  updateWin(@Args('updateWinInput') updateWinInput: UpdateWinInput) {
    return this.winsService.update(updateWinInput.id, updateWinInput);
  }

  @Mutation(() => Win)
  removeWin(@Args('id', { type: () => Int }) id: number) {
    return this.winsService.remove(id);
  }
}
