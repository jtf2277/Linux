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
        { value: "30-50%", label: "Cost Savings" }
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
          value: "30-50%",
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
        { label: "Average Project Value", value: "$500K - $1.5M" },
        { label: "Gross Margin", value: "65%" },
        { label: "Customer Retention", value: "92%" },
        { label: "Installation Time", value: "3-5 days" },
        { label: "Time to Initial ROI", value: "6 months" }
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
        { year: 1, revenue: "$10.0M", profit: "$4.0M" },
        { year: 2, revenue: "$18.5M", profit: "$8.1M" },
        { year: 3, revenue: "$32.0M", profit: "$15.4M" }
      ],
      useOfFunds: [
        { category: "Coating R&D & Development", percentage: "40%" },
        { category: "Equipment & Technology", percentage: "25%" },
        { category: "Marketing & Sales", percentage: "20%" },
        { category: "Working Capital", percentage: "10%" },
        { category: "Team Expansion", percentage: "5%" }
      ]
    },
    {
      id: 9,
      type: "team",
      title: "Leadership Team",
      subtitle: "Experienced professionals driving innovation in roofing solutions",
      members: [
        {
          name: "Jake Facer",
          role: "CEO & Founder",
          experience: "15+ years in commercial construction",
          background: "Visionary leader with extensive roofing industry expertise"
        },
        {
          name: "Nate Schuette",
          role: "CTO",
          experience: "12+ years in materials engineering & technology",
          background: "Technical expert in coating development and engineering solutions"
        },
        {
          name: "Position Open",
          role: "VP of Operations",
          experience: "Seeking experienced candidate",
          background: "Looking for 15+ years project management experience"
        },
        {
          name: "Position Open",
          role: "VP of Sales",
          experience: "Seeking experienced candidate",
          background: "Looking for 15+ years B2B sales experience in construction"
        },
        {
          name: "Position Open",
          role: "CFO",
          experience: "Seeking experienced candidate",
          background: "Looking for finance leader with construction industry experience"
        },
        {
          name: "Position Open",
          role: "Head of Quality Assurance",
          experience: "Seeking experienced candidate",
          background: "Looking for quality control expert in coating/materials"
        }
      ]
    },
    {
      id: 10,
      type: "investment",
      title: "Investment Opportunity",
      subtitle: "Partner with us to revolutionize the commercial roofing industry",
      amount: "$1.0M",
      returns: "400% ROI Year 1",
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