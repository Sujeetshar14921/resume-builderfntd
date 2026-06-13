import React from "react";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-white">
              ResumeAI
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Create ATS-friendly resumes with AI assistance
              and increase your chances of landing interviews.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white">
                <Linkedin size={20} />
              </a>

              <a href="#" className="hover:text-white">
                <Github size={20} />
              </a>

              <a href="#" className="hover:text-white">
                <Twitter size={20} />
              </a>

              <a href="#" className="hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Resume Builder
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  ATS Checker
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Resume Templates
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Cover Letter Generator
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Career Tips
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Interview Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Resume Examples
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}

          <div>
            <h3 className="text-white font-semibold mb-5">
              Start Building Today
            </h3>

            <p className="text-slate-400 mb-5">
              Join thousands of job seekers using AI to
              create professional resumes.
            </p>

            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl transition-all">
              Create Resume
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
