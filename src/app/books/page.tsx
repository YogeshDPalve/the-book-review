import Image from "next/image";
import { client, convertWixImageToUrl } from "../lib/wix";
import { items } from "@wix/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader, 
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BookIcon } from "lucide-react";

export default async function Home() {
  const books = await client.items
    .query("Books")
    .find()
    .then((res: any) => res.items); // `items` already contains the book data

  console.log(books);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book: any) => (
          <Card className="shadow-md  " key={book?._id}>
            <CardHeader>
              <CardTitle>{book.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center ">
              {book.image ? (
                <Image
                  src={convertWixImageToUrl(book.image)}
                  alt={book?.title}
                  width={150}
                  height={200}
                  className="w-[150px] h-[200px] mb-4 rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-[150px] h-[200px] mb-4 gap-3 rounded-lg bg-gray-200">
                  <BookIcon className="w-10 h-10 text-gray-700" />
                  <p>No Image</p>
                </div>
              )}
              <p>{book.author}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/books/${book?._id}`}>Read reviews</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button>Add Books</Button>
    </div>
  );
}
