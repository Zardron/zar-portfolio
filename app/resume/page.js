import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Resume | Zardron",
  description: "Resume and experience of Zardron - Full Stack Developer",
};

export default function ResumePage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="text-primary">04.</span> Resume
        </h1>
        <p className="text-text-muted text-lg">
          Content coming soon...
        </p>
      </div>
    </PageLayout>
  );
}
