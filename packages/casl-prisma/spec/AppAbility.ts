import { PureAbility } from '@casl/ability'
import { User, Post } from '@prisma/client'
import { PrismaQuery, Subjects } from '../src'

export type AppAbility = PureAbility<[string, 'all' | Subjects<{
  User: User,
  Post: Post
}>], PrismaQuery>
