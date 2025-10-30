import { Metadata } from "next";
import CreateNote from "./CreateNote";

export const metadata: Metadata = {
  title: `Create Note`,
  description: "Form to create a note",
  openGraph: {
    title: `Create Note page in NoteHub App`,
    description: "Form to create a note",
    url: `https://notehub.com/notes/action/create`,
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
  return <CreateNote />;
}
