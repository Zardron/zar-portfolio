import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Blog | Zardron",
  description: "Blog posts and articles by Zardron - Full Stack Developer",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="text-primary">06.</span> Blog
        </h1>
        <p className="text-text-muted text-lg">
          Content coming soon...
        </p>
      </div>
    </PageLayout>
  );
}
