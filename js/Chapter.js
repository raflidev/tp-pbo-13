export class Chapter {
  constructor(chaptertitle, page) {
    this.chaptertitle = chaptertitle;
    this.page = page;
  }

  getChapterTitle() {
    return this.chaptertitle;
  }

  setChapterTitle(chaptertitle) {
    this.chaptertitle = chaptertitle;
  }

  getPage() {
    return this.page;
  }

  setPage(page) {
    this.page = page;
  }
}