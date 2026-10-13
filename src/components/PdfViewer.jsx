import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../styles/embla.css";

// pdf.js is heavy, so it is only loaded the first time a PDF is opened
let pdfjsPromise;
const loadPdfjs = () => {
  if (!pdfjsPromise) {
    pdfjsPromise = Promise.all([
      import("pdfjs-dist"),
      import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
    ]).then(([pdfjs, worker]) => {
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      return pdfjs;
    });
  }
  return pdfjsPromise;
};

const PdfPage = ({ doc, pageNumber }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let renderTask;
    let cancelled = false;

    doc.getPage(pageNumber).then((page) => {
      if (cancelled) return;
      const base = page.getViewport({ scale: 1 });
      // Fit the page inside 90vw x 80vh, rendered at device resolution
      const scale = Math.min(
        (window.innerWidth * 0.9) / base.width,
        (window.innerHeight * 0.8) / base.height
      );
      const dpr = window.devicePixelRatio || 1;
      const viewport = page.getViewport({ scale: scale * dpr });
      const canvas = canvasRef.current;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;
      renderTask = page.render({
        canvasContext: canvas.getContext("2d"),
        viewport,
      });
      renderTask.promise.catch(() => {});
    });

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [doc, pageNumber]);

  return <canvas ref={canvasRef} className="bg-white rounded-md shadow-2xl" />;
};

export const PdfViewer = ({ labels }) => {
  const [pdf, setPdf] = useState(null); // { src, title }
  const [doc, setDoc] = useState(null);
  const [error, setError] = useState(false);
  const [current, setCurrent] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const closeViewer = useCallback(() => setPdf(null), []);

  // Intercept plain left clicks on PDF links; modified clicks keep opening a new tab
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest?.("a[data-pdf-viewer]");
      if (
        !link ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      event.preventDefault();
      setPdf({
        src: link.getAttribute("href"),
        title: link.dataset.pdfTitle || "",
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!pdf) return;
    let loadingTask;
    let cancelled = false;
    setDoc(null);
    setError(false);
    setCurrent(0);

    loadPdfjs()
      .then((pdfjs) => {
        if (cancelled) return;
        loadingTask = pdfjs.getDocument(pdf.src);
        return loadingTask.promise;
      })
      .then((loaded) => !cancelled && loaded && setDoc(loaded))
      .catch(() => !cancelled && setError(true));

    document.body.style.overflow = "hidden";
    return () => {
      cancelled = true;
      loadingTask?.destroy();
      document.body.style.overflow = "";
    };
  }, [pdf]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.reInit();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, doc]);

  useEffect(() => {
    if (!pdf) return;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (event.key === "ArrowRight") emblaApi?.scrollNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pdf, emblaApi, closeViewer]);

  if (!pdf) return null;

  const pageCount = doc?.numPages ?? 0;
  const buttonClass =
    "inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20";

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={pdf.title}
      onClick={closeViewer}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="min-w-0 truncate text-sm font-semibold">
          {pdf.title}
          {pageCount > 0 && (
            <span className="ml-2 font-normal text-white/70">
              {current + 1} / {pageCount}
            </span>
          )}
        </p>
        <div className="flex items-center gap-2">
          <a href={pdf.src} download className={buttonClass}>
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="hidden sm:inline">{labels.download}</span>
          </a>
          <a
            href={pdf.src}
            target="_blank"
            rel="noopener"
            className={buttonClass}
            aria-label={labels.openTab}
            title={labels.openTab}
          >
            <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <button
            onClick={closeViewer}
            className="px-2 text-3xl leading-none text-white"
            aria-label={labels.close}
          >
            &times;
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {!doc && (
          <p className="text-white/80" onClick={(e) => e.stopPropagation()}>
            {error ? labels.error : labels.loading}
          </p>
        )}
        {doc && (
          <div
            className="embla w-full"
            ref={emblaRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="embla__container">
              {Array.from({ length: pageCount }, (_, index) => (
                <div className="embla__slide" key={index}>
                  <PdfPage doc={doc} pageNumber={index + 1} />
                </div>
              ))}
            </div>
            <button
              className="embla__prev hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl disabled:opacity-30"
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              disabled={current === 0}
              aria-label={labels.prev}
            >
              &#10094;
            </button>
            <button
              className="embla__next hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl disabled:opacity-30"
              onClick={() => emblaApi && emblaApi.scrollNext()}
              disabled={current >= pageCount - 1}
              aria-label={labels.next}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
