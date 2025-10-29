import { Metadata } from "next";
import CreateNote from "./CreateNote";

export const metadata: Metadata = {
  title: `Create Note`,
  description: "From to create a note",
  openGraph: {
    title: `Note Hub App`,
    description: "Training in metaData and zustand",
    url: `https://notehub.com/`,
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Note Hub image",
      },
    ],
    type: "article",
  },
};

export default function CreatePage() {
  return (
    <div>
      <CreateNote />
    </div>
  );
}
