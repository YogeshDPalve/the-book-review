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
import { BookIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { PostReviewForm } from "./post-review-form";

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
            {book.image ? (
              <Image
                src={convertWixImageToUrl(book.image)}
                alt={book?.title}
                width={150}
                height={200}
                className="w-[150px] h-[200px] mb-4 rounded-lg"
              />
            ) : (
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-[150px] h-[200px] mb-4 gap-3 rounded-lg bg-gray-200">
                <BookIcon className="w-10 h-10 text-gray-700" />
                <p>No Image</p>
              </div>
            )}

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
      <Card>
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div key={review?._id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{review?.name}</p>
                  <div className="flex">
                    {[...Array(review?.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2">{review?.review}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <PostReviewForm bookId={book?._id} />
    </div>
  );
}
