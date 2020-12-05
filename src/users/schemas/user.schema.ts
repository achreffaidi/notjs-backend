import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required : true })
  name: string;

  @Prop({ type: Number, min: 18, max: 65 })
  age: number;

}

export const UserSchema = SchemaFactory.createForClass(User);