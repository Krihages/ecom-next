export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className=" text-center py-6 max-w-5xl mx-auto px-4 lg:px-10">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
