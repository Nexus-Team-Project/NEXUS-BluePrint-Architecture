function ChapterFooter({ chapter }) {
  return (
    <footer className="chapter-footer">
      <div className="chapter-footer-left">
        {chapter.number} {chapter.title}
      </div>
      <div className="chapter-footer-right">
        Blueprint Version 1.3 | Aligned with PRD 1.4
      </div>
    </footer>
  );
}

export default ChapterFooter;