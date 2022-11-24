import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //전체 게시물 조회
  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
}
