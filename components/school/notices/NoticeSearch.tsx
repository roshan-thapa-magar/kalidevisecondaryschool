import { Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NoticeSearch() {
  return (
    <section className="py-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-xl border bg-background p-4 transition-all focus-within:ring-2 focus-within:ring-primary">
            <Search className="text-muted-foreground" size={20} />

            <input
              type="text"
              placeholder="Search notices by title, category, or keyword..."
              className="w-full bg-transparent outline-none"
            />
          </div>

          {/* Filter Button */}
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
    </section>
  );
}