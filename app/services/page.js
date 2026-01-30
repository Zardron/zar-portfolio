import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Services | Zardron",
  description: "Services offered by Zardron - Full Stack Developer",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="text-primary">03.</span> Services
        </h1>
        <p className="text-text-muted text-lg">
          Content coming soon...
        </p>
      </div>
    </PageLayout>
  );
}
