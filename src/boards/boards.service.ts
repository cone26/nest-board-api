import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  // 게시물 저장
  private boards = [];

  // 모든 게시물 조회
  getAllBoards() {
    return this.boards;
  }
}
