import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}

// module
// Application Module <- User Module <- Feature Module 1
//                    <- User Module <- Feature Module 2
//                    <- User Module <- Feature Module 3

// Application Module <- Orders Module
// Application Module <- Chat Module

// 관련이 있는 기능들을 집합으로 구성
// 같은 기능을 사용하는 것들은 하나의 모듈 폴더안에 넣어서 사용 (UserController, UserService, UserEntity => UserModule)

// module은 기본적으로 싱글톤이기 때문에 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있다.
// ex)
// Users Module <- Shared Module
// Orders Module <- Shared Module
// Chat Module <- Shared Module
