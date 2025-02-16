import { client } from "@/app/lib/wix";
import { convertWixImageToUrl } from "@/app/lib/wix";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function BookPage({
  params,
}: {
  params: { bookId: string };
}) {
  const booksData = await client.items
    .query("Books")
    .eq("_id", params.bookId) // Filtering by bookId
    .find();

  const book = booksData.items[0]; // Extract the first book from results

  return (
    <div className="container mx-auto py-12 ">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{book?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Image
              src={convertWixImageToUrl(book?.image)}
              alt={book?.title}
              width={200}
              height={300}
              className="w-[200px] h-[300px] mb-4 rounded-lg"
            />

            <div>
              <p className="text-lg font-semibold">By {book?.author}</p>
              <p className="text-sm text-muted-foreground">
                Published in {book?.publicationDate}
              </p>
              <p className="mt-4">{book?.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
