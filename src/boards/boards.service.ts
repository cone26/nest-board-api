import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
@Injectable()
export class BoardsService {
  // 게시물 저장
  private boards: Board[] = [];

  // 모든 게시물 조회
  getAllBoards(): Board[] {
    return this.boards;
  }

  // 게시물 생성
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }
}
