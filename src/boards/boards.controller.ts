import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  //전체 게시물 조회
  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
