import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';

@Injectable()
export class BoardsService {
  // 게시물 저장
  private boards: Board[] = [];

  // 모든 게시물 조회
  getAllBoards(): Board[] {
    return this.boards;
  }
}
