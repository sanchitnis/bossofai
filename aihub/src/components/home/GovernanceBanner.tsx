import { Link } from "react-router-dom";
import { Shield, FileCheck, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GovernanceBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Icons */}
          <div className="flex lg:flex-col gap-4">
            {[
              { icon: Shield, color: "bg-primary" },
              { icon: FileCheck, color: "bg-accent" },
              { icon: Scale, color: "bg-track-admin" },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl ${item.color} text-white shadow-lg animate-scale-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="h-6 w-6" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Governance & Responsible AI
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              Our commitment to ethical AI use is backed by comprehensive policies on data privacy, human oversight, and responsible implementation guidelines.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button asChild>
                <Link to="/governance">
                  View Policies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/governance#ethics">
                  Ethics Guidelines
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceBanner;
