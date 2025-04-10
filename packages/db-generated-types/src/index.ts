import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    xp = "xp",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TopicScalarFieldEnum {
    id = "id",
    title = "title",
    languageId = "languageId",
    createdAt = "createdAt"
}

export enum TaskScalarFieldEnum {
    id = "id",
    lessonId = "lessonId",
    type = "type",
    prompt = "prompt",
    options = "options",
    answer = "answer",
    order = "order"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum TaskType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
    WRITE_CODE = "WRITE_CODE"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum LessonProgressScalarFieldEnum {
    id = "id",
    userId = "userId",
    lessonId = "lessonId",
    completed = "completed",
    completedAt = "completedAt"
}

export enum LessonScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    topicId = "topicId",
    createdAt = "createdAt"
}

export enum LanguageScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt"
}

registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
registerEnumType(LessonScalarFieldEnum, { name: 'LessonScalarFieldEnum', description: undefined })
registerEnumType(LessonProgressScalarFieldEnum, { name: 'LessonProgressScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TaskType, { name: 'TaskType', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })
registerEnumType(TopicScalarFieldEnum, { name: 'TopicScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateLanguage {
    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregate>;
    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregate>;
    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregate>;
}

@ArgsType()
export class CreateManyLanguageArgs {
    @Field(() => [LanguageCreateManyInput], {nullable:false})
    @Type(() => LanguageCreateManyInput)
    @ValidateNested()
    data!: Array<LanguageCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLanguageArgs {
    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof LanguageCreateInput>;
}

@ArgsType()
export class DeleteManyLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstLanguageOrThrowArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LanguageScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LanguageScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyLanguageArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LanguageScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LanguageScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueLanguageOrThrowArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class LanguageAggregateArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithRelationInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregateInput>;
    @Field(() => LanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregateInput>;
    @Field(() => LanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregateInput>;
}

@InputType()
export class LanguageCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LanguageCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LanguageCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@ObjectType()
export class LanguageCount {
    @Field(() => Int, {nullable:false})
    topics?: number;
}

@InputType()
export class LanguageCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageCreateNestedOneWithoutTopicsInput {
    @Field(() => LanguageCreateWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageCreateWithoutTopicsInput)
    create?: InstanceType<typeof LanguageCreateWithoutTopicsInput>;
    @Field(() => LanguageCreateOrConnectWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutTopicsInput)
    connectOrCreate?: InstanceType<typeof LanguageCreateOrConnectWithoutTopicsInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
}

@InputType()
export class LanguageCreateOrConnectWithoutTopicsInput {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => LanguageCreateWithoutTopicsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTopicsInput)
    create!: InstanceType<typeof LanguageCreateWithoutTopicsInput>;
}

@InputType()
export class LanguageCreateWithoutTopicsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicCreateNestedManyWithoutLanguageInput, {nullable:true})
    topics?: InstanceType<typeof TopicCreateNestedManyWithoutLanguageInput>;
}

@ArgsType()
export class LanguageGroupByArgs {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => [LanguageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LanguageOrderByWithAggregationInput>;
    @Field(() => [LanguageScalarFieldEnum], {nullable:false})
    by!: Array<`${LanguageScalarFieldEnum}`>;
    @Field(() => LanguageScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LanguageScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LanguageCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregateInput>;
    @Field(() => LanguageMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregateInput>;
    @Field(() => LanguageMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregateInput>;
}

@ObjectType()
export class LanguageGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => LanguageCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LanguageCountAggregate>;
    @Field(() => LanguageMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LanguageMinAggregate>;
    @Field(() => LanguageMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxAggregate>;
}

@InputType()
export class LanguageMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class LanguageMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class LanguageMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class LanguageMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class LanguageOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => LanguageCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LanguageCountOrderByAggregateInput>;
    @Field(() => LanguageMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LanguageMaxOrderByAggregateInput>;
    @Field(() => LanguageMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LanguageMinOrderByAggregateInput>;
}

@InputType()
export class LanguageOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => TopicOrderByRelationAggregateInput, {nullable:true})
    topics?: InstanceType<typeof TopicOrderByRelationAggregateInput>;
}

@InputType()
export class LanguageScalarRelationFilter {
    @Field(() => LanguageWhereInput, {nullable:true})
    is?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => LanguageWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LanguageWhereInput>;
}

@InputType()
export class LanguageScalarWhereWithAggregatesInput {
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => [LanguageScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguageScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LanguageUncheckedCreateWithoutTopicsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    topics?: InstanceType<typeof TopicUncheckedCreateNestedManyWithoutLanguageInput>;
}

@InputType()
export class LanguageUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageUncheckedUpdateWithoutTopicsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    topics?: InstanceType<typeof TopicUncheckedUpdateManyWithoutLanguageNestedInput>;
}

@InputType()
export class LanguageUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageUpdateOneRequiredWithoutTopicsNestedInput {
    @Field(() => LanguageCreateWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageCreateWithoutTopicsInput)
    create?: InstanceType<typeof LanguageCreateWithoutTopicsInput>;
    @Field(() => LanguageCreateOrConnectWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageCreateOrConnectWithoutTopicsInput)
    connectOrCreate?: InstanceType<typeof LanguageCreateOrConnectWithoutTopicsInput>;
    @Field(() => LanguageUpsertWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageUpsertWithoutTopicsInput)
    upsert?: InstanceType<typeof LanguageUpsertWithoutTopicsInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:true})
    @Type(() => LanguageWhereUniqueInput)
    connect?: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => LanguageUpdateToOneWithWhereWithoutTopicsInput, {nullable:true})
    @Type(() => LanguageUpdateToOneWithWhereWithoutTopicsInput)
    update?: InstanceType<typeof LanguageUpdateToOneWithWhereWithoutTopicsInput>;
}

@InputType()
export class LanguageUpdateToOneWithWhereWithoutTopicsInput {
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => LanguageUpdateWithoutTopicsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutTopicsInput)
    data!: InstanceType<typeof LanguageUpdateWithoutTopicsInput>;
}

@InputType()
export class LanguageUpdateWithoutTopicsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LanguageUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUpdateManyWithoutLanguageNestedInput, {nullable:true})
    topics?: InstanceType<typeof TopicUpdateManyWithoutLanguageNestedInput>;
}

@InputType()
export class LanguageUpsertWithoutTopicsInput {
    @Field(() => LanguageUpdateWithoutTopicsInput, {nullable:false})
    @Type(() => LanguageUpdateWithoutTopicsInput)
    update!: InstanceType<typeof LanguageUpdateWithoutTopicsInput>;
    @Field(() => LanguageCreateWithoutTopicsInput, {nullable:false})
    @Type(() => LanguageCreateWithoutTopicsInput)
    create!: InstanceType<typeof LanguageCreateWithoutTopicsInput>;
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    where?: InstanceType<typeof LanguageWhereInput>;
}

@InputType()
export class LanguageWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TopicListRelationFilter, {nullable:true})
    topics?: InstanceType<typeof TopicListRelationFilter>;
}

@InputType()
export class LanguageWhereInput {
    @Field(() => [LanguageWhereInput], {nullable:true})
    AND?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    OR?: Array<LanguageWhereInput>;
    @Field(() => [LanguageWhereInput], {nullable:true})
    NOT?: Array<LanguageWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TopicListRelationFilter, {nullable:true})
    topics?: InstanceType<typeof TopicListRelationFilter>;
}

@ObjectType()
export class Language {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => [Topic], {nullable:true})
    topics?: Array<Topic>;
    @Field(() => LanguageCount, {nullable:false})
    _count?: InstanceType<typeof LanguageCount>;
}

