import { Injectable, NotFoundException } from '@nestjs/common';
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

  // 특정 board 조회
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    // 에러 핸들링 코드 추가
    if (!found) {
      throw new NotFoundException(`Cannot find Board with id ${id}`);
    }
    return found;
  }

  //게시물 삭제
  deleteBoard(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  //게시물 status 업데이트
  updateBoardStatus(id: string, status: BoardStatus): Board {
    // 먼저 해당 게시물을 찾아서
    const board = this.getBoardById(id);
    // 상태만 바꿔주기
    board.status = status;
    return board;
  }
}
