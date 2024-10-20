
// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;
  
    @Prop({ required: true })
    password: string;
  
    @Prop({ 
        type: String, 
        enum: ['super-admin', 'admin', 'manager', 'agent'], 
        default: 'agent' 
    })
    type: string;

    @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
    role: Types.ObjectId; // Assuming you have a Role model@Prop({ required: true })
    
}

export const UserSchema = SchemaFactory.createForClass(User);



