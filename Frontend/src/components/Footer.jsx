import {
  ArrowUp,
  BookOpen,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Sparkles,
} from "lucide-react";
import Logo from "./LOGO/logo";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
 
              <div>
                <Logo></Logo>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-slate-600">
              Got Questions? Call us
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#FF7B6B]" />
                <span className="font-semibold">+670 413 90 762</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#FF7B6B]" />
                <span>readit@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-[#FF7B6B]" />
                <span>
                  79 Sleepy Hollow St. <br /> Jamaica, New York 1432
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Costumers Support</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="hover:text-slate-900 transition-colors">
                Store List
              </li>
              <li className="hover:text-slate-900 transition-colors">
                Opening Hours
              </li>
              <li className="hover:text-slate-900 transition-colors">
                Contact Us
              </li>
              <li className="hover:text-slate-900 transition-colors">
                Return Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Categories</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="hover:text-slate-900 transition-colors">
                Novel Books
              </li>
              <li className="hover:text-slate-900 transition-colors">
                Poetry Books
              </li>
              <li className="hover:text-slate-900 transition-colors">
                Political Books
              </li>
              <li className="hover:text-slate-900 transition-colors">
                History Books
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Subcribe.</h3>
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              Our conversation is just getting started
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#FF7B6B] focus:ring-2 focus:ring-[#FF7B6B]/20"
              />
              <button className="inline-flex items-center justify-center rounded-2xl bg-[#FF7B6B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6955]">
                Subscribe
              </button>
            </div>
            <p className="mt-8 text-sm font-semibold text-slate-900">
              Follow Us On
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#FF7B6B] hover:text-[#FF7B6B]">
                <Globe2 className="h-5 w-5" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#FF7B6B] hover:text-[#FF7B6B]">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#FF7B6B] hover:text-[#FF7B6B]">
                <MessageCircle className="h-5 w-5" />
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#FF7B6B] hover:text-[#FF7B6B]">
                <Sparkles className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-6 ">
          <div className="flex  flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500 mx-auto">
              © All Rights Reserved 2025 By Readit.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
