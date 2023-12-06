import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>; // doc la table

@Schema()
export class User {
  @Prop({require: true})
  email: string;

  @Prop({require: true})
  password: string;

  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  createdDate: Date;
  @Prop()
  updatedDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);