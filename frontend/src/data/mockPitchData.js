export const mockPitchData = {
  slides: [
    {
      id: 1,
      type: "hero",
      title: "Galaxy Contracting LLC",
      company: "Galaxy Contracting LLC",
      tagline: "Revolutionizing Commercial Roofing with Innovative Coating Solutions",
      industry: "Commercial Roofing & Construction",
      highlights: [
        { value: "85%", label: "Sun Reflectivity" },
        { value: "20 Years", label: "Warranty" },
        { value: "50%", label: "Cost Savings" }
      ]
    },
    {
      id: 2,
      type: "problem",
      title: "The Commercial Roofing Problem",
      subtitle: "Traditional roofing solutions are expensive, disruptive, and inefficient",
      problems: [
        {
          title: "High Installation Costs",
          description: "Traditional roofing systems require significant upfront investment and labor-intensive installation processes.",
          impact: "Increases project costs by 40-60%"
        },
        {
          title: "Disruptive Installation",
          description: "Conventional roofing installations disrupt business operations, requiring closures and creating safety hazards.",
          impact: "Lost revenue during installation"
        },
        {
          title: "Poor Energy Efficiency",
          description: "Standard roofing materials absorb heat, increasing cooling costs and energy consumption.",
          impact: "30% higher energy bills"
        },
        {
          title: "Limited Longevity",
          description: "Traditional roofing systems often fail within 10-15 years, requiring frequent replacements.",
          impact: "Recurring capital expenses"
        }
      ]
    },
    {
      id: 3,
      type: "solution",
      title: "Our Innovation: Advanced Roof Coatings",
      description: "Galaxy Contracting LLC offers revolutionary roof coating technology that transforms existing roofs into highly efficient, long-lasting systems with minimal disruption.",
      benefits: [
        {
          title: "Non-Intrusive Application",
          description: "Our coating system can be applied over existing roofing materials without disrupting business operations."
        },
        {
          title: "Exponential Cost Savings",
          description: "Reduce installation costs by up to 70% compared to traditional roof replacement."
        },
        {
          title: "Superior Performance",
          description: "Advanced white reflective coating with 85% sun deflection rate for maximum energy efficiency."
        }
      ]
    },
    {
      id: 4,
      type: "product",
      title: "Galaxy Coating Technology",
      subtitle: "Advanced roofing solutions engineered for performance and longevity",
      features: [
        {
          title: "Sun Reflectivity",
          description: "White reflective finish deflects solar radiation",
          value: "85%",
          icon: "sun"
        },
        {
          title: "Warranty Period",
          description: "Industry-leading guarantee coverage",
          value: "20 Years",
          icon: "shield"
        },
        {
          title: "Energy Savings",
          description: "Reduction in cooling costs",
          value: "40-60%",
          icon: "zap"
        },
        {
          title: "Cost Reduction",
          description: "vs traditional roof replacement",
          value: "70%",
          icon: "dollar"
        }
      ],
      advantages: [
        "Seamless application over existing roofing materials",
        "Weather-resistant and UV-stable formulation",
        "Reduces roof surface temperature by up to 50°F",
        "Environmentally friendly and sustainable solution",
        "Fast installation with minimal business disruption",
        "Improves building comfort and indoor air quality"
      ]
    },
    {
      id: 5,
      type: "market",
      title: "Market Opportunity",
      subtitle: "Massive addressable market in commercial roofing sector",
      marketStats: [
        { value: "$47.5B", label: "Global Commercial Roofing Market" },
        { value: "8.2%", label: "Annual Growth Rate (CAGR)" },
        { value: "$8.9B", label: "US Market Size by 2027" }
      ],
      segments: [
        {
          name: "Office Buildings",
          description: "Corporate facilities seeking energy efficiency and cost reduction",
          size: "$12.3B annually"
        },
        {
          name: "Industrial Facilities",
          description: "Manufacturing and warehouse facilities with large roof areas",
          size: "$9.7B annually"
        },
        {
          name: "Retail Centers",
          description: "Shopping centers and big-box retailers focused on operational efficiency",
          size: "$6.8B annually"
        },
        {
          name: "Healthcare & Education",
          description: "Hospitals, schools, and institutions requiring reliable roofing solutions",
          size: "$4.2B annually"
        }
      ]
    },
    {
      id: 6,
      type: "business",
      title: "Business Model",
      subtitle: "Multiple revenue streams ensuring sustainable growth",
      revenueStreams: [
        {
          name: "Installation Services",
          description: "Direct coating application and installation",
          percentage: "60%"
        },
        {
          name: "Product Sales",
          description: "Galaxy coating materials to contractors",
          percentage: "25%"
        },
        {
          name: "Maintenance Contracts",
          description: "Ongoing maintenance and inspection services",
          percentage: "10%"
        },
        {
          name: "Consulting & Training",
          description: "Technical consulting and contractor training programs",
          percentage: "5%"
        }
      ],
      metrics: [
        { label: "Average Project Value", value: "$125,000" },
        { label: "Gross Margin", value: "65%" },
        { label: "Customer Retention", value: "92%" },
        { label: "Installation Time", value: "3-5 days" },
        { label: "Break-even Point", value: "18 months" }
      ]
    },
    {
      id: 7,
      type: "competitive",
      title: "Competitive Advantage",
      subtitle: "How Galaxy Contracting stands apart from traditional solutions",
      competitors: [
        {
          name: "Traditional Roofing",
          isUs: false,
          features: [
            { name: "20+ Year Warranty", available: false },
            { name: "85% Sun Reflectivity", available: false },
            { name: "Non-Intrusive Installation", available: false },
            { name: "Energy Cost Savings", available: false },
            { name: "Same-Day Installation", available: false },
            { name: "Existing Roof Compatible", available: false }
          ]
        },
        {
          name: "Standard Coatings",
          isUs: false,
          features: [
            { name: "20+ Year Warranty", available: false },
            { name: "85% Sun Reflectivity", available: false },
            { name: "Non-Intrusive Installation", available: true },
            { name: "Energy Cost Savings", available: true },
            { name: "Same-Day Installation", available: false },
            { name: "Existing Roof Compatible", available: true }
          ]
        },
        {
          name: "Galaxy Coatings",
          isUs: true,
          features: [
            { name: "20+ Year Warranty", available: true },
            { name: "85% Sun Reflectivity", available: true },
            { name: "Non-Intrusive Installation", available: true },
            { name: "Energy Cost Savings", available: true },
            { name: "Same-Day Installation", available: true },
            { name: "Existing Roof Compatible", available: true }
          ]
        }
      ]
    },
    {
      id: 8,
      type: "financials",
      title: "Financial Projections",
      subtitle: "Strong growth trajectory with attractive returns",
      projections: [
        { year: 1, revenue: "$2.8M", profit: "$420K" },
        { year: 2, revenue: "$6.2M", profit: "$1.1M" },
        { year: 3, revenue: "$12.5M", profit: "$2.8M" }
      ],
      useOfFunds: [
        { category: "Equipment & Technology", percentage: "35%" },
        { category: "Marketing & Sales", percentage: "25%" },
        { category: "Working Capital", percentage: "20%" },
        { category: "Team Expansion", percentage: "15%" },
        { category: "R&D", percentage: "5%" }
      ]
    },
    {
      id: 9,
      type: "team",
      title: "Leadership Team",
      subtitle: "Experienced professionals driving innovation in roofing solutions",
      members: [
        {
          name: "Michael Rodriguez",
          role: "CEO & Founder",
          experience: "15+ years in commercial construction",
          background: "Former VP at Regional Roofing Corp, MBA from State University"
        },
        {
          name: "Sarah Chen",
          role: "CTO",
          experience: "12+ years in materials engineering",
          background: "PhD in Chemical Engineering, 8 patents in coating technology"
        },
        {
          name: "David Thompson",
          role: "VP of Operations",
          experience: "20+ years in project management",
          background: "Former Operations Director at BuildTech Solutions"
        },
        {
          name: "Jennifer Adams",
          role: "VP of Sales",
          experience: "18+ years in B2B sales",
          background: "Former Regional Sales Manager at Construction Materials Inc"
        },
        {
          name: "Robert Kim",
          role: "CFO",
          experience: "14+ years in finance",
          background: "Former Finance Director at GreenTech Ventures, CPA"
        },
        {
          name: "Lisa Martinez",
          role: "Head of Quality Assurance",
          experience: "10+ years in quality control",
          background: "Former QA Manager at Advanced Materials Corp"
        }
      ]
    },
    {
      id: 10,
      type: "investment",
      title: "Investment Opportunity",
      subtitle: "Partner with us to revolutionize the commercial roofing industry",
      amount: "$3.5M",
      returns: "25-30% IRR",
      benefits: [
        "Equity stake in rapidly growing company",
        "Board representation and strategic input",
        "Preferred returns on investment",
        "Exit opportunities within 5-7 years",
        "Tax advantages through opportunity zones",
        "ESG impact through energy-efficient solutions"
      ]
    },
    {
      id: 11,
      type: "contact",
      title: "Let's Build the Future Together",
      subtitle: "Contact our team to learn more about this investment opportunity",
      email: "investors@galaxycontracting.com",
      phone: "(555) 123-4567",
      location: "Dallas, TX"
    }
  ]
};