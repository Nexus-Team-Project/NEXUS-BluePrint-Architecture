import { Link } from "react-router-dom";
import { chapters } from "../data/chapters";

function ChapterNavigation({ chapter }) {
  const previous = chapter.index > 0 ? chapters[chapter.index - 1] : null;
  const next = chapter.index < chapters.length - 1 ? chapters[chapter.index + 1] : null;

  return (
    <div className="chapter-nav">
      {previous ? (
        <Link to={previous.path} className="chapter-nav-button chapter-nav-prev">
          <span className="chapter-nav-label">← Previous Chapter</span>
          <span className="chapter-nav-title">
            {previous.number} {previous.title}
          </span>
        </Link>
      ) : (
        <div className="chapter-nav-spacer" />
      )}

      {next ? (
        <Link to={next.path} className="chapter-nav-button chapter-nav-next">
          <span className="chapter-nav-label">Next Chapter →</span>
          <span className="chapter-nav-title">
            {next.number} {next.title}
          </span>
        </Link>
      ) : (
        <div className="chapter-nav-spacer" />
      )}
    </div>
  );
}

export default ChapterNavigation;