import { Metadata } from "next";

// exportしないと反映されない
export const metadata: Metadata = {
  title: "Customers",
};

export default function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  return <p>Customers Page</p>;
}
