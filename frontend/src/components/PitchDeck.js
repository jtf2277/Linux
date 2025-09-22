import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Shield, 
  Sun, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Mail, 
  Phone,
  MapPin,
  Star,
  Zap,
  CheckCircle,
  Target,
  BarChart3,
  Calendar
} from "lucide-react";
import { mockPitchData } from "../data/mockPitchData";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = mockPitchData.slides;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderSlideContent = (slide) => {
    switch (slide.type) {
      case "hero":
        return <HeroSlide data={slide} />;
      case "problem":
        return <ProblemSlide data={slide} />;
      case "solution":
        return <SolutionSlide data={slide} />;
      case "product":
        return <ProductSlide data={slide} />;
      case "market":
        return <MarketSlide data={slide} />;
      case "business":
        return <BusinessSlide data={slide} />;
      case "competitive":
        return <CompetitiveSlide data={slide} />;
      case "financials":
        return <FinancialsSlide data={slide} />;
      case "team":
        return <TeamSlide data={slide} />;
      case "investment":
        return <InvestmentSlide data={slide} />;
      case "contact":
        return <ContactSlide data={slide} />;
      default:
        return <div>Slide content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-slate-700" />
              <h1 className="text-xl font-bold text-slate-800">Galaxy Contracting LLC</h1>
            </div>
            
            {/* Slide Counter */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">
                {currentSlide + 1} of {slides.length}
              </span>
              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-slate-700" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
            {renderSlideContent(slides[currentSlide])}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-slate-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <span className="text-sm font-medium text-slate-700 px-3">
            {slides[currentSlide].title}
          </span>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Individual Slide Components
const HeroSlide = ({ data }) => (
  <div className="text-center max-w-4xl mx-auto">
    <div className="mb-8">
      <Building2 className="w-20 h-20 text-slate-700 mx-auto mb-6" />
      <h1 className="text-5xl font-bold text-slate-800 mb-4">
        {data.company}
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
        {data.tagline}
      </p>
      <Badge variant="secondary" className="text-lg px-6 py-2">
        {data.industry}
      </Badge>
    </div>
    <div className="grid grid-cols-3 gap-8 mt-12">
      {data.highlights.map((highlight, index) => (
        <Card key={index} className="border-slate-200">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-slate-800 mb-2">
              {highlight.value}
            </div>
            <div className="text-slate-600">{highlight.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ProblemSlide = ({ data }) => (
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {data.problems.map((problem, index) => (
        <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {problem.title}
                </h3>
                <p className="text-slate-600">{problem.description}</p>
                <div className="mt-3 text-sm font-medium text-red-600">
                  Impact: {problem.impact}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const SolutionSlide = ({ data }) => (
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">{data.description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.benefits.map((benefit, index) => (
        <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-slate-600">{benefit.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ProductSlide = ({ data }) => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="grid grid-cols-2 gap-6">
          {data.features.map((feature, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon === 'sun' && <Sun className="w-6 h-6 text-orange-500" />}
                  {feature.icon === 'shield' && <Shield className="w-6 h-6 text-blue-500" />}
                  {feature.icon === 'zap' && <Zap className="w-6 h-6 text-yellow-500" />}
                  {feature.icon === 'dollar' && <DollarSign className="w-6 h-6 text-green-500" />}
                  <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{feature.description}</p>
                <div className="mt-2 text-lg font-bold text-slate-800">
                  {feature.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="lg:pl-8">
        <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Choose Galaxy Coatings?</h3>
            <ul className="space-y-3">
              {data.advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

const MarketSlide = ({ data }) => (
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {data.marketStats.map((stat, index) => (
        <Card key={index} className="border-slate-200 text-center">
          <CardContent className="p-6">
            <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
            <div className="text-slate-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
    <Card className="border-slate-200">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Target Market Segments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.segments.map((segment, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">{segment.name}</h4>
                <p className="text-slate-600 text-sm">{segment.description}</p>
                <div className="text-sm font-medium text-blue-600 mt-1">
                  Market Size: {segment.size}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const BusinessSlide = ({ data }) => (
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Revenue Streams</h3>
          <div className="space-y-4">
            {data.revenueStreams.map((stream, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div>
                  <div className="font-semibold text-slate-800">{stream.name}</div>
                  <div className="text-sm text-slate-600">{stream.description}</div>
                </div>
                <div className="text-lg font-bold text-slate-800">{stream.percentage}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Key Metrics</h3>
          <div className="space-y-4">
            {data.metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-slate-700">{metric.label}</span>
                <span className="font-semibold text-slate-800">{metric.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const CompetitiveSlide = ({ data }) => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {data.competitors.map((competitor, index) => (
        <Card key={index} className={`border-2 ${
          competitor.isUs ? 'border-green-300 bg-green-50' : 'border-slate-200'
        }`}>
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{competitor.name}</h3>
              {competitor.isUs && (
                <Badge variant="default" className="bg-green-600">Our Solution</Badge>
              )}
            </div>
            <div className="space-y-3">
              {competitor.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-2">
                  {feature.available ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                  )}
                  <span className="text-sm text-slate-700">{feature.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const FinancialsSlide = ({ data }) => (
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">3-Year Projections</h3>
          <div className="space-y-4">
            {data.projections.map((year, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-slate-800">Year {year.year}</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Revenue:</span>
                    <span className="font-semibold ml-2">{year.revenue}</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Profit:</span>
                    <span className="font-semibold ml-2">{year.profit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card className="border-slate-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Use of Funds</h3>
          <div className="space-y-4">
            {data.useOfFunds.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  <span className="text-slate-700">{item.category}</span>
                </div>
                <span className="font-semibold text-slate-800">{item.percentage}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

const TeamSlide = ({ data }) => (
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.members.map((member, index) => (
        <Card key={index} className="border-slate-200 text-center">
          <CardContent className="p-6">
            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-slate-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
            <p className="text-blue-600 font-medium mb-3">{member.role}</p>
            <p className="text-slate-600 text-sm mb-3">{member.experience}</p>
            <div className="text-xs text-slate-500">
              {member.background}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const InvestmentSlide = ({ data }) => (
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <Card className="border-slate-200 bg-gradient-to-br from-blue-50 to-white">
        <CardContent className="p-8 text-center">
          <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-slate-800 mb-2">{data.amount}</div>
          <div className="text-slate-600 mb-3">Operations Investment</div>
          <div className="text-lg font-semibold text-blue-600">{data.returns}</div>
          <div className="text-sm text-slate-500">6-12 months</div>
        </CardContent>
      </Card>
      <Card className="border-slate-200 bg-gradient-to-br from-purple-50 to-white">
        <CardContent className="p-8 text-center">
          <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-slate-800 mb-2">$1.5M</div>
          <div className="text-slate-600 mb-3">Coating R&D Investment</div>
          <div className="text-lg font-semibold text-purple-600">200-300% ROI</div>
          <div className="text-sm text-slate-500">18-36 months</div>
        </CardContent>
      </Card>
    </div>
    <Card className="border-slate-200">
      <CardContent className="p-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6">What You Get</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-slate-700">{benefit}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const ContactSlide = ({ data }) => (
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">{data.title}</h2>
      <p className="text-xl text-slate-600">{data.subtitle}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <Card className="border-slate-200">
        <CardContent className="p-6 text-center">
          <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="font-semibold text-slate-800">Email</div>
          <div className="text-slate-600">{data.email}</div>
        </CardContent>
      </Card>
      <Card className="border-slate-200">
        <CardContent className="p-6 text-center">
          <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="font-semibold text-slate-800">Phone</div>
          <div className="text-slate-600">{data.phone}</div>
        </CardContent>
      </Card>
      <Card className="border-slate-200">
        <CardContent className="p-6 text-center">
          <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
          <div className="font-semibold text-slate-800">Location</div>
          <div className="text-slate-600">{data.location}</div>
        </CardContent>
      </Card>
    </div>
    <Card className="border-slate-200 bg-gradient-to-br from-slate-50 to-white">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Partner With Us?</h3>
        <p className="text-slate-600 mb-6">
          Join us in revolutionizing the commercial roofing industry with innovative, 
          cost-effective solutions that benefit both businesses and the environment.
        </p>
        <Button size="lg" className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3">
          Schedule a Meeting
        </Button>
      </CardContent>
    </Card>
  </div>
);

export default PitchDeck;