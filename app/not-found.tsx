import { Metadata } from "next";
import css from "./Not-found.module.css";

export const metadata: Metadata = {
  title: `Not-found 404 of Note Hub App`,
  description: "There is no such page, please visit https://notehub.com/",
  openGraph: {
    title: `Note Hub App`,
    description: "Training in metaData and zustand",
    url: `https://notehub.com/`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-10.png",
        width: 1200,
        height: 630,
        alt: "Note Hub not-found image",
      },
    ],
    type: "article",
  },
};

export default function NotFound() {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
