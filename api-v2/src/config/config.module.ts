import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://araldb:naIVI2oVuCCLyG7Y@cluster0.qxrsfyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
})
export class ConfigModule {}
