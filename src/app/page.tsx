import CarPage from "./cars/page";
import ErrorBoundary from "./components/ErrorBoundary";

export default async function Home() {

  return (
    <main className="container mx-auto py-8 px-4">
      <ErrorBoundary>
        <CarPage />
      </ErrorBoundary>
    </main>
  );
}
