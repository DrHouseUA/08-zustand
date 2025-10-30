import { fetchNotes } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Notes from "./Notes.client";
import { NoteTag } from "@/types/note";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug: tag } = await params;
  const searchTag = tag[0] === "all" ? undefined : tag[0];
  return {
    title: `${searchTag} Notes`,
    description: `List of ${searchTag} notes`,
    openGraph: {
      title: `Notes Filtered by tag: ${searchTag}`,
      description: `Notes filtered by the '${searchTag}' tag.`,
      url: `https:/notehub.com/notes/filter/${searchTag}`,
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
}

const NotesPage = async ({ params }: Props) => {
  const { slug: tag } = await params;
  const searchTag = tag[0] === "all" ? undefined : tag[0];

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", { currentPage: 1, search: "", tag: searchTag }],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
        tag: searchTag as NoteTag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notes tag={searchTag as NoteTag} />
    </HydrationBoundary>
  );
};

export default NotesPage;
