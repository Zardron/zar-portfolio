import PageLayout from "../components/PageLayout";

export const metadata = {
  title: "Contact | Zardron",
  description: "Get in touch with Zardron - Full Stack Developer",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="text-primary">07.</span> Contact
        </h1>
        <p className="text-text-muted text-lg">
          Content coming soon...
        </p>
      </div>
    </PageLayout>
  );
}
