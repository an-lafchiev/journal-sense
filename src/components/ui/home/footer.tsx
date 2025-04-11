import Link from "next/link";
import { BookOpen } from "lucide-react";
import HomeData from "@/../public/content_home.json";

export default function Footer() {
  const footerData = HomeData.footer;
  const companyInfo = footerData.company_info;
  const linkTypes = Object.entries(footerData.links);

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{companyInfo.name}</h3>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-teal-600" />
              <span className="font-medium">{companyInfo.name}</span>
            </div>
            <p className="text-sm text-gray-600">{companyInfo.tagline}</p>
          </div>
          {linkTypes.map(([type, links]) => (
            <div key={type}>
              <h3 className="font-semibold mb-4 capitalize">{type}</h3>
              <ul className="space-y-3 text-sm">
                {links.map((link) => (
                  <li key={link.url}>
                    <Link
                      href={link.url}
                      className="text-gray-600 hover:text-teal-600"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
