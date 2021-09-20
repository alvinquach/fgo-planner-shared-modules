import mongoose from 'mongoose';
export declare const mongooseConnection: (uri: string) => Promise<typeof mongoose>;
