import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Providers({ children }: { children: any }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default Providers;
