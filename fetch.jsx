export default async function Page() {
  const res = await fetch("https://api.example.com/data", {
    cache: "force-cache",
  });

  const data = await res.json();

  return <div>{/* Render data */}</div>;
}
