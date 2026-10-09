import { Link } from "react-router-dom";
import { Mail, ExternalLink, Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-display font-bold text-lg">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-tight">BossOfAI Hub</div>
                <div className="text-xs text-primary-foreground/70">AI for Higher Education</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A free, open reference hub empowering students, faculty, and researchers with AI-powered tools across the TRACK framework.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/assessment-vault" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Assessment Vault
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Governance
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* TRACK Pillars */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">TRACK Pillars</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/track/teaching" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Teaching & Learning
                </Link>
              </li>
              <li>
                <Link to="/track/research" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/track/administration" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Administration
                </Link>
              </li>
              <li>
                <Link to="/track/consulting" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/track/kaizen" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Kaizen
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@bossofai.org" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  hello@bossofai.org
                </a>
              </li>
              <li>
                <a
                  href="https://bossofai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-accent" />
                  bossofai.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BossOfAI. Open for all to learn. No rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/governance" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                AI Policy
              </Link>
              <a
                href="https://bossofai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1"
              >
                BossOfAI
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
