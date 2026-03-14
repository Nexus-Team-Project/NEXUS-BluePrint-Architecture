import ChapterNavigation from "./ChapterNavigation";
import ChapterFooter from "./ChapterFooter";

function Page({ chapter, children, minimal = false }) {
  return (
    <section className={`page ${minimal ? "page-minimal" : ""}`}>
      <div className="page-header">
        <h1>{chapter.title}</h1>
        {chapter.subtitle && <p>{chapter.subtitle}</p>}
      </div>

      <div className="page-body">{children}</div>

      <ChapterNavigation chapter={chapter} />
      <ChapterFooter chapter={chapter} />
    </section>
  );
}

export default Page;