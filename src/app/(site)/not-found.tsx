import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-background to-muted/20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative">
          <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-xl opacity-70"></div>
          <h1 className="relative text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/80">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Page Not Found</h2>
        
        <p className="text-muted-foreground max-w-lg mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild className="group" size="lg">
            <Link href="/" className="flex items-center gap-2">
              <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild size="lg">
            <a href="mailto:contact@example.com" className="hover:bg-accent">
              Contact Support
            </a>
          </Button>
        </div>
        
        <div className="pt-12">
          <p className="text-sm text-muted-foreground">
            Or try searching for what you&apos;re looking for
          </p>
          <div className="mt-2 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value)}`;
                  }
                }}
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⏎</span>
              </kbd>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground">
        <p>Error code: 404 | Page not found</p>
      </div>
    </div>
  );
}