@ArgsType()
export class UpdateManyLanguageArgs {
    @Field(() => LanguageUpdateManyMutationInput, {nullable:false})
    @Type(() => LanguageUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof LanguageUpdateManyMutationInput>;
    @Field(() => LanguageWhereInput, {nullable:true})
    @Type(() => LanguageWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LanguageWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneLanguageArgs {
    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof LanguageUpdateInput>;
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneLanguageArgs {
    @Field(() => LanguageWhereUniqueInput, {nullable:false})
    @Type(() => LanguageWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LanguageWhereUniqueInput, 'id' | 'name'>;
    @Field(() => LanguageCreateInput, {nullable:false})
    @Type(() => LanguageCreateInput)
    create!: InstanceType<typeof LanguageCreateInput>;
    @Field(() => LanguageUpdateInput, {nullable:false})
    @Type(() => LanguageUpdateInput)
    update!: InstanceType<typeof LanguageUpdateInput>;
}

@ObjectType()
export class AggregateLesson {
    @Field(() => LessonCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LessonCountAggregate>;
    @Field(() => LessonMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LessonMinAggregate>;
    @Field(() => LessonMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LessonMaxAggregate>;
}

@ArgsType()
export class CreateManyLessonArgs {
    @Field(() => [LessonCreateManyInput], {nullable:false})
    @Type(() => LessonCreateManyInput)
    @ValidateNested()
    data!: Array<LessonCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLessonArgs {
    @Field(() => LessonCreateInput, {nullable:false})
    @Type(() => LessonCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonCreateInput>;
}

@ArgsType()
export class DeleteManyLessonArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneLessonArgs {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstLessonOrThrowArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => [LessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonOrderByWithRelationInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstLessonArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => [LessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonOrderByWithRelationInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyLessonArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => [LessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonOrderByWithRelationInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueLessonOrThrowArgs {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueLessonArgs {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@ArgsType()
export class LessonAggregateArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => [LessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonOrderByWithRelationInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LessonCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonCountAggregateInput>;
    @Field(() => LessonMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonMinAggregateInput>;
    @Field(() => LessonMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonMaxAggregateInput>;
}

@InputType()
export class LessonCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    topicId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LessonCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    topicId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LessonCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    topicId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@ObjectType()
export class LessonCount {
    @Field(() => Int, {nullable:false})
    tasks?: number;
    @Field(() => Int, {nullable:false})
    progress?: number;
}

@InputType()
export class LessonCreateManyTopicInputEnvelope {
    @Field(() => [LessonCreateManyTopicInput], {nullable:false})
    @Type(() => LessonCreateManyTopicInput)
    data!: Array<LessonCreateManyTopicInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LessonCreateManyTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonCreateNestedManyWithoutTopicInput {
    @Field(() => [LessonCreateWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateWithoutTopicInput)
    create?: Array<LessonCreateWithoutTopicInput>;
    @Field(() => [LessonCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<LessonCreateOrConnectWithoutTopicInput>;
    @Field(() => LessonCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => LessonCreateManyTopicInputEnvelope)
    createMany?: InstanceType<typeof LessonCreateManyTopicInputEnvelope>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonCreateNestedOneWithoutProgressInput {
    @Field(() => LessonCreateWithoutProgressInput, {nullable:true})
    @Type(() => LessonCreateWithoutProgressInput)
    create?: InstanceType<typeof LessonCreateWithoutProgressInput>;
    @Field(() => LessonCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutProgressInput)
    connectOrCreate?: InstanceType<typeof LessonCreateOrConnectWithoutProgressInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@InputType()
export class LessonCreateNestedOneWithoutTasksInput {
    @Field(() => LessonCreateWithoutTasksInput, {nullable:true})
    @Type(() => LessonCreateWithoutTasksInput)
    create?: InstanceType<typeof LessonCreateWithoutTasksInput>;
    @Field(() => LessonCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTasksInput)
    connectOrCreate?: InstanceType<typeof LessonCreateOrConnectWithoutTasksInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@InputType()
export class LessonCreateOrConnectWithoutProgressInput {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonCreateWithoutProgressInput, {nullable:false})
    @Type(() => LessonCreateWithoutProgressInput)
    create!: InstanceType<typeof LessonCreateWithoutProgressInput>;
}

@InputType()
export class LessonCreateOrConnectWithoutTasksInput {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonCreateWithoutTasksInput, {nullable:false})
    @Type(() => LessonCreateWithoutTasksInput)
    create!: InstanceType<typeof LessonCreateWithoutTasksInput>;
}

@InputType()
export class LessonCreateOrConnectWithoutTopicInput {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonCreateWithoutTopicInput, {nullable:false})
    @Type(() => LessonCreateWithoutTopicInput)
    create!: InstanceType<typeof LessonCreateWithoutTopicInput>;
}

@InputType()
export class LessonCreateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicCreateNestedOneWithoutLessonsInput, {nullable:false})
    topic!: InstanceType<typeof TopicCreateNestedOneWithoutLessonsInput>;
    @Field(() => TaskCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonCreateWithoutTasksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicCreateNestedOneWithoutLessonsInput, {nullable:false})
    topic!: InstanceType<typeof TopicCreateNestedOneWithoutLessonsInput>;
    @Field(() => LessonProgressCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonCreateWithoutTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskCreateNestedManyWithoutLessonInput>;
    @Field(() => LessonProgressCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicCreateNestedOneWithoutLessonsInput, {nullable:false})
    topic!: InstanceType<typeof TopicCreateNestedOneWithoutLessonsInput>;
    @Field(() => TaskCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskCreateNestedManyWithoutLessonInput>;
    @Field(() => LessonProgressCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressCreateNestedManyWithoutLessonInput>;
}

@ArgsType()
export class LessonGroupByArgs {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => [LessonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LessonOrderByWithAggregationInput>;
    @Field(() => [LessonScalarFieldEnum], {nullable:false})
    by!: Array<`${LessonScalarFieldEnum}`>;
    @Field(() => LessonScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LessonScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LessonCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonCountAggregateInput>;
    @Field(() => LessonMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonMinAggregateInput>;
    @Field(() => LessonMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonMaxAggregateInput>;
}

@ObjectType()
export class LessonGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => LessonCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LessonCountAggregate>;
    @Field(() => LessonMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LessonMinAggregate>;
    @Field(() => LessonMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LessonMaxAggregate>;
}

@InputType()
export class LessonListRelationFilter {
    @Field(() => LessonWhereInput, {nullable:true})
    every?: InstanceType<typeof LessonWhereInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    some?: InstanceType<typeof LessonWhereInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    none?: InstanceType<typeof LessonWhereInput>;
}

@InputType()
export class LessonMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    topicId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class LessonMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    topicId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class LessonMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    topicId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class LessonMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    topicId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class LessonOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class LessonOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    topicId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => LessonCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonCountOrderByAggregateInput>;
    @Field(() => LessonMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonMaxOrderByAggregateInput>;
    @Field(() => LessonMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonMinOrderByAggregateInput>;
}

@InputType()
export class LessonOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    topicId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => TopicOrderByWithRelationInput, {nullable:true})
    topic?: InstanceType<typeof TopicOrderByWithRelationInput>;
    @Field(() => TaskOrderByRelationAggregateInput, {nullable:true})
    tasks?: InstanceType<typeof TaskOrderByRelationAggregateInput>;
    @Field(() => LessonProgressOrderByRelationAggregateInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressOrderByRelationAggregateInput>;
}

@InputType()
export class LessonScalarRelationFilter {
    @Field(() => LessonWhereInput, {nullable:true})
    is?: InstanceType<typeof LessonWhereInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    isNot?: InstanceType<typeof LessonWhereInput>;
}

@InputType()
export class LessonScalarWhereWithAggregatesInput {
    @Field(() => [LessonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LessonScalarWhereWithAggregatesInput>;
    @Field(() => [LessonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LessonScalarWhereWithAggregatesInput>;
    @Field(() => [LessonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LessonScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    topicId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LessonScalarWhereInput {
    @Field(() => [LessonScalarWhereInput], {nullable:true})
    AND?: Array<LessonScalarWhereInput>;
    @Field(() => [LessonScalarWhereInput], {nullable:true})
    OR?: Array<LessonScalarWhereInput>;
    @Field(() => [LessonScalarWhereInput], {nullable:true})
    NOT?: Array<LessonScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    topicId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class LessonUncheckedCreateNestedManyWithoutTopicInput {
    @Field(() => [LessonCreateWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateWithoutTopicInput)
    create?: Array<LessonCreateWithoutTopicInput>;
    @Field(() => [LessonCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<LessonCreateOrConnectWithoutTopicInput>;
    @Field(() => LessonCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => LessonCreateManyTopicInputEnvelope)
    createMany?: InstanceType<typeof LessonCreateManyTopicInputEnvelope>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonUncheckedCreateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonUncheckedCreateWithoutTasksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonProgressUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonUncheckedCreateWithoutTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedCreateNestedManyWithoutLessonInput>;
    @Field(() => LessonProgressUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedCreateNestedManyWithoutLessonInput>;
    @Field(() => LessonProgressUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedCreateNestedManyWithoutLessonInput>;
}

@InputType()
export class LessonUncheckedUpdateManyWithoutTopicNestedInput {
    @Field(() => [LessonCreateWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateWithoutTopicInput)
    create?: Array<LessonCreateWithoutTopicInput>;
    @Field(() => [LessonCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<LessonCreateOrConnectWithoutTopicInput>;
    @Field(() => [LessonUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<LessonUpsertWithWhereUniqueWithoutTopicInput>;
    @Field(() => LessonCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => LessonCreateManyTopicInputEnvelope)
    createMany?: InstanceType<typeof LessonCreateManyTopicInputEnvelope>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<LessonUpdateWithWhereUniqueWithoutTopicInput>;
    @Field(() => [LessonUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<LessonUpdateManyWithWhereWithoutTopicInput>;
    @Field(() => [LessonScalarWhereInput], {nullable:true})
    @Type(() => LessonScalarWhereInput)
    deleteMany?: Array<LessonScalarWhereInput>;
}

@InputType()
export class LessonUncheckedUpdateManyWithoutTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonUncheckedUpdateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUncheckedUpdateWithoutTasksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonProgressUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUncheckedUpdateWithoutTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutLessonNestedInput>;
    @Field(() => LessonProgressUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => String, {nullable:true})
    topicId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUncheckedUpdateManyWithoutLessonNestedInput>;
    @Field(() => LessonProgressUncheckedUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class LessonUpdateManyWithWhereWithoutTopicInput {
    @Field(() => LessonScalarWhereInput, {nullable:false})
    @Type(() => LessonScalarWhereInput)
    where!: InstanceType<typeof LessonScalarWhereInput>;
    @Field(() => LessonUpdateManyMutationInput, {nullable:false})
    @Type(() => LessonUpdateManyMutationInput)
    data!: InstanceType<typeof LessonUpdateManyMutationInput>;
}

@InputType()
export class LessonUpdateManyWithoutTopicNestedInput {
    @Field(() => [LessonCreateWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateWithoutTopicInput)
    create?: Array<LessonCreateWithoutTopicInput>;
    @Field(() => [LessonCreateOrConnectWithoutTopicInput], {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTopicInput)
    connectOrCreate?: Array<LessonCreateOrConnectWithoutTopicInput>;
    @Field(() => [LessonUpsertWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpsertWithWhereUniqueWithoutTopicInput)
    upsert?: Array<LessonUpsertWithWhereUniqueWithoutTopicInput>;
    @Field(() => LessonCreateManyTopicInputEnvelope, {nullable:true})
    @Type(() => LessonCreateManyTopicInputEnvelope)
    createMany?: InstanceType<typeof LessonCreateManyTopicInputEnvelope>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonWhereUniqueInput], {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonWhereUniqueInput, 'id'>>;
    @Field(() => [LessonUpdateWithWhereUniqueWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpdateWithWhereUniqueWithoutTopicInput)
    update?: Array<LessonUpdateWithWhereUniqueWithoutTopicInput>;
    @Field(() => [LessonUpdateManyWithWhereWithoutTopicInput], {nullable:true})
    @Type(() => LessonUpdateManyWithWhereWithoutTopicInput)
    updateMany?: Array<LessonUpdateManyWithWhereWithoutTopicInput>;
    @Field(() => [LessonScalarWhereInput], {nullable:true})
    @Type(() => LessonScalarWhereInput)
    deleteMany?: Array<LessonScalarWhereInput>;
}

@InputType()
export class LessonUpdateOneRequiredWithoutProgressNestedInput {
    @Field(() => LessonCreateWithoutProgressInput, {nullable:true})
    @Type(() => LessonCreateWithoutProgressInput)
    create?: InstanceType<typeof LessonCreateWithoutProgressInput>;
    @Field(() => LessonCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutProgressInput)
    connectOrCreate?: InstanceType<typeof LessonCreateOrConnectWithoutProgressInput>;
    @Field(() => LessonUpsertWithoutProgressInput, {nullable:true})
    @Type(() => LessonUpsertWithoutProgressInput)
    upsert?: InstanceType<typeof LessonUpsertWithoutProgressInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonUpdateToOneWithWhereWithoutProgressInput, {nullable:true})
    @Type(() => LessonUpdateToOneWithWhereWithoutProgressInput)
    update?: InstanceType<typeof LessonUpdateToOneWithWhereWithoutProgressInput>;
}

@InputType()
export class LessonUpdateOneRequiredWithoutTasksNestedInput {
    @Field(() => LessonCreateWithoutTasksInput, {nullable:true})
    @Type(() => LessonCreateWithoutTasksInput)
    create?: InstanceType<typeof LessonCreateWithoutTasksInput>;
    @Field(() => LessonCreateOrConnectWithoutTasksInput, {nullable:true})
    @Type(() => LessonCreateOrConnectWithoutTasksInput)
    connectOrCreate?: InstanceType<typeof LessonCreateOrConnectWithoutTasksInput>;
    @Field(() => LessonUpsertWithoutTasksInput, {nullable:true})
    @Type(() => LessonUpsertWithoutTasksInput)
    upsert?: InstanceType<typeof LessonUpsertWithoutTasksInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:true})
    @Type(() => LessonWhereUniqueInput)
    connect?: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonUpdateToOneWithWhereWithoutTasksInput, {nullable:true})
    @Type(() => LessonUpdateToOneWithWhereWithoutTasksInput)
    update?: InstanceType<typeof LessonUpdateToOneWithWhereWithoutTasksInput>;
}

@InputType()
export class LessonUpdateToOneWithWhereWithoutProgressInput {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => LessonUpdateWithoutProgressInput, {nullable:false})
    @Type(() => LessonUpdateWithoutProgressInput)
    data!: InstanceType<typeof LessonUpdateWithoutProgressInput>;
}

@InputType()
export class LessonUpdateToOneWithWhereWithoutTasksInput {
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => LessonUpdateWithoutTasksInput, {nullable:false})
    @Type(() => LessonUpdateWithoutTasksInput)
    data!: InstanceType<typeof LessonUpdateWithoutTasksInput>;
}

@InputType()
export class LessonUpdateWithWhereUniqueWithoutTopicInput {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonUpdateWithoutTopicInput, {nullable:false})
    @Type(() => LessonUpdateWithoutTopicInput)
    data!: InstanceType<typeof LessonUpdateWithoutTopicInput>;
}

@InputType()
export class LessonUpdateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUpdateOneRequiredWithoutLessonsNestedInput, {nullable:true})
    topic?: InstanceType<typeof TopicUpdateOneRequiredWithoutLessonsNestedInput>;
    @Field(() => TaskUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUpdateWithoutTasksInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUpdateOneRequiredWithoutLessonsNestedInput, {nullable:true})
    topic?: InstanceType<typeof TopicUpdateOneRequiredWithoutLessonsNestedInput>;
    @Field(() => LessonProgressUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUpdateWithoutTopicInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TaskUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUpdateManyWithoutLessonNestedInput>;
    @Field(() => LessonProgressUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => TopicUpdateOneRequiredWithoutLessonsNestedInput, {nullable:true})
    topic?: InstanceType<typeof TopicUpdateOneRequiredWithoutLessonsNestedInput>;
    @Field(() => TaskUpdateManyWithoutLessonNestedInput, {nullable:true})
    tasks?: InstanceType<typeof TaskUpdateManyWithoutLessonNestedInput>;
    @Field(() => LessonProgressUpdateManyWithoutLessonNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUpdateManyWithoutLessonNestedInput>;
}

@InputType()
export class LessonUpsertWithWhereUniqueWithoutTopicInput {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonUpdateWithoutTopicInput, {nullable:false})
    @Type(() => LessonUpdateWithoutTopicInput)
    update!: InstanceType<typeof LessonUpdateWithoutTopicInput>;
    @Field(() => LessonCreateWithoutTopicInput, {nullable:false})
    @Type(() => LessonCreateWithoutTopicInput)
    create!: InstanceType<typeof LessonCreateWithoutTopicInput>;
}

@InputType()
export class LessonUpsertWithoutProgressInput {
    @Field(() => LessonUpdateWithoutProgressInput, {nullable:false})
    @Type(() => LessonUpdateWithoutProgressInput)
    update!: InstanceType<typeof LessonUpdateWithoutProgressInput>;
    @Field(() => LessonCreateWithoutProgressInput, {nullable:false})
    @Type(() => LessonCreateWithoutProgressInput)
    create!: InstanceType<typeof LessonCreateWithoutProgressInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    where?: InstanceType<typeof LessonWhereInput>;
}

@InputType()
export class LessonUpsertWithoutTasksInput {
    @Field(() => LessonUpdateWithoutTasksInput, {nullable:false})
    @Type(() => LessonUpdateWithoutTasksInput)
    update!: InstanceType<typeof LessonUpdateWithoutTasksInput>;
    @Field(() => LessonCreateWithoutTasksInput, {nullable:false})
    @Type(() => LessonCreateWithoutTasksInput)
    create!: InstanceType<typeof LessonCreateWithoutTasksInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    where?: InstanceType<typeof LessonWhereInput>;
}

@InputType()
export class LessonWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [LessonWhereInput], {nullable:true})
    AND?: Array<LessonWhereInput>;
    @Field(() => [LessonWhereInput], {nullable:true})
    OR?: Array<LessonWhereInput>;
    @Field(() => [LessonWhereInput], {nullable:true})
    NOT?: Array<LessonWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    topicId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TopicScalarRelationFilter, {nullable:true})
    topic?: InstanceType<typeof TopicScalarRelationFilter>;
    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: InstanceType<typeof TaskListRelationFilter>;
    @Field(() => LessonProgressListRelationFilter, {nullable:true})
    progress?: InstanceType<typeof LessonProgressListRelationFilter>;
}

@InputType()
export class LessonWhereInput {
    @Field(() => [LessonWhereInput], {nullable:true})
    AND?: Array<LessonWhereInput>;
    @Field(() => [LessonWhereInput], {nullable:true})
    OR?: Array<LessonWhereInput>;
    @Field(() => [LessonWhereInput], {nullable:true})
    NOT?: Array<LessonWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    topicId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => TopicScalarRelationFilter, {nullable:true})
    topic?: InstanceType<typeof TopicScalarRelationFilter>;
    @Field(() => TaskListRelationFilter, {nullable:true})
    tasks?: InstanceType<typeof TaskListRelationFilter>;
    @Field(() => LessonProgressListRelationFilter, {nullable:true})
    progress?: InstanceType<typeof LessonProgressListRelationFilter>;
}

@ObjectType()
export class Lesson {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => String, {nullable:false})
    topicId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Topic, {nullable:false})
    topic?: InstanceType<typeof Topic>;
    @Field(() => [Task], {nullable:true})
    tasks?: Array<Task>;
    @Field(() => [LessonProgress], {nullable:true})
    progress?: Array<LessonProgress>;
    @Field(() => LessonCount, {nullable:false})
    _count?: InstanceType<typeof LessonCount>;
}

@ArgsType()
export class UpdateManyLessonArgs {
    @Field(() => LessonUpdateManyMutationInput, {nullable:false})
    @Type(() => LessonUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonUpdateManyMutationInput>;
    @Field(() => LessonWhereInput, {nullable:true})
    @Type(() => LessonWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneLessonArgs {
    @Field(() => LessonUpdateInput, {nullable:false})
    @Type(() => LessonUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonUpdateInput>;
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneLessonArgs {
    @Field(() => LessonWhereUniqueInput, {nullable:false})
    @Type(() => LessonWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonWhereUniqueInput, 'id'>;
    @Field(() => LessonCreateInput, {nullable:false})
    @Type(() => LessonCreateInput)
    create!: InstanceType<typeof LessonCreateInput>;
    @Field(() => LessonUpdateInput, {nullable:false})
    @Type(() => LessonUpdateInput)
    update!: InstanceType<typeof LessonUpdateInput>;
}

@ObjectType()
export class AggregateLessonProgress {
    @Field(() => LessonProgressCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LessonProgressCountAggregate>;
    @Field(() => LessonProgressMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LessonProgressMinAggregate>;
    @Field(() => LessonProgressMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LessonProgressMaxAggregate>;
}

@ArgsType()
export class CreateManyLessonProgressArgs {
    @Field(() => [LessonProgressCreateManyInput], {nullable:false})
    @Type(() => LessonProgressCreateManyInput)
    @ValidateNested()
    data!: Array<LessonProgressCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneLessonProgressArgs {
    @Field(() => LessonProgressCreateInput, {nullable:false})
    @Type(() => LessonProgressCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonProgressCreateInput>;
}

@ArgsType()
export class DeleteManyLessonProgressArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneLessonProgressArgs {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstLessonProgressOrThrowArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => [LessonProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonProgressOrderByWithRelationInput>;
    @Field(() => LessonProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstLessonProgressArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => [LessonProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonProgressOrderByWithRelationInput>;
    @Field(() => LessonProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyLessonProgressArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => [LessonProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonProgressOrderByWithRelationInput>;
    @Field(() => LessonProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [LessonProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LessonProgressScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueLessonProgressOrThrowArgs {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueLessonProgressArgs {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
}

@ArgsType()
export class LessonProgressAggregateArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => [LessonProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LessonProgressOrderByWithRelationInput>;
    @Field(() => LessonProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LessonProgressCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonProgressCountAggregateInput>;
    @Field(() => LessonProgressMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonProgressMinAggregateInput>;
    @Field(() => LessonProgressMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonProgressMaxAggregateInput>;
}

@InputType()
export class LessonProgressCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    completedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class LessonProgressCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    lessonId!: number;
    @Field(() => Int, {nullable:false})
    completed!: number;
    @Field(() => Int, {nullable:false})
    completedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class LessonProgressCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completedAt?: `${SortOrder}`;
}

@InputType()
export class LessonProgressCreateManyLessonInputEnvelope {
    @Field(() => [LessonProgressCreateManyLessonInput], {nullable:false})
    @Type(() => LessonProgressCreateManyLessonInput)
    data!: Array<LessonProgressCreateManyLessonInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LessonProgressCreateManyLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressCreateManyUserInputEnvelope {
    @Field(() => [LessonProgressCreateManyUserInput], {nullable:false})
    @Type(() => LessonProgressCreateManyUserInput)
    data!: Array<LessonProgressCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class LessonProgressCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressCreateNestedManyWithoutLessonInput {
    @Field(() => [LessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create?: Array<LessonProgressCreateWithoutLessonInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutLessonInput>;
    @Field(() => LessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyLessonInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonProgressCreateNestedManyWithoutUserInput {
    @Field(() => [LessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create?: Array<LessonProgressCreateWithoutUserInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutUserInput>;
    @Field(() => LessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyUserInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonProgressCreateOrConnectWithoutLessonInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressCreateWithoutLessonInput, {nullable:false})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create!: InstanceType<typeof LessonProgressCreateWithoutLessonInput>;
}

@InputType()
export class LessonProgressCreateOrConnectWithoutUserInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressCreateWithoutUserInput, {nullable:false})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create!: InstanceType<typeof LessonProgressCreateWithoutUserInput>;
}

@InputType()
export class LessonProgressCreateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProgressInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutProgressInput>;
}

@InputType()
export class LessonProgressCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => LessonCreateNestedOneWithoutProgressInput, {nullable:false})
    lesson!: InstanceType<typeof LessonCreateNestedOneWithoutProgressInput>;
}

@InputType()
export class LessonProgressCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutProgressInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutProgressInput>;
    @Field(() => LessonCreateNestedOneWithoutProgressInput, {nullable:false})
    lesson!: InstanceType<typeof LessonCreateNestedOneWithoutProgressInput>;
}

@ArgsType()
export class LessonProgressGroupByArgs {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => [LessonProgressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LessonProgressOrderByWithAggregationInput>;
    @Field(() => [LessonProgressScalarFieldEnum], {nullable:false})
    by!: Array<`${LessonProgressScalarFieldEnum}`>;
    @Field(() => LessonProgressScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof LessonProgressScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => LessonProgressCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonProgressCountAggregateInput>;
    @Field(() => LessonProgressMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonProgressMinAggregateInput>;
    @Field(() => LessonProgressMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonProgressMaxAggregateInput>;
}

@ObjectType()
export class LessonProgressGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => LessonProgressCountAggregate, {nullable:true})
    _count?: InstanceType<typeof LessonProgressCountAggregate>;
    @Field(() => LessonProgressMinAggregate, {nullable:true})
    _min?: InstanceType<typeof LessonProgressMinAggregate>;
    @Field(() => LessonProgressMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof LessonProgressMaxAggregate>;
}

@InputType()
export class LessonProgressListRelationFilter {
    @Field(() => LessonProgressWhereInput, {nullable:true})
    every?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => LessonProgressWhereInput, {nullable:true})
    some?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => LessonProgressWhereInput, {nullable:true})
    none?: InstanceType<typeof LessonProgressWhereInput>;
}

@InputType()
export class LessonProgressMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    completedAt?: true;
}

@ObjectType()
export class LessonProgressMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completedAt?: `${SortOrder}`;
}

@InputType()
export class LessonProgressMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    completed?: true;
    @Field(() => Boolean, {nullable:true})
    completedAt?: true;
}

@ObjectType()
export class LessonProgressMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completedAt?: `${SortOrder}`;
}

@InputType()
export class LessonProgressOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class LessonProgressOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: InstanceType<typeof SortOrderInput>;
    @Field(() => LessonProgressCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof LessonProgressCountOrderByAggregateInput>;
    @Field(() => LessonProgressMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof LessonProgressMaxOrderByAggregateInput>;
    @Field(() => LessonProgressMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof LessonProgressMinOrderByAggregateInput>;
}

@InputType()
export class LessonProgressOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    completed?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => LessonOrderByWithRelationInput, {nullable:true})
    lesson?: InstanceType<typeof LessonOrderByWithRelationInput>;
}

@InputType()
export class LessonProgressScalarWhereWithAggregatesInput {
    @Field(() => [LessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LessonProgressScalarWhereWithAggregatesInput>;
    @Field(() => [LessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LessonProgressScalarWhereWithAggregatesInput>;
    @Field(() => [LessonProgressScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LessonProgressScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    completedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class LessonProgressScalarWhereInput {
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    AND?: Array<LessonProgressScalarWhereInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    OR?: Array<LessonProgressScalarWhereInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    NOT?: Array<LessonProgressScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    completedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class LessonProgressUncheckedCreateNestedManyWithoutLessonInput {
    @Field(() => [LessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create?: Array<LessonProgressCreateWithoutLessonInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutLessonInput>;
    @Field(() => LessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyLessonInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonProgressUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [LessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create?: Array<LessonProgressCreateWithoutUserInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutUserInput>;
    @Field(() => LessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyUserInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
}

@InputType()
export class LessonProgressUncheckedCreateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateManyWithoutLessonNestedInput {
    @Field(() => [LessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create?: Array<LessonProgressCreateWithoutLessonInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutLessonInput>;
    @Field(() => [LessonProgressUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<LessonProgressUpsertWithWhereUniqueWithoutLessonInput>;
    @Field(() => LessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyLessonInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<LessonProgressUpdateWithWhereUniqueWithoutLessonInput>;
    @Field(() => [LessonProgressUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<LessonProgressUpdateManyWithWhereWithoutLessonInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    @Type(() => LessonProgressScalarWhereInput)
    deleteMany?: Array<LessonProgressScalarWhereInput>;
}

@InputType()
export class LessonProgressUncheckedUpdateManyWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [LessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create?: Array<LessonProgressCreateWithoutUserInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutUserInput>;
    @Field(() => [LessonProgressUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LessonProgressUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyUserInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LessonProgressUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LessonProgressUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LessonProgressUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    @Type(() => LessonProgressScalarWhereInput)
    deleteMany?: Array<LessonProgressScalarWhereInput>;
}

@InputType()
export class LessonProgressUncheckedUpdateManyWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
}

@InputType()
export class LessonProgressUpdateManyWithWhereWithoutLessonInput {
    @Field(() => LessonProgressScalarWhereInput, {nullable:false})
    @Type(() => LessonProgressScalarWhereInput)
    where!: InstanceType<typeof LessonProgressScalarWhereInput>;
    @Field(() => LessonProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => LessonProgressUpdateManyMutationInput)
    data!: InstanceType<typeof LessonProgressUpdateManyMutationInput>;
}

@InputType()
export class LessonProgressUpdateManyWithWhereWithoutUserInput {
    @Field(() => LessonProgressScalarWhereInput, {nullable:false})
    @Type(() => LessonProgressScalarWhereInput)
    where!: InstanceType<typeof LessonProgressScalarWhereInput>;
    @Field(() => LessonProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => LessonProgressUpdateManyMutationInput)
    data!: InstanceType<typeof LessonProgressUpdateManyMutationInput>;
}

@InputType()
export class LessonProgressUpdateManyWithoutLessonNestedInput {
    @Field(() => [LessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create?: Array<LessonProgressCreateWithoutLessonInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutLessonInput>;
    @Field(() => [LessonProgressUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<LessonProgressUpsertWithWhereUniqueWithoutLessonInput>;
    @Field(() => LessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyLessonInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<LessonProgressUpdateWithWhereUniqueWithoutLessonInput>;
    @Field(() => [LessonProgressUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => LessonProgressUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<LessonProgressUpdateManyWithWhereWithoutLessonInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    @Type(() => LessonProgressScalarWhereInput)
    deleteMany?: Array<LessonProgressScalarWhereInput>;
}

@InputType()
export class LessonProgressUpdateManyWithoutUserNestedInput {
    @Field(() => [LessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create?: Array<LessonProgressCreateWithoutUserInput>;
    @Field(() => [LessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LessonProgressCreateOrConnectWithoutUserInput>;
    @Field(() => [LessonProgressUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<LessonProgressUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => LessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LessonProgressCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof LessonProgressCreateManyUserInputEnvelope>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => LessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>>;
    @Field(() => [LessonProgressUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<LessonProgressUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [LessonProgressUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => LessonProgressUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<LessonProgressUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [LessonProgressScalarWhereInput], {nullable:true})
    @Type(() => LessonProgressScalarWhereInput)
    deleteMany?: Array<LessonProgressScalarWhereInput>;
}

@InputType()
export class LessonProgressUpdateWithWhereUniqueWithoutLessonInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressUpdateWithoutLessonInput, {nullable:false})
    @Type(() => LessonProgressUpdateWithoutLessonInput)
    data!: InstanceType<typeof LessonProgressUpdateWithoutLessonInput>;
}

@InputType()
export class LessonProgressUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressUpdateWithoutUserInput, {nullable:false})
    @Type(() => LessonProgressUpdateWithoutUserInput)
    data!: InstanceType<typeof LessonProgressUpdateWithoutUserInput>;
}

@InputType()
export class LessonProgressUpdateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProgressNestedInput>;
}

@InputType()
export class LessonProgressUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => LessonUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    lesson?: InstanceType<typeof LessonUpdateOneRequiredWithoutProgressNestedInput>;
}

@InputType()
export class LessonProgressUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Boolean, {nullable:true})
    completed?: boolean;
    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;
    @Field(() => UserUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutProgressNestedInput>;
    @Field(() => LessonUpdateOneRequiredWithoutProgressNestedInput, {nullable:true})
    lesson?: InstanceType<typeof LessonUpdateOneRequiredWithoutProgressNestedInput>;
}

@InputType()
export class LessonProgressUpsertWithWhereUniqueWithoutLessonInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressUpdateWithoutLessonInput, {nullable:false})
    @Type(() => LessonProgressUpdateWithoutLessonInput)
    update!: InstanceType<typeof LessonProgressUpdateWithoutLessonInput>;
    @Field(() => LessonProgressCreateWithoutLessonInput, {nullable:false})
    @Type(() => LessonProgressCreateWithoutLessonInput)
    create!: InstanceType<typeof LessonProgressCreateWithoutLessonInput>;
}

@InputType()
export class LessonProgressUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressUpdateWithoutUserInput, {nullable:false})
    @Type(() => LessonProgressUpdateWithoutUserInput)
    update!: InstanceType<typeof LessonProgressUpdateWithoutUserInput>;
    @Field(() => LessonProgressCreateWithoutUserInput, {nullable:false})
    @Type(() => LessonProgressCreateWithoutUserInput)
    create!: InstanceType<typeof LessonProgressCreateWithoutUserInput>;
}

@InputType()
export class LessonProgressWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    AND?: Array<LessonProgressWhereInput>;
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    OR?: Array<LessonProgressWhereInput>;
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    NOT?: Array<LessonProgressWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    completedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => LessonScalarRelationFilter, {nullable:true})
    lesson?: InstanceType<typeof LessonScalarRelationFilter>;
}

@InputType()
export class LessonProgressWhereInput {
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    AND?: Array<LessonProgressWhereInput>;
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    OR?: Array<LessonProgressWhereInput>;
    @Field(() => [LessonProgressWhereInput], {nullable:true})
    NOT?: Array<LessonProgressWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => BoolFilter, {nullable:true})
    completed?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    completedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserScalarRelationFilter>;
    @Field(() => LessonScalarRelationFilter, {nullable:true})
    lesson?: InstanceType<typeof LessonScalarRelationFilter>;
}

@ObjectType()
export class LessonProgress {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    completed!: boolean;
    @Field(() => Date, {nullable:true})
    completedAt!: Date | null;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Lesson, {nullable:false})
    lesson?: InstanceType<typeof Lesson>;
}

@ArgsType()
export class UpdateManyLessonProgressArgs {
    @Field(() => LessonProgressUpdateManyMutationInput, {nullable:false})
    @Type(() => LessonProgressUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonProgressUpdateManyMutationInput>;
    @Field(() => LessonProgressWhereInput, {nullable:true})
    @Type(() => LessonProgressWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof LessonProgressWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneLessonProgressArgs {
    @Field(() => LessonProgressUpdateInput, {nullable:false})
    @Type(() => LessonProgressUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof LessonProgressUpdateInput>;
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneLessonProgressArgs {
    @Field(() => LessonProgressWhereUniqueInput, {nullable:false})
    @Type(() => LessonProgressWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<LessonProgressWhereUniqueInput, 'id'>;
    @Field(() => LessonProgressCreateInput, {nullable:false})
    @Type(() => LessonProgressCreateInput)
    create!: InstanceType<typeof LessonProgressCreateInput>;
    @Field(() => LessonProgressUpdateInput, {nullable:false})
    @Type(() => LessonProgressUpdateInput)
    update!: InstanceType<typeof LessonProgressUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolFilter, {nullable:true})
    not?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _min?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    _max?: InstanceType<typeof BoolFilter>;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumTaskTypeFilter {
    @Field(() => TaskType, {nullable:true})
    equals?: `${TaskType}`;
    @Field(() => [TaskType], {nullable:true})
    in?: Array<`${TaskType}`>;
    @Field(() => [TaskType], {nullable:true})
    notIn?: Array<`${TaskType}`>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    not?: InstanceType<typeof EnumTaskTypeFilter>;
}

@InputType()
export class EnumTaskTypeWithAggregatesFilter {
    @Field(() => TaskType, {nullable:true})
    equals?: `${TaskType}`;
    @Field(() => [TaskType], {nullable:true})
    in?: Array<`${TaskType}`>;
    @Field(() => [TaskType], {nullable:true})
    notIn?: Array<`${TaskType}`>;
    @Field(() => EnumTaskTypeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumTaskTypeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    _min?: InstanceType<typeof EnumTaskTypeFilter>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    _max?: InstanceType<typeof EnumTaskTypeFilter>;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateTask {
    @Field(() => TaskCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TaskCountAggregate>;
    @Field(() => TaskAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TaskAvgAggregate>;
    @Field(() => TaskSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TaskSumAggregate>;
    @Field(() => TaskMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TaskMinAggregate>;
    @Field(() => TaskMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TaskMaxAggregate>;
}

@ArgsType()
export class CreateManyTaskArgs {
    @Field(() => [TaskCreateManyInput], {nullable:false})
    @Type(() => TaskCreateManyInput)
    @ValidateNested()
    data!: Array<TaskCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTaskArgs {
    @Field(() => TaskCreateInput, {nullable:false})
    @Type(() => TaskCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof TaskCreateInput>;
}

@ArgsType()
export class DeleteManyTaskArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneTaskArgs {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTaskOrThrowArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => [TaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithRelationInput>;
    @Field(() => TaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TaskScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TaskScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstTaskArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => [TaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithRelationInput>;
    @Field(() => TaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TaskScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TaskScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyTaskArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => [TaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithRelationInput>;
    @Field(() => TaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TaskScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TaskScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueTaskOrThrowArgs {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTaskArgs {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TaskAggregateArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => [TaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithRelationInput>;
    @Field(() => TaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TaskCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TaskCountAggregateInput>;
    @Field(() => TaskAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TaskAvgAggregateInput>;
    @Field(() => TaskSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TaskSumAggregateInput>;
    @Field(() => TaskMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TaskMinAggregateInput>;
    @Field(() => TaskMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TaskMaxAggregateInput>;
}

@InputType()
export class TaskAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    order?: true;
}

@ObjectType()
export class TaskAvgAggregate {
    @Field(() => Float, {nullable:true})
    order?: number;
}

@InputType()
export class TaskAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}

@InputType()
export class TaskCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    prompt?: true;
    @Field(() => Boolean, {nullable:true})
    options?: true;
    @Field(() => Boolean, {nullable:true})
    answer?: true;
    @Field(() => Boolean, {nullable:true})
    order?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TaskCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    lessonId!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    prompt!: number;
    @Field(() => Int, {nullable:false})
    options!: number;
    @Field(() => Int, {nullable:false})
    answer!: number;
    @Field(() => Int, {nullable:false})
    order!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TaskCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prompt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    options?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}

@InputType()
export class TaskCreateManyLessonInputEnvelope {
    @Field(() => [TaskCreateManyLessonInput], {nullable:false})
    @Type(() => TaskCreateManyLessonInput)
    data!: Array<TaskCreateManyLessonInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TaskCreateManyLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
}

@InputType()
export class TaskCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
}

@InputType()
export class TaskCreateNestedManyWithoutLessonInput {
    @Field(() => [TaskCreateWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateWithoutLessonInput)
    create?: Array<TaskCreateWithoutLessonInput>;
    @Field(() => [TaskCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutLessonInput>;
    @Field(() => TaskCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof TaskCreateManyLessonInputEnvelope>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
}

@InputType()
export class TaskCreateOrConnectWithoutLessonInput {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => TaskCreateWithoutLessonInput, {nullable:false})
    @Type(() => TaskCreateWithoutLessonInput)
    create!: InstanceType<typeof TaskCreateWithoutLessonInput>;
}

@InputType()
export class TaskCreateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
}

@InputType()
export class TaskCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
    @Field(() => LessonCreateNestedOneWithoutTasksInput, {nullable:false})
    lesson!: InstanceType<typeof LessonCreateNestedOneWithoutTasksInput>;
}

@InputType()
export class TaskCreateoptionsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class TaskGroupByArgs {
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => [TaskOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TaskOrderByWithAggregationInput>;
    @Field(() => [TaskScalarFieldEnum], {nullable:false})
    by!: Array<`${TaskScalarFieldEnum}`>;
    @Field(() => TaskScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TaskScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TaskCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TaskCountAggregateInput>;
    @Field(() => TaskAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TaskAvgAggregateInput>;
    @Field(() => TaskSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TaskSumAggregateInput>;
    @Field(() => TaskMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TaskMinAggregateInput>;
    @Field(() => TaskMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TaskMaxAggregateInput>;
}

@ObjectType()
export class TaskGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
    @Field(() => TaskCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TaskCountAggregate>;
    @Field(() => TaskAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TaskAvgAggregate>;
    @Field(() => TaskSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TaskSumAggregate>;
    @Field(() => TaskMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TaskMinAggregate>;
    @Field(() => TaskMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TaskMaxAggregate>;
}

@InputType()
export class TaskListRelationFilter {
    @Field(() => TaskWhereInput, {nullable:true})
    every?: InstanceType<typeof TaskWhereInput>;
    @Field(() => TaskWhereInput, {nullable:true})
    some?: InstanceType<typeof TaskWhereInput>;
    @Field(() => TaskWhereInput, {nullable:true})
    none?: InstanceType<typeof TaskWhereInput>;
}

@InputType()
export class TaskMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    prompt?: true;
    @Field(() => Boolean, {nullable:true})
    answer?: true;
    @Field(() => Boolean, {nullable:true})
    order?: true;
}

@ObjectType()
export class TaskMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prompt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}

@InputType()
export class TaskMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    lessonId?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    prompt?: true;
    @Field(() => Boolean, {nullable:true})
    answer?: true;
    @Field(() => Boolean, {nullable:true})
    order?: true;
}

@ObjectType()
export class TaskMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prompt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}

@InputType()
export class TaskOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class TaskOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prompt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    options?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
    @Field(() => TaskCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TaskCountOrderByAggregateInput>;
    @Field(() => TaskAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TaskAvgOrderByAggregateInput>;
    @Field(() => TaskMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TaskMaxOrderByAggregateInput>;
    @Field(() => TaskMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TaskMinOrderByAggregateInput>;
    @Field(() => TaskSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TaskSumOrderByAggregateInput>;
}

@InputType()
export class TaskOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    lessonId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prompt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    options?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    answer?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
    @Field(() => LessonOrderByWithRelationInput, {nullable:true})
    lesson?: InstanceType<typeof LessonOrderByWithRelationInput>;
}

@InputType()
export class TaskScalarWhereWithAggregatesInput {
    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TaskScalarWhereWithAggregatesInput>;
    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TaskScalarWhereWithAggregatesInput>;
    @Field(() => [TaskScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TaskScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumTaskTypeWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof EnumTaskTypeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    prompt?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    answer?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class TaskScalarWhereInput {
    @Field(() => [TaskScalarWhereInput], {nullable:true})
    AND?: Array<TaskScalarWhereInput>;
    @Field(() => [TaskScalarWhereInput], {nullable:true})
    OR?: Array<TaskScalarWhereInput>;
    @Field(() => [TaskScalarWhereInput], {nullable:true})
    NOT?: Array<TaskScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumTaskTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    prompt?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    answer?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    order?: InstanceType<typeof IntFilter>;
}

@InputType()
export class TaskSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    order?: true;
}

@ObjectType()
export class TaskSumAggregate {
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;
}

@InputType()
export class TaskUncheckedCreateNestedManyWithoutLessonInput {
    @Field(() => [TaskCreateWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateWithoutLessonInput)
    create?: Array<TaskCreateWithoutLessonInput>;
    @Field(() => [TaskCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutLessonInput>;
    @Field(() => TaskCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof TaskCreateManyLessonInputEnvelope>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
}

@InputType()
export class TaskUncheckedCreateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
}

@InputType()
export class TaskUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
}

@InputType()
export class TaskUncheckedUpdateManyWithoutLessonNestedInput {
    @Field(() => [TaskCreateWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateWithoutLessonInput)
    create?: Array<TaskCreateWithoutLessonInput>;
    @Field(() => [TaskCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutLessonInput>;
    @Field(() => [TaskUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutLessonInput>;
    @Field(() => TaskCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof TaskCreateManyLessonInputEnvelope>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutLessonInput>;
    @Field(() => [TaskUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutLessonInput>;
    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUncheckedUpdateManyWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUncheckedUpdateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    lessonId?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUpdateManyWithWhereWithoutLessonInput {
    @Field(() => TaskScalarWhereInput, {nullable:false})
    @Type(() => TaskScalarWhereInput)
    where!: InstanceType<typeof TaskScalarWhereInput>;
    @Field(() => TaskUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskUpdateManyMutationInput)
    data!: InstanceType<typeof TaskUpdateManyMutationInput>;
}

@InputType()
export class TaskUpdateManyWithoutLessonNestedInput {
    @Field(() => [TaskCreateWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateWithoutLessonInput)
    create?: Array<TaskCreateWithoutLessonInput>;
    @Field(() => [TaskCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => TaskCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<TaskCreateOrConnectWithoutLessonInput>;
    @Field(() => [TaskUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<TaskUpsertWithWhereUniqueWithoutLessonInput>;
    @Field(() => TaskCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => TaskCreateManyLessonInputEnvelope)
    createMany?: InstanceType<typeof TaskCreateManyLessonInputEnvelope>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskWhereUniqueInput], {nullable:true})
    @Type(() => TaskWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TaskWhereUniqueInput, 'id'>>;
    @Field(() => [TaskUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<TaskUpdateWithWhereUniqueWithoutLessonInput>;
    @Field(() => [TaskUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => TaskUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<TaskUpdateManyWithWhereWithoutLessonInput>;
    @Field(() => [TaskScalarWhereInput], {nullable:true})
    @Type(() => TaskScalarWhereInput)
    deleteMany?: Array<TaskScalarWhereInput>;
}

@InputType()
export class TaskUpdateWithWhereUniqueWithoutLessonInput {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => TaskUpdateWithoutLessonInput, {nullable:false})
    @Type(() => TaskUpdateWithoutLessonInput)
    data!: InstanceType<typeof TaskUpdateWithoutLessonInput>;
}

@InputType()
export class TaskUpdateWithoutLessonInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
}

@InputType()
export class TaskUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => TaskType, {nullable:true})
    type?: `${TaskType}`;
    @Field(() => String, {nullable:true})
    prompt?: string;
    @Field(() => [String], {nullable:true})
    options?: Array<string>;
    @Field(() => String, {nullable:true})
    answer?: string;
    @Field(() => Int, {nullable:true})
    order?: number;
    @Field(() => LessonUpdateOneRequiredWithoutTasksNestedInput, {nullable:true})
    lesson?: InstanceType<typeof LessonUpdateOneRequiredWithoutTasksNestedInput>;
}

@InputType()
export class TaskUpdateoptionsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class TaskUpsertWithWhereUniqueWithoutLessonInput {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => TaskUpdateWithoutLessonInput, {nullable:false})
    @Type(() => TaskUpdateWithoutLessonInput)
    update!: InstanceType<typeof TaskUpdateWithoutLessonInput>;
    @Field(() => TaskCreateWithoutLessonInput, {nullable:false})
    @Type(() => TaskCreateWithoutLessonInput)
    create!: InstanceType<typeof TaskCreateWithoutLessonInput>;
}

@InputType()
export class TaskWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [TaskWhereInput], {nullable:true})
    AND?: Array<TaskWhereInput>;
    @Field(() => [TaskWhereInput], {nullable:true})
    OR?: Array<TaskWhereInput>;
    @Field(() => [TaskWhereInput], {nullable:true})
    NOT?: Array<TaskWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumTaskTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    prompt?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    answer?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    order?: InstanceType<typeof IntFilter>;
    @Field(() => LessonScalarRelationFilter, {nullable:true})
    lesson?: InstanceType<typeof LessonScalarRelationFilter>;
}

@InputType()
export class TaskWhereInput {
    @Field(() => [TaskWhereInput], {nullable:true})
    AND?: Array<TaskWhereInput>;
    @Field(() => [TaskWhereInput], {nullable:true})
    OR?: Array<TaskWhereInput>;
    @Field(() => [TaskWhereInput], {nullable:true})
    NOT?: Array<TaskWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lessonId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumTaskTypeFilter, {nullable:true})
    type?: InstanceType<typeof EnumTaskTypeFilter>;
    @Field(() => StringFilter, {nullable:true})
    prompt?: InstanceType<typeof StringFilter>;
    @Field(() => StringListFilter, {nullable:true})
    options?: InstanceType<typeof StringListFilter>;
    @Field(() => StringFilter, {nullable:true})
    answer?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    order?: InstanceType<typeof IntFilter>;
    @Field(() => LessonScalarRelationFilter, {nullable:true})
    lesson?: InstanceType<typeof LessonScalarRelationFilter>;
}

@ObjectType()
export class Task {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    lessonId!: string;
    @Field(() => TaskType, {nullable:false})
    type!: `${TaskType}`;
    @Field(() => String, {nullable:false})
    prompt!: string;
    @Field(() => [String], {nullable:true})
    options!: Array<string>;
    @Field(() => String, {nullable:false})
    answer!: string;
    @Field(() => Int, {nullable:false})
    order!: number;
    @Field(() => Lesson, {nullable:false})
    lesson?: InstanceType<typeof Lesson>;
}

@ArgsType()
export class UpdateManyTaskArgs {
    @Field(() => TaskUpdateManyMutationInput, {nullable:false})
    @Type(() => TaskUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof TaskUpdateManyMutationInput>;
    @Field(() => TaskWhereInput, {nullable:true})
    @Type(() => TaskWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TaskWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneTaskArgs {
    @Field(() => TaskUpdateInput, {nullable:false})
    @Type(() => TaskUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof TaskUpdateInput>;
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTaskArgs {
    @Field(() => TaskWhereUniqueInput, {nullable:false})
    @Type(() => TaskWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TaskWhereUniqueInput, 'id'>;
    @Field(() => TaskCreateInput, {nullable:false})
    @Type(() => TaskCreateInput)
    create!: InstanceType<typeof TaskCreateInput>;
    @Field(() => TaskUpdateInput, {nullable:false})
    @Type(() => TaskUpdateInput)
    update!: InstanceType<typeof TaskUpdateInput>;
}

@ObjectType()
export class AggregateTopic {
    @Field(() => TopicCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TopicCountAggregate>;
    @Field(() => TopicMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TopicMinAggregate>;
    @Field(() => TopicMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TopicMaxAggregate>;
}

@ArgsType()
export class CreateManyTopicArgs {
    @Field(() => [TopicCreateManyInput], {nullable:false})
    @Type(() => TopicCreateManyInput)
    @ValidateNested()
    data!: Array<TopicCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTopicArgs {
    @Field(() => TopicCreateInput, {nullable:false})
    @Type(() => TopicCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof TopicCreateInput>;
}

@ArgsType()
export class DeleteManyTopicArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneTopicArgs {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTopicOrThrowArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TopicScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TopicScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstTopicArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TopicScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TopicScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyTopicArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TopicScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TopicScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueTopicOrThrowArgs {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTopicArgs {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TopicAggregateArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => [TopicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithRelationInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TopicCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TopicCountAggregateInput>;
    @Field(() => TopicMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TopicMinAggregateInput>;
    @Field(() => TopicMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TopicMaxAggregateInput>;
}

@InputType()
export class TopicCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TopicCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    languageId!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TopicCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    languageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@ObjectType()
export class TopicCount {
    @Field(() => Int, {nullable:false})
    lessons?: number;
}

@InputType()
export class TopicCreateManyLanguageInputEnvelope {
    @Field(() => [TopicCreateManyLanguageInput], {nullable:false})
    @Type(() => TopicCreateManyLanguageInput)
    data!: Array<TopicCreateManyLanguageInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TopicCreateManyLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    languageId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicCreateNestedManyWithoutLanguageInput {
    @Field(() => [TopicCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateWithoutLanguageInput)
    create?: Array<TopicCreateWithoutLanguageInput>;
    @Field(() => [TopicCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutLanguageInput>;
    @Field(() => TopicCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TopicCreateManyLanguageInputEnvelope>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
}

@InputType()
export class TopicCreateNestedOneWithoutLessonsInput {
    @Field(() => TopicCreateWithoutLessonsInput, {nullable:true})
    @Type(() => TopicCreateWithoutLessonsInput)
    create?: InstanceType<typeof TopicCreateWithoutLessonsInput>;
    @Field(() => TopicCreateOrConnectWithoutLessonsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLessonsInput)
    connectOrCreate?: InstanceType<typeof TopicCreateOrConnectWithoutLessonsInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
}

@InputType()
export class TopicCreateOrConnectWithoutLanguageInput {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicCreateWithoutLanguageInput, {nullable:false})
    @Type(() => TopicCreateWithoutLanguageInput)
    create!: InstanceType<typeof TopicCreateWithoutLanguageInput>;
}

@InputType()
export class TopicCreateOrConnectWithoutLessonsInput {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicCreateWithoutLessonsInput, {nullable:false})
    @Type(() => TopicCreateWithoutLessonsInput)
    create!: InstanceType<typeof TopicCreateWithoutLessonsInput>;
}

@InputType()
export class TopicCreateWithoutLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonCreateNestedManyWithoutTopicInput, {nullable:true})
    lessons?: InstanceType<typeof LessonCreateNestedManyWithoutTopicInput>;
}

@InputType()
export class TopicCreateWithoutLessonsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LanguageCreateNestedOneWithoutTopicsInput, {nullable:false})
    language!: InstanceType<typeof LanguageCreateNestedOneWithoutTopicsInput>;
}

@InputType()
export class TopicCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LanguageCreateNestedOneWithoutTopicsInput, {nullable:false})
    language!: InstanceType<typeof LanguageCreateNestedOneWithoutTopicsInput>;
    @Field(() => LessonCreateNestedManyWithoutTopicInput, {nullable:true})
    lessons?: InstanceType<typeof LessonCreateNestedManyWithoutTopicInput>;
}

@ArgsType()
export class TopicGroupByArgs {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => [TopicOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TopicOrderByWithAggregationInput>;
    @Field(() => [TopicScalarFieldEnum], {nullable:false})
    by!: Array<`${TopicScalarFieldEnum}`>;
    @Field(() => TopicScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TopicScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TopicCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TopicCountAggregateInput>;
    @Field(() => TopicMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TopicMinAggregateInput>;
    @Field(() => TopicMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TopicMaxAggregateInput>;
}

@ObjectType()
export class TopicGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    languageId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => TopicCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TopicCountAggregate>;
    @Field(() => TopicMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TopicMinAggregate>;
    @Field(() => TopicMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TopicMaxAggregate>;
}

@InputType()
export class TopicListRelationFilter {
    @Field(() => TopicWhereInput, {nullable:true})
    every?: InstanceType<typeof TopicWhereInput>;
    @Field(() => TopicWhereInput, {nullable:true})
    some?: InstanceType<typeof TopicWhereInput>;
    @Field(() => TopicWhereInput, {nullable:true})
    none?: InstanceType<typeof TopicWhereInput>;
}

@InputType()
export class TopicMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class TopicMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    languageId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    languageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class TopicMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    languageId?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class TopicMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    languageId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    languageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class TopicOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class TopicOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    languageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => TopicCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TopicCountOrderByAggregateInput>;
    @Field(() => TopicMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TopicMaxOrderByAggregateInput>;
    @Field(() => TopicMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TopicMinOrderByAggregateInput>;
}

@InputType()
export class TopicOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    languageId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => LanguageOrderByWithRelationInput, {nullable:true})
    language?: InstanceType<typeof LanguageOrderByWithRelationInput>;
    @Field(() => LessonOrderByRelationAggregateInput, {nullable:true})
    lessons?: InstanceType<typeof LessonOrderByRelationAggregateInput>;
}

@InputType()
export class TopicScalarRelationFilter {
    @Field(() => TopicWhereInput, {nullable:true})
    is?: InstanceType<typeof TopicWhereInput>;
    @Field(() => TopicWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TopicWhereInput>;
}

@InputType()
export class TopicScalarWhereWithAggregatesInput {
    @Field(() => [TopicScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TopicScalarWhereWithAggregatesInput>;
    @Field(() => [TopicScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TopicScalarWhereWithAggregatesInput>;
    @Field(() => [TopicScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TopicScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    languageId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TopicScalarWhereInput {
    @Field(() => [TopicScalarWhereInput], {nullable:true})
    AND?: Array<TopicScalarWhereInput>;
    @Field(() => [TopicScalarWhereInput], {nullable:true})
    OR?: Array<TopicScalarWhereInput>;
    @Field(() => [TopicScalarWhereInput], {nullable:true})
    NOT?: Array<TopicScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    languageId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class TopicUncheckedCreateNestedManyWithoutLanguageInput {
    @Field(() => [TopicCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateWithoutLanguageInput)
    create?: Array<TopicCreateWithoutLanguageInput>;
    @Field(() => [TopicCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutLanguageInput>;
    @Field(() => TopicCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TopicCreateManyLanguageInputEnvelope>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
}

@InputType()
export class TopicUncheckedCreateWithoutLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUncheckedCreateNestedManyWithoutTopicInput>;
}

@InputType()
export class TopicUncheckedCreateWithoutLessonsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    languageId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    languageId!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonUncheckedCreateNestedManyWithoutTopicInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUncheckedCreateNestedManyWithoutTopicInput>;
}

@InputType()
export class TopicUncheckedUpdateManyWithoutLanguageNestedInput {
    @Field(() => [TopicCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateWithoutLanguageInput)
    create?: Array<TopicCreateWithoutLanguageInput>;
    @Field(() => [TopicCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutLanguageInput>;
    @Field(() => [TopicUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<TopicUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => TopicCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TopicCreateManyLanguageInputEnvelope>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<TopicUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [TopicUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<TopicUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [TopicScalarWhereInput], {nullable:true})
    @Type(() => TopicScalarWhereInput)
    deleteMany?: Array<TopicScalarWhereInput>;
}

@InputType()
export class TopicUncheckedUpdateManyWithoutLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    languageId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicUncheckedUpdateWithoutLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonUncheckedUpdateManyWithoutTopicNestedInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUncheckedUpdateManyWithoutTopicNestedInput>;
}

@InputType()
export class TopicUncheckedUpdateWithoutLessonsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    languageId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    languageId?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonUncheckedUpdateManyWithoutTopicNestedInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUncheckedUpdateManyWithoutTopicNestedInput>;
}

@InputType()
export class TopicUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class TopicUpdateManyWithWhereWithoutLanguageInput {
    @Field(() => TopicScalarWhereInput, {nullable:false})
    @Type(() => TopicScalarWhereInput)
    where!: InstanceType<typeof TopicScalarWhereInput>;
    @Field(() => TopicUpdateManyMutationInput, {nullable:false})
    @Type(() => TopicUpdateManyMutationInput)
    data!: InstanceType<typeof TopicUpdateManyMutationInput>;
}

@InputType()
export class TopicUpdateManyWithoutLanguageNestedInput {
    @Field(() => [TopicCreateWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateWithoutLanguageInput)
    create?: Array<TopicCreateWithoutLanguageInput>;
    @Field(() => [TopicCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<TopicCreateOrConnectWithoutLanguageInput>;
    @Field(() => [TopicUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<TopicUpsertWithWhereUniqueWithoutLanguageInput>;
    @Field(() => TopicCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => TopicCreateManyLanguageInputEnvelope)
    createMany?: InstanceType<typeof TopicCreateManyLanguageInputEnvelope>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicWhereUniqueInput], {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TopicWhereUniqueInput, 'id'>>;
    @Field(() => [TopicUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<TopicUpdateWithWhereUniqueWithoutLanguageInput>;
    @Field(() => [TopicUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => TopicUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<TopicUpdateManyWithWhereWithoutLanguageInput>;
    @Field(() => [TopicScalarWhereInput], {nullable:true})
    @Type(() => TopicScalarWhereInput)
    deleteMany?: Array<TopicScalarWhereInput>;
}

@InputType()
export class TopicUpdateOneRequiredWithoutLessonsNestedInput {
    @Field(() => TopicCreateWithoutLessonsInput, {nullable:true})
    @Type(() => TopicCreateWithoutLessonsInput)
    create?: InstanceType<typeof TopicCreateWithoutLessonsInput>;
    @Field(() => TopicCreateOrConnectWithoutLessonsInput, {nullable:true})
    @Type(() => TopicCreateOrConnectWithoutLessonsInput)
    connectOrCreate?: InstanceType<typeof TopicCreateOrConnectWithoutLessonsInput>;
    @Field(() => TopicUpsertWithoutLessonsInput, {nullable:true})
    @Type(() => TopicUpsertWithoutLessonsInput)
    upsert?: InstanceType<typeof TopicUpsertWithoutLessonsInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:true})
    @Type(() => TopicWhereUniqueInput)
    connect?: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicUpdateToOneWithWhereWithoutLessonsInput, {nullable:true})
    @Type(() => TopicUpdateToOneWithWhereWithoutLessonsInput)
    update?: InstanceType<typeof TopicUpdateToOneWithWhereWithoutLessonsInput>;
}

@InputType()
export class TopicUpdateToOneWithWhereWithoutLessonsInput {
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => TopicUpdateWithoutLessonsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutLessonsInput)
    data!: InstanceType<typeof TopicUpdateWithoutLessonsInput>;
}

@InputType()
export class TopicUpdateWithWhereUniqueWithoutLanguageInput {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => TopicUpdateWithoutLanguageInput)
    data!: InstanceType<typeof TopicUpdateWithoutLanguageInput>;
}

@InputType()
export class TopicUpdateWithoutLanguageInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LessonUpdateManyWithoutTopicNestedInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUpdateManyWithoutTopicNestedInput>;
}

@InputType()
export class TopicUpdateWithoutLessonsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LanguageUpdateOneRequiredWithoutTopicsNestedInput, {nullable:true})
    language?: InstanceType<typeof LanguageUpdateOneRequiredWithoutTopicsNestedInput>;
}

@InputType()
export class TopicUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => LanguageUpdateOneRequiredWithoutTopicsNestedInput, {nullable:true})
    language?: InstanceType<typeof LanguageUpdateOneRequiredWithoutTopicsNestedInput>;
    @Field(() => LessonUpdateManyWithoutTopicNestedInput, {nullable:true})
    lessons?: InstanceType<typeof LessonUpdateManyWithoutTopicNestedInput>;
}

@InputType()
export class TopicUpsertWithWhereUniqueWithoutLanguageInput {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => TopicUpdateWithoutLanguageInput)
    update!: InstanceType<typeof TopicUpdateWithoutLanguageInput>;
    @Field(() => TopicCreateWithoutLanguageInput, {nullable:false})
    @Type(() => TopicCreateWithoutLanguageInput)
    create!: InstanceType<typeof TopicCreateWithoutLanguageInput>;
}

@InputType()
export class TopicUpsertWithoutLessonsInput {
    @Field(() => TopicUpdateWithoutLessonsInput, {nullable:false})
    @Type(() => TopicUpdateWithoutLessonsInput)
    update!: InstanceType<typeof TopicUpdateWithoutLessonsInput>;
    @Field(() => TopicCreateWithoutLessonsInput, {nullable:false})
    @Type(() => TopicCreateWithoutLessonsInput)
    create!: InstanceType<typeof TopicCreateWithoutLessonsInput>;
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    where?: InstanceType<typeof TopicWhereInput>;
}

@InputType()
export class TopicWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [TopicWhereInput], {nullable:true})
    AND?: Array<TopicWhereInput>;
    @Field(() => [TopicWhereInput], {nullable:true})
    OR?: Array<TopicWhereInput>;
    @Field(() => [TopicWhereInput], {nullable:true})
    NOT?: Array<TopicWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    languageId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => LanguageScalarRelationFilter, {nullable:true})
    language?: InstanceType<typeof LanguageScalarRelationFilter>;
    @Field(() => LessonListRelationFilter, {nullable:true})
    lessons?: InstanceType<typeof LessonListRelationFilter>;
}

@InputType()
export class TopicWhereInput {
    @Field(() => [TopicWhereInput], {nullable:true})
    AND?: Array<TopicWhereInput>;
    @Field(() => [TopicWhereInput], {nullable:true})
    OR?: Array<TopicWhereInput>;
    @Field(() => [TopicWhereInput], {nullable:true})
    NOT?: Array<TopicWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    languageId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => LanguageScalarRelationFilter, {nullable:true})
    language?: InstanceType<typeof LanguageScalarRelationFilter>;
    @Field(() => LessonListRelationFilter, {nullable:true})
    lessons?: InstanceType<typeof LessonListRelationFilter>;
}

@ObjectType()
export class Topic {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    languageId!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Language, {nullable:false})
    language?: InstanceType<typeof Language>;
    @Field(() => [Lesson], {nullable:true})
    lessons?: Array<Lesson>;
    @Field(() => TopicCount, {nullable:false})
    _count?: InstanceType<typeof TopicCount>;
}

@ArgsType()
export class UpdateManyTopicArgs {
    @Field(() => TopicUpdateManyMutationInput, {nullable:false})
    @Type(() => TopicUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof TopicUpdateManyMutationInput>;
    @Field(() => TopicWhereInput, {nullable:true})
    @Type(() => TopicWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof TopicWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneTopicArgs {
    @Field(() => TopicUpdateInput, {nullable:false})
    @Type(() => TopicUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof TopicUpdateInput>;
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTopicArgs {
    @Field(() => TopicWhereUniqueInput, {nullable:false})
    @Type(() => TopicWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<TopicWhereUniqueInput, 'id'>;
    @Field(() => TopicCreateInput, {nullable:false})
    @Type(() => TopicCreateInput)
    create!: InstanceType<typeof TopicCreateInput>;
    @Field(() => TopicUpdateInput, {nullable:false})
    @Type(() => TopicUpdateInput)
    update!: InstanceType<typeof TopicUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => Int, {nullable:true})
    limit?: number;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    xp?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    xp?: number;
}

@InputType()
export class UserAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    xp?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    xp!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    progress?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutProgressInput {
    @Field(() => UserCreateWithoutProgressInput, {nullable:true})
    @Type(() => UserCreateWithoutProgressInput)
    create?: InstanceType<typeof UserCreateWithoutProgressInput>;
    @Field(() => UserCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgressInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgressInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateOrConnectWithoutProgressInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutProgressInput, {nullable:false})
    @Type(() => UserCreateWithoutProgressInput)
    create!: InstanceType<typeof UserCreateWithoutProgressInput>;
}

@InputType()
export class UserCreateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LessonProgressCreateNestedManyWithoutUserInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:false})
    xp!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    xp?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    xp?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    @Field(() => UserSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => LessonProgressOrderByRelationAggregateInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressOrderByRelationAggregateInput>;
}

@InputType()
export class UserScalarRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    xp?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    xp?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    xp?: number;
}

@InputType()
export class UserSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    xp?: `${SortOrder}`;
}

@InputType()
export class UserUncheckedCreateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LessonProgressUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LessonProgressUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateOneRequiredWithoutProgressNestedInput {
    @Field(() => UserCreateWithoutProgressInput, {nullable:true})
    @Type(() => UserCreateWithoutProgressInput)
    create?: InstanceType<typeof UserCreateWithoutProgressInput>;
    @Field(() => UserCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutProgressInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProgressInput>;
    @Field(() => UserUpsertWithoutProgressInput, {nullable:true})
    @Type(() => UserUpsertWithoutProgressInput)
    upsert?: InstanceType<typeof UserUpsertWithoutProgressInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutProgressInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutProgressInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutProgressInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutProgressInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutProgressInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgressInput)
    data!: InstanceType<typeof UserUpdateWithoutProgressInput>;
}

@InputType()
export class UserUpdateWithoutProgressInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Int, {nullable:true})
    xp?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => LessonProgressUpdateManyWithoutUserNestedInput, {nullable:true})
    progress?: InstanceType<typeof LessonProgressUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutProgressInput {
    @Field(() => UserUpdateWithoutProgressInput, {nullable:false})
    @Type(() => UserUpdateWithoutProgressInput)
    update!: InstanceType<typeof UserUpdateWithoutProgressInput>;
    @Field(() => UserCreateWithoutProgressInput, {nullable:false})
    @Type(() => UserCreateWithoutProgressInput)
    create!: InstanceType<typeof UserCreateWithoutProgressInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    xp?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => LessonProgressListRelationFilter, {nullable:true})
    progress?: InstanceType<typeof LessonProgressListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    xp?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => LessonProgressListRelationFilter, {nullable:true})
    progress?: InstanceType<typeof LessonProgressListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => Int, {defaultValue:0,nullable:false})
    xp!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [LessonProgress], {nullable:true})
    progress?: Array<LessonProgress>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
