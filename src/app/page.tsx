import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navigation";

export default async function Page() {

  return (
    <main className="container mx-auto py-8 px-4">
      <ErrorBoundary>
        <Navbar />

      </ErrorBoundary>
    </main>
  );
}
